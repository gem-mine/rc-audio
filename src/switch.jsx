import React from 'react'
import classNames from 'classnames'

const Switch = props => {
  return (
    <div
      className={classNames({
        [`${props.prefixCls}-switch`]: true,
        [`${props.prefixCls}-switch-play`]: !props.playing,
        [`${props.prefixCls}-switch-pause`]: props.playing
      })}
      onClick={props.togglePlay} />
  )
}

Switch.propTypes = {
  prefixCls: React.PropTypes.string,
  playing: React.PropTypes.bool,
  togglePlay: React.PropTypes.func
}

export default Switch
