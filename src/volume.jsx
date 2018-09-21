import React, { Component } from 'react'
import {decimalToPercent} from './util'
import classNames from 'classnames'

export default class Volume extends Component {
  static propTypes = {
    prefixCls: React.PropTypes.string,
    volume: React.PropTypes.number,
    muted: React.PropTypes.bool,
    onVolumeMouseDown: React.PropTypes.func,
    toggleMuted: React.PropTypes.func
  }
  render () {
    const { prefixCls, volume, onVolumeMouseDown, toggleMuted, muted } = this.props
    return (
      <div className={`${prefixCls}-volume-wrap`}>
        <div
          className={classNames({
            [`${prefixCls}-volume-muted`]: true,
            [`${prefixCls}-volume-muted-on`]: !muted,
            [`${prefixCls}-volume-muted-off`]: muted
          })}
          onClick={toggleMuted} />
        {/* 音量条 */}
        <div
          className={`${prefixCls}-volume`}
          onMouseDown={onVolumeMouseDown}>
          <div className={`${prefixCls}-volume-bar`} style={{width: decimalToPercent(volume / 1)}} />
          <div className={`${prefixCls}-volume-dot`} style={{left: decimalToPercent(volume / 1)}} />
        </div>
      </div>
    )
  }
}
