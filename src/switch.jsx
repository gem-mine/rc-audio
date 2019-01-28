import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Switch = props => {
  const icon = props.playing ? props.pauseIcon : props.playIcon
  return (
    <div className={`${props.prefixCls}-switch`} onClick={props.togglePlay} >
      {icon || (
        <div
          unselectable='on'
          className={classNames({
            [`${props.prefixCls}-switch-play`]: !props.playing,
            [`${props.prefixCls}-switch-pause`]: props.playing
          })}
        />
      )}
    </div>
  )
}

Switch.propTypes = {
  prefixCls: PropTypes.string,
  playing: PropTypes.bool,
  togglePlay: PropTypes.func,
  pauseIcon: PropTypes.node,
  playIcon: PropTypes.node
}

export default Switch
