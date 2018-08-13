import React, { Component } from 'react'

export default class Audio extends Component {
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
  getCurrentTime = () => {
    return this.audioRef.currentTime
  }
  getBuffered = () => {
    return this.audioRef.buffered
  }
  setVolume = (volume) => {
    this.audioRef.volume = volume
  }
  setCurrentTime = (currentTime) => {
    this.audioRef.currentTime = parseFloat(currentTime)
  }
  setMuted = (muted) => {
    this.audioRef.muted = muted
  }
  render () {
    const { src, children, ...restProps } = this.props

    let srcRes = ''
    if (src) {
      if (typeof src === 'function') {
        srcRes = src()
      } else {
        srcRes = src
      }
    }
    return (
      <audio
        {...restProps}
        ref={(ref) => { this.audioRef = ref }}
        src={srcRes}
      >
        {children}
      </audio>
    )
  }
}
