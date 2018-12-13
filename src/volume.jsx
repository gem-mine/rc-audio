import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {decimalToPercent} from './util'
import classNames from 'classnames'

export default class Volume extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    volume: PropTypes.number,
    muted: PropTypes.bool,
    onVolumeMouseDown: PropTypes.func,
    toggleMuted: PropTypes.func
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
