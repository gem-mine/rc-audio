import React, { Component } from 'react'

export default class AudioEl extends Component {
  static propTypes = {
    src: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func])
  }
  play = () => {
    this.audioRef.play()
  }
  pause = () => {
    this.audioRef.pause()
  }
  getDuration = () => {
    return this.audioRef.duration
  }
  getBuffered = () => {
    return this.audioRef.buffered
  }
  getVolume = () => {
    return this.audioRef.volume
  }
  setVolume = (volume) => {
    this.audioRef.volume = Math.min(Math.max(volume, 0), 1)
  }
  getCurrentTime = () => {
    return this.audioRef.currentTime
  }
  setCurrentTime = (currentTime) => {
    this.audioRef.currentTime = parseFloat(currentTime)
  }
  setMuted = (muted) => {
    this.audioRef.muted = muted
  }
  render () {
    const { children, ...restProps } = this.props

    if (typeof restProps.src === 'function') {
      restProps.src = restProps.src()
    }

    return (
      <audio
        {...restProps}
        ref={(ref) => { this.audioRef = ref }}
      >
        {children}
      </audio>
    )
  }
}
