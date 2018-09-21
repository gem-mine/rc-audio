import React from 'react'
import { secondsToTime } from './util'

const Time = props => {
  return (
    <span className={`${props.prefixCls}-time`}>{secondsToTime(props.currentTime)}/{secondsToTime(props.duration)}</span>
  )
}

Time.propTypes = {
  prefixCls: React.PropTypes.string,
  currentTime: React.PropTypes.number,
  duration: React.PropTypes.number
}

export default Time
