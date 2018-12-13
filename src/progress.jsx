import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { decimalToPercent, secondsToTime } from './util'

export default class ProgressBar extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    onProgressMouseDown: PropTypes.func,
    cuePoints: PropTypes.array,
    bufferedTime: PropTypes.number,
    showBufferProgress: PropTypes.bool,
    showProgressBarInfo: PropTypes.bool,
    setCurrentTime: PropTypes.func
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
  onCuePointClick = (e, time) => {
    e.stopPropagation && e.stopPropagation()
    e.cancelBubble = true

    this.props.setCurrentTime(time)
  }
  onMouseOut = () => {
    this.setState({
      hoverTip: ''
    })
  }
  render () {
    const { prefixCls, cuePoints, currentTime, duration, bufferedTime, showBufferProgress } = this.props
    return (
      <div className={`${prefixCls}-progress`}>
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
            cuePoints.length > 0 ? cuePoints.map((item) => {
              if (item.time >= 0 && item.time <= duration) {
                return (
                  <span
                    onClick={(e) => { this.onCuePointClick(e, item.time) }}
                    key={item.time}
                    className={`${prefixCls}-progress-tag`}
                    style={{left: decimalToPercent(item.time / duration)}}>
                    <span className={`${prefixCls}-progress-tag-tip`}>{item.title}</span>
                  </span>
                )
              }
            }) : null
          }
        </div>
        {/* 缓冲进度条 */}
        {
          showBufferProgress ? <div className={`${prefixCls}-progress-buffer`} style={{ width: decimalToPercent(bufferedTime / duration) }} /> : null
        }
        <div
          className={`${prefixCls}-progress-playing-wrap`}
          onMouseDown={this.props.onProgressMouseDown}
          onMouseMove={this.onMouseOver}
          onMouseOut={this.onMouseOut}>
          <div className={`${prefixCls}-progress-playing`} style={{ width: decimalToPercent(currentTime / duration) }} />
          <div className={`${prefixCls}-progress-dot`} style={{ left: decimalToPercent(currentTime / duration) }} />
        </div>
      </div>
    )
  }
}
