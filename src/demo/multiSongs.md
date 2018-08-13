---
order: 2
title: 切换歌曲
---

基本用法。

````jsx
import Audio from 'rc-audio'
import { Button } from 'fish'

const songs = [ 
  { 
    url: 'http://os71std62.bkt.clouddn.com/Alan%20Walker%20-%20Faded.mp3',
    title: 'faded'
  },
  { 
    url: 'http://os71std62.bkt.clouddn.com/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E5%AE%89%E5%92%8C%E6%A1%A5.mp3',
    title: '安和桥'
  },
  { 
    url: 'http://os71std62.bkt.clouddn.com/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3',
    title: '童话镇'
  },
  { 
    url: 'http://os71std62.bkt.clouddn.com/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3',
    title: '外面的世界'
  }
]

class App extends React.Component {
  state = {
    song: songs[0]
  }
  index = 0
  changeSong = () => {
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
          showProgressBarInfo={false}
          onEnded={() => {console.log('播放结束')}}
          src={this.state.song.url}
        />
        <br />  
        <Button onClick={this.changeSong}>换一首</Button>
        <br />
        <br />
        <span>正在播放：{this.state.song.title}</span>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
