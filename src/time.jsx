import React from 'react'
import { secondsToTime } from './util'

export default props => {
  return (
    <span className={`${props.prefixCls}-time`}>{secondsToTime(props.currentTime)}/{secondsToTime(props.duration)}</span>
  )
}
