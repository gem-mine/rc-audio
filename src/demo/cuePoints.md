---
order: 1
title: 进度条标记
---

给进度条某些时间点标记。

````jsx
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
          src={() => {
            return 'http://os71std62.bkt.clouddn.com/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'
          }}
        >
          Your browser does not support the audio element.
        </Audio>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
