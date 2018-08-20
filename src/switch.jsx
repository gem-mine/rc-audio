import React from 'react'
import classNames from 'classnames'

export default props => {
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
