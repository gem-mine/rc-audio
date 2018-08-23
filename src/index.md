---
category: Components
type: Data Display
title: rc-audio
subtitle: 音频组件
---

音频播放组件


## 何时使用

## API

| 参数      | 说明                                     | 类型       | 默认值 |
|-----------|------------------------------------------|------------|-------|
| src | 音频链接 | string \| function | 无 |
| currentTime | 初始音频播放位置，单位为秒 | number | 无 |
| volume | 初始音量，范围为0到1 | number | 无 |
| muted | 是否静音 | boolean | 无 |
| showProgressBarInfo | hover在进度条的时候是否显示进度信息 | boolean | true |
| cuePoints | 在进度条上标记，time为要标记的时间点， title为标记hover时显示的文本 | Array<{ time: number, title: string }> | [] |
| showBufferProgress | 显示缓冲进度 | boolean | true |
| onEnded | 结束播放时触发 | function | 无 |
| onSeeked | 跳转播放时触发 | function | 无 |
| onCuePoints | 播放到标记的时间触发，参数为cuePoint和audio对象；cuePoint是cuePoints被触发的时间点对应的对象，增加的index属性是对应cuePoints的数组索引 | function | 无 |

更多参数参考：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio
