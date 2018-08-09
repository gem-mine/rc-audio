---
order: 0
title: 基本
---

基本用法。

````jsx
import Audio from 'rc-audio'

class App extends React.Component {
  render() {
    return (
      <div>
        <Audio 
          preload 
          startVolume={0.1}
          autoPlay={true}
          showProgressBarInfo={false}
          onEnded={() => {console.log('播放结束')}}
          onSeeked={() => {console.log('跳转播放')}}
          showBufferProgress={true}
          onPlay={() => {console.log('播放')}}
          ref={(node) => {this.audioRef = node}}
          src='http://os71std62.bkt.clouddn.com/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'
        >
          Your browser does not support the audio element.
        </Audio>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
