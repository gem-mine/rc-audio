import React, { Component } from 'react'
import { decimalToPercent, secondsToTime } from './util'

export default class ProgressBar extends Component {
  static propTypes = {
    prefixCls: React.PropTypes.string,
    currentTime: React.PropTypes.number,
    duration: React.PropTypes.number,
    onProgressMouseDown: React.PropTypes.func,
    progressTags: React.PropTypes.array,
    bufferedTime: React.PropTypes.number,
    showBufferProgress: React.PropTypes.bool,
    showProgressBarInfo: React.PropTypes.bool
  }
  constructor (props) {
    super(props)
    this.state = {
      hoverTip: ''
    }
  }
  onMouseOver = (e) => {
    const { duration, prefixCls, showProgressBarInfo } = this.props
    const progress = e.currentTarget
    const progressRef = progress.getBoundingClientRect().left
    const hoverPos = e.pageX - progressRef
    this.hoverTime = (hoverPos * duration) / progress.offsetWidth
    if (e.target.className !== `${prefixCls}-progress-tag` && showProgressBarInfo) {
      this.setState({
        hoverTip: this.hoverTime
      })
    }
  }
  onMouseOut = () => {
    this.setState({
      hoverTip: ''
    })
  }
  render () {
    const { prefixCls, progressTags, currentTime, duration, bufferedTime, showBufferProgress } = this.props
    return (
      <div
        className={`${prefixCls}-progress`}
        onMouseDown={this.props.onProgressMouseDown}
        onMouseMove={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        {/* hover的时候显示进度信息 */}
        {
          <span
            className={`${prefixCls}-progress-hover-tip`}
            style={{display: this.state.hoverTip ? 'block' : 'none', left: decimalToPercent(this.hoverTime / duration)}}>
            {secondsToTime(this.state.hoverTip)}</span>
        }
        {/* 进度条打点标记 */}
        <div className={`${prefixCls}-progress-tag-wrap`}>
          {
            progressTags ? progressTags.map((item) => {
              if (item.time >= 0 && item.time <= duration) {
                return (
                  <span key={item.time} className={`${prefixCls}-progress-tag`} style={{left: decimalToPercent(item.time / duration)}}>
                    <span className={`${prefixCls}-progress-tag-tip`}>{item.title}</span>
                  </span>
                )
              }
            }) : null
          }
        </div>
        {
          showBufferProgress ? <div className={`${prefixCls}-progress-buffer`} style={{ width: decimalToPercent(bufferedTime / duration) }} /> : null
        }
        <div className={`${prefixCls}-progress-playing`} style={{ width: decimalToPercent(currentTime / duration) }} />
        <div className={`${prefixCls}-progress-dot`} style={{ left: decimalToPercent(currentTime / duration) }} />
      </div>
    )
  }
}
