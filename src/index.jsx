import React, { Component } from 'react'
import Time from './time'
import ProgressBar from './progressBar'
import Volume from './volume'
import Audio from './audio'
import addEventListener from 'rc-util/lib/Dom/addEventListener'
import classNames from 'classnames'

class PrimaryAudio extends Component {
  static propTypes = {
    prefixCls: React.PropTypes.string,
    src: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
    children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.node]),
    onCanPlay: React.PropTypes.func,
    onPlay: React.PropTypes.func,
    onPause: React.PropTypes.func,
    onTimeUpdate: React.PropTypes.func,
    startVolume: React.PropTypes.number,
    startTime: React.PropTypes.number,
    autoPlay: React.PropTypes.bool,
    showBufferProgress: React.PropTypes.bool,
    showProgressBarInfo: React.PropTypes.bool
  }
  static defaultProps = {
    prefixCls: 'rc-audio',
    showBufferProgress: true,
    showProgressBarInfo: true
  }
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
    const { autoPlay, startVolume } = this.props
    if (autoPlay) {
      this.setState({playing: autoPlay})
    }
    if (startVolume) {
      this.setVolume(this.props.startVolume)
    }
  }

  handleBuffer = () => {
    const timeRanges = this.audio.getBuffered()
    const duration = this.audio.duration
    if (timeRanges.length !== 0) {
      const bufferedTime = timeRanges.end(timeRanges.length - 1)
      this.setState({bufferedTime})
      if (bufferedTime <= duration) {
        setTimeout(this.handleBuffer, 500)
      }
    }
  }

  setVolume = (volume) => {
    this.setState({volume})
    this.audio.setVolume(volume)
  }

  setCurrentTime = (currentTime) => {
    this.setState({currentTime})
    this.audio.setCurrentTime(currentTime)
  }

  onTimeUpdate = (e) => {
    if (!this.holding) {
      this.setState({currentTime: this.audio.getCurrentTime()})
    }
    // todo: 触发打点事件
    // const { progressTags, onProgressTags } = this.props
    // if (progressTags) {
    //   const hasTime = progressTags.filter((item) => {
    //     return item.time === parseInt(this.audio.getCurrentTime())
    //   })
    //
    //   if (hasTime.length !== 0 && this.lastTime !== parseInt(this.audio.getCurrentTime())) {
    //     this.lastTime = parseInt(this.audio.getCurrentTime())
    //     onProgressTags(parseInt(this.audio.getCurrentTime()))
    //   }
    // }

    const { onTimeUpdate } = this.props
    if (onTimeUpdate) {
      onTimeUpdate(e)
    }
  }

  onCanPlay = (e) => {
    this.setState({duration: this.audio.getDuration()})
    const { onCanPlay } = this.props
    if (onCanPlay) {
      onCanPlay(e)
    }
  }

  onLoadedMetadata = () => {
    const { startTime } = this.props
    if (startTime) {
      this.setState({currentTime: startTime})
      this.setCurrentTime(startTime)
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
  onLoadStart = () => {
    setTimeout(() => {
      this.handleBuffer()
    }, 500)
  }

  togglePlay = () => {
    this.state.playing ? this.audio.pause() : this.audio.play()
  }

  toggleMuted = () => {
    const { muted } = this.state

    this.setState({muted: !muted})
    this.audio.setMuted(!muted)
  }

  onProgressMouseDown = (e) => {
    e.preventDefault()
    this.holding = true // 判断鼠标是否按住
    const progressLeft = e.currentTarget.getBoundingClientRect().left
    const progressWidth = e.currentTarget.offsetWidth
    const newProgress = e.pageX - progressLeft
    const currentTime = (newProgress * this.audio.getDuration()) / progressWidth
    this.setState({currentTime: parseFloat(currentTime)})

    // 拖动进度条
    this.progressMouseMove = addEventListener(document, 'mousemove', (e) => {
      this.onProgressMouseMove(progressLeft, progressWidth)(e)
    })
    this.progressMouseUp = addEventListener(document, 'mouseup', this.onProgressMouseUp)
  }

  onProgressMouseMove = (progressLeft, progressWidth) => {
    return (event) => {
      if (this.holding) {
        const duration = this.audio.getDuration()
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
    this.holding = true
    const volumeLeft = e.currentTarget.getBoundingClientRect().left
    const volumeWidth = e.currentTarget.offsetWidth
    const newVolume = e.pageX - volumeLeft
    const volume = (newVolume) / volumeWidth
    this.setState({volume})
    this.audio.setVolume(volume)

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

  render () {
    const { prefixCls, showBufferProgress, showProgressBarInfo, progressTags, children, onTimeUpdate, onCanPlay, ...restProps } = this.props

    return (
      <div className={`${prefixCls}`}>
        <ProgressBar
          prefixCls={prefixCls}
          progressTags={progressTags}
          showProgressBarInfo={showProgressBarInfo}
          currentTime={this.state.currentTime}
          duration={this.state.duration}
          bufferedTime={this.state.bufferedTime}
          showBufferProgress={showBufferProgress}
          onProgressMouseDown={this.onProgressMouseDown} />
        <div className={`${prefixCls}-content`}>
          <div
            className={classNames({
              [`${prefixCls}-switch`]: true,
              [`${prefixCls}-switch-play`]: !this.state.playing,
              [`${prefixCls}-switch-pause`]: this.state.playing
            })}
            onClick={this.togglePlay} />
          <Time
            prefixCls={this.props.prefixCls}
            currentTime={this.state.currentTime}
            duration={this.state.duration} />
          <Volume
            prefixCls={this.props.prefixCls}
            volume={this.state.volume}
            startVolume={this.props.startVolume}
            muted={this.state.muted}
            onVolumeMouseDown={this.onVolumeMouseDown}
            toggleMuted={this.toggleMuted}
          />
        </div>
        <Audio
          {...restProps}
          ref={(node) => { this.audio = node }}
          onCanPlay={this.onCanPlay}
          onLoadStart={this.onLoadStart}
          onLoadedMetadata={this.onLoadedMetadata}
          onPause={this.onPause}
          onPlay={this.onPlay}
          onTimeUpdate={this.onTimeUpdate} />
      </div>
    )
  }
}

export default PrimaryAudio
