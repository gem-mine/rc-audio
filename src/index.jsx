import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Time from './time'
import Progress from './progress'
import Volume from './volume'
import Audio from './audioEl'
import Switch from './switch'
import addEventListener from 'rc-util/lib/Dom/addEventListener'

class RcAudio extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    volume: PropTypes.number,
    muted: PropTypes.bool,
    currentTime: PropTypes.number,
    autoPlay: PropTypes.bool,
    showBufferProgress: PropTypes.bool,
    showProgressBarInfo: PropTypes.bool,
    cuePoints: PropTypes.array,
    onCuePoints: PropTypes.func,
    onSeeked: PropTypes.func,
    onCanPlay: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    renderTools: PropTypes.func,
    onTimeUpdate: PropTypes.func,
    onDurationChange: PropTypes.func
  }
  static defaultProps = {
    prefixCls: 'rc-audio',
    showBufferProgress: true,
    showProgressBarInfo: true,
    cuePoints: []
  }

  segments = {}
  lastFiredSegment = -0.125

  constructor (props) {
    super(props)
    this.state = {
      playing: false,
      muted: false,
      currentTime: 0,
      duration: 0,
      volume: 0,
      bufferedTime: 0
    }
  }

  componentDidMount () {
    const { volume, muted } = this.props
    if (volume) {
      this.setVolume(this.props.volume)
    } else {
      this.setState({volume: 1})
    }
    if (muted) {
      this.setMuted(muted)
    }
  }
  componentWillUnmount () {
    clearTimeout(this.bufferTimeId)
  }
  // 缓冲进度条
  setBuffered = () => {
    if (!this.audio) {
      return
    }
    const timeRanges = this.audio.getBuffered()
    const duration = this.audio.getDuration()
    if (timeRanges.length !== 0) {
      const bufferedTime = timeRanges.end(timeRanges.length - 1)
      this.setState({bufferedTime})
      if (bufferedTime < duration) {
        this.bufferTimeId = setTimeout(this.setBuffered, 500)
      }
    }
  }

  setVolume = (volume) => {
    volume = Math.min(Math.max(volume, 0), 1)
    this.setState({volume})
    this.audio.setVolume(volume)
  }

  setCurrentTime = (currentTime) => {
    this.setState({currentTime})
    this.audio.setCurrentTime(currentTime)
  }

  setCuePoint = (cues) => {
    this.cuepoints = []
    this.segments = {}
    cues.forEach(this.addCuePoint)
  }

  // 添加处理标识点
  addCuePoint = (cue) => {
    if (!this.cuepoints) {
      this.cuepoints = []
    }
    if (typeof cue === 'number') {
      cue = {
        time: cue
      }
    }
    cue.index = 0
    const segment = this.segmentForCue(cue)
    if (!this.segments[segment]) {
      this.segments[segment] = []
    }
    this.segments[segment].push(cue)
    if (this.cuepoints.length) {
      cue.index = Math.max.apply(null, this.cuepoints.map((cue) => { return cue.index })) + 1
    }
    this.cuepoints.push(cue)
  }

  segmentForCue = (cue) => {
    let time = cue && !isNaN(cue.time) ? cue.time : cue
    if (time < 0) {
      time = this.audio.getDuration() + time
    }
    return Math.round(time / 0.125) * 0.125
  }

  onTimeUpdate = (e) => {
    const currentTime = this.audio.getCurrentTime()
    if (!this.holding) {
      this.setState({currentTime})
    }

    // 触发提示点事件
    const segment = this.segmentForCue(currentTime)
    while (this.lastFiredSegment < segment) {
      this.lastFiredSegment += 0.125
      if (!this.segments[this.lastFiredSegment]) {
        continue
      }
      this.segments[this.lastFiredSegment].forEach((item) => {
        this.props.onCuePoints(item, this.audio)
      })
    }

    const { onTimeUpdate } = this.props
    if (onTimeUpdate) {
      onTimeUpdate(e)
    }
  }

  onSeeked = (e) => {
    const currentTime = this.audio.getCurrentTime()
    this.lastFiredSegment = this.segmentForCue(currentTime || 0) - 0.125
    // 跳转到第0秒时，处理提示点事件
    if (!currentTime && this.segments[0]) {
      this.segments[0].forEach((item) => {
        this.props.onCuePoints(item, this.audio)
      })
    }

    const { onSeeked } = this.props
    if (onSeeked) {
      onSeeked(e)
    }
  }

  onPlay = (e) => {
    this.setState({ playing: true })

    const { onPlay } = this.props
    if (onPlay) {
      onPlay(e)
    }
  }

  onPause = (e) => {
    this.setState({ playing: false })

    const { onPause } = this.props
    if (onPause) {
      onPause(e)
    }
  }

  onDurationChange = (e) => {
    this.setBuffered()
    this.setCuePoint(this.props.cuePoints)
    this.setState({duration: this.audio.getDuration()})
    this.setState({playing: false})

    const { currentTime } = this.props
    if (currentTime) {
      this.setState({currentTime: currentTime})
      this.setCurrentTime(currentTime)
    }

    const { onDurationChange } = this.props
    if (onDurationChange) {
      onDurationChange(e)
    }
  }

  togglePlay = () => {
    this.state.playing ? this.audio.pause() : this.audio.play()
  }

  toggleMuted = () => {
    const { muted } = this.state

    this.setMuted(!muted)
  }
  setMuted = (muted) => {
    this.setState({muted})
    this.audio.setMuted(muted)
  }
  onProgressMouseDown = (e) => {
    e.preventDefault()
    if (e.button !== 0) {
      return
    }
    this.holding = true // 判断鼠标是否按住
    const progressLeft = e.currentTarget.getBoundingClientRect().left + e.currentTarget.clientLeft
    const progressWidth = e.currentTarget.clientWidth
    const newProgress = e.pageX - progressLeft
    const currentTime = (newProgress * this.state.duration) / progressWidth
    this.setState({currentTime: Math.min(Math.max(currentTime, 0), this.state.duration)})

    // 拖动进度条
    this.progressMouseMove = addEventListener(document, 'mousemove', (e) => {
      this.onProgressMouseMove(progressLeft, progressWidth)(e)
    })
    this.progressMouseUp = addEventListener(document, 'mouseup', this.onProgressMouseUp)
  }

  onProgressMouseMove = (progressLeft, progressWidth) => {
    return (event) => {
      if (this.holding) {
        const duration = this.state.duration
        const current = (duration * (event.pageX - progressLeft)) / progressWidth
        if (current >= 0 && current < duration) {
          this.setState({currentTime: current})
        }
      }
    }
  }

  onProgressMouseUp = () => {
    this.holding = false
    this.audio.setCurrentTime(this.state.currentTime)

    if (this.progressMouseMove) {
      this.progressMouseMove.remove()
    }
    if (this.progressMouseUp) {
      this.progressMouseUp.remove()
    }
  }

  onVolumeMouseDown = (e) => {
    e.preventDefault()
    if (e.button !== 0) {
      return
    }
    this.holding = true
    const volumeLeft = e.currentTarget.getBoundingClientRect().left
    const volumeWidth = e.currentTarget.offsetWidth
    const newVolume = e.pageX - volumeLeft
    const volume = (newVolume) / volumeWidth
    this.setVolume(volume)

    // 拖动音量条
    this.volumeMouseMove = addEventListener(document, 'mousemove', (e) => {
      this.onVolumeMouseMove(volumeLeft, volumeWidth)(e)
    })
    this.volumeMouseUp = addEventListener(document, 'mouseup', this.onVolumeMouseUp)
  }

  onVolumeMouseMove = (volumeLeft, volumeWidth) => {
    return (event) => {
      if (this.holding) {
        const current = ((event.pageX - volumeLeft)) / volumeWidth
        if (current >= 0 && current < 1) {
          this.setState({volume: current})
        }
      }
    }
  }

  onVolumeMouseUp = () => {
    this.holding = false
    this.audio.setVolume(this.state.volume)
    if (this.volumeMouseMove) {
      this.volumeMouseMove.remove()
    }
    if (this.volumeMouseUp) {
      this.volumeMouseUp.remove()
    }
  }
  saveAudioRef = (node) => {
    this.audio = node
    // 获取audio标签对象
    this.nativeAudioRef = node && node.audioRef
  }
  render () {
    const {
      prefixCls,
      showBufferProgress,
      showProgressBarInfo,
      cuePoints,
      renderTools,
      playIcon,
      pauseIcon,
      ...restProps } = this.props

    return (
      <div className={`${prefixCls}`}>
        <Progress
          prefixCls={prefixCls}
          cuePoints={cuePoints}
          showProgressBarInfo={showProgressBarInfo}
          currentTime={this.state.currentTime}
          duration={this.state.duration}
          bufferedTime={this.state.bufferedTime}
          showBufferProgress={showBufferProgress}
          setCurrentTime={this.setCurrentTime}
          onProgressMouseDown={this.onProgressMouseDown} />
        <div className={`${prefixCls}-operate`}>
          <Switch
            prefixCls={prefixCls}
            playing={this.state.playing}
            togglePlay={this.togglePlay}
            playIcon={playIcon}
            pauseIcon={pauseIcon}
          />
          <Time
            prefixCls={this.props.prefixCls}
            currentTime={this.state.currentTime}
            duration={this.state.duration} />
          <Volume
            prefixCls={this.props.prefixCls}
            volume={this.state.volume}
            muted={this.state.muted}
            onVolumeMouseDown={this.onVolumeMouseDown}
            toggleMuted={this.toggleMuted}
          />
          <div className={`${prefixCls}-tools`}>
            { renderTools && renderTools()}
          </div>
        </div>
        <Audio
          {...restProps}
          ref={this.saveAudioRef}
          onDurationChange={this.onDurationChange}
          onSeeked={this.onSeeked}
          onPause={this.onPause}
          onPlay={this.onPlay}
          onTimeUpdate={this.onTimeUpdate} />
      </div>
    )
  }
}

export default RcAudio
