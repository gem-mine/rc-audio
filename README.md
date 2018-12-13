# react audio组件

---

音频播放器

## 何时使用

- 播放音频的时候

## 浏览器支持

IE 9+

## 安装

```bash
npm install rc-audio --save
```

## 运行

```bash
# 默认开启服务器，地址为 ：http://local:8000/

# 能在ie9+下浏览本站，修改代码后自动重新构建，且能在ie10+运行热更新，页面会自动刷新
npm run start

# 构建生产环境静态文件，用于发布文档
npm run site
```

## 代码演示

在线示例：https://mraiguo.github.io/rc-audio/site

### 基本

基本用法。

```jsx
import "rc-audio/lib/style/";
import Audio from 'rc-audio'

class App extends React.Component {
  render() {
    return (
      <div>
        <Audio
          autoPlay
          muted
          currentTime={10}
          showProgressBarInfo={false}
          onEnded={() => {console.log('播放结束')}}
          onSeeked={() => {console.log('跳转播放')}}
          src={() => '//cdncs.101.com/v0.1/static/fish/media/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 切换歌曲

切换多首歌曲。

```jsx
import "rc-audio/lib/style/";
import Audio from 'rc-audio'

const songs = [ 
  { 
    url: '//cdncs.101.com/v0.1/static/fish/media/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3',
    title: '明天你好'
  },
  { 
    url: '//cdncs.101.com/v0.1/static/fish/media/%E4%B8%80%E4%B8%AA%E4%BA%BA.mp3',
    title: '一个人'
  },
  { 
    url: '//cdncs.101.com/v0.1/static/fish/media/%E4%BC%A4%E5%BF%83%E5%A4%AA%E5%B9%B3%E6%B4%8B.mp3',
    title: '伤心太平洋'
  }
]

class App extends React.Component {
  state = {
    song: songs[0]
  }
  index = 0
  nextSong = () => {
    if (this.index >= songs.length - 1) {
      this.index = 0
    } else {
      this.index++
    }
    this.setState({
      song: songs[this.index]
    })
  }
  render() {
    return (
      <div>
        <Audio
          volume={0.2}
          autoPlay={true}
          showProgressBarInfo={false}
          src={this.state.song.url}
          onEnded={this.nextSong}
        />
        <br />  
        <button onClick={this.nextSong}>换一首</button>
        <br />
        <br />
        <span>正在播放：{this.state.song.title}</span>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```

### 进度条标记

给进度条某些时间点标记。

````jsx
import "rc-audio/lib/style/";
import Audio from 'rc-audio'

class App extends React.Component {
  render() {
    return (
      <div>
        <Audio
          volume={0.6}
          cuePoints={[ {time: 30, title: '标题1'}, {time: 60, title: '标题2'}, {time: 150, title: '标题3'} ]}
          onCuePoints={(cuePoint, audio) => {console.log(cuePoint, audio)}}
          showBufferProgress={false}
          src={'//cdncs.101.com/v0.1/static/fish/media/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'}
        >
          Your browser does not support the audio element.
        </Audio>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````

### 自定义图标

给进度条某些时间点标记。

````jsx
import "rc-audio/lib/style/";
import Audio from 'rc-audio'

class App extends React.Component {
  render() {
    return (
      <div>
        <Audio
          playIcon={<span>播放</span>}
          pauseIcon={<span>暂停</span>}
          src={'//cdncs.101.com/v0.1/static/fish/media/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'}
        >
          Your browser does not support the audio element.
        </Audio>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````

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
