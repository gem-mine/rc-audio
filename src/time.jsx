import React from 'react'
import PropTypes from 'prop-types'
import { secondsToTime } from './util'

const Time = props => {
  return (
    <span className={`${props.prefixCls}-time`}>{secondsToTime(props.currentTime)}/{secondsToTime(props.duration)}</span>
  )
}

Time.propTypes = {
  prefixCls: PropTypes.string,
  currentTime: PropTypes.number,
  duration: PropTypes.number
}

export default Time
