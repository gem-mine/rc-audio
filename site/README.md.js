webpackJsonp([0],{

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "p",
      "音频播放器"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "播放音频的时候"
        ]
      ]
    ],
    [
      "h2",
      "浏览器支持"
    ],
    [
      "p",
      "IE 9+"
    ],
    [
      "h2",
      "安装"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "<span class=\"token function\">npm</span> <span class=\"token function\">install</span> rc-audio --save"
      },
      [
        "code",
        "npm install rc-audio --save"
      ]
    ],
    [
      "h2",
      "运行"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\"># 默认开启服务器，地址为 ：http://local:8000/</span>\n\n<span class=\"token comment\" spellcheck=\"true\"># 能在ie9+下浏览本站，修改代码后自动重新构建，且能在ie10+运行热更新，页面会自动刷新</span>\n<span class=\"token function\">npm</span> run start\n\n<span class=\"token comment\" spellcheck=\"true\"># 构建生产环境静态文件，用于发布文档</span>\n<span class=\"token function\">npm</span> run site"
      },
      [
        "code",
        "# 默认开启服务器，地址为 ：http://local:8000/\n\n# 能在ie9+下浏览本站，修改代码后自动重新构建，且能在ie10+运行热更新，页面会自动刷新\nnpm run start\n\n# 构建生产环境静态文件，用于发布文档\nnpm run site"
      ]
    ],
    [
      "h2",
      "代码演示"
    ],
    [
      "p",
      "在线示例：",
      [
        "a",
        {
          "title": null,
          "href": "https://mraiguo.github.io/rc-audio/site"
        },
        "https://mraiguo.github.io/rc-audio/site"
      ]
    ],
    [
      "h3",
      "基本"
    ],
    [
      "p",
      "基本用法。"
    ],
    function mdToolsPluginReactPreviewer() {
  var React = __webpack_require__(17);

  var ReactDOM = __webpack_require__(202);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  __webpack_require__(680);

  var _rcAudio = __webpack_require__(682);

  var _rcAudio2 = _interopRequireDefault(_rcAudio);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(_rcAudio2.default, {
            autoPlay: true,
            muted: true,
            currentTime: 10,
            showProgressBarInfo: false,
            onEnded: function onEnded() {
              console.log('播放结束');
            },
            onSeeked: function onSeeked() {
              console.log('跳转播放');
            },
            src: function src() {
              return 'http://os71std62.bkt.clouddn.com/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3';
            }
          })
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
},
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">\"rc-audio/lib/style/\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Audio <span class=\"token keyword\">from</span> <span class=\"token string\">'rc-audio'</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Audio</span>\n          <span class=\"token attr-name\">autoPlay</span>\n          <span class=\"token attr-name\">muted</span>\n          <span class=\"token attr-name\">currentTime</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">10</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">showProgressBarInfo</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onEnded</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'播放结束'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onSeeked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'跳转播放'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'http://os71std62.bkt.clouddn.com/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import \"rc-audio/lib/style/\";\nimport Audio from 'rc-audio'\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div>\n        <Audio\n          autoPlay\n          muted\n          currentTime={10}\n          showProgressBarInfo={false}\n          onEnded={() => {console.log('播放结束')}}\n          onSeeked={() => {console.log('跳转播放')}}\n          src={() => 'http://os71std62.bkt.clouddn.com/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'}\n        />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);"
      ]
    ],
    [
      "h3",
      "切换歌曲"
    ],
    [
      "p",
      "切换多首歌曲。"
    ],
    function mdToolsPluginReactPreviewer() {
  var React = __webpack_require__(17);

  var ReactDOM = __webpack_require__(202);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  __webpack_require__(680);

  var _rcAudio = __webpack_require__(682);

  var _rcAudio2 = _interopRequireDefault(_rcAudio);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var songs = [{
    url: 'http://os71std62.bkt.clouddn.com/Alan%20Walker%20-%20Faded.mp3',
    title: 'faded'
  }, {
    url: 'http://os71std62.bkt.clouddn.com/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E5%AE%89%E5%92%8C%E6%A1%A5.mp3',
    title: '安和桥'
  }, {
    url: 'http://os71std62.bkt.clouddn.com/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3',
    title: '童话镇'
  }, {
    url: 'http://os71std62.bkt.clouddn.com/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3',
    title: '外面的世界'
  }];

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        song: songs[0]
      }, _this.index = 0, _this.nextSong = function () {
        if (_this.index >= songs.length - 1) {
          _this.index = 0;
        } else {
          _this.index++;
        }

        _this.setState({
          song: songs[_this.index]
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(_rcAudio2.default, {
            volume: 0.2,
            autoPlay: true,
            showProgressBarInfo: false,
            src: this.state.song.url,
            onEnded: this.nextSong
          }),
          React.createElement("br", null),
          React.createElement(
            "button",
            {
              onClick: this.nextSong
            },
            "换一首"
          ),
          React.createElement("br", null),
          React.createElement("br", null),
          React.createElement(
            "span",
            null,
            "正在播放：",
            this.state.song.title
          )
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
},
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">\"rc-audio/lib/style/\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Audio <span class=\"token keyword\">from</span> <span class=\"token string\">'rc-audio'</span>\n\n<span class=\"token keyword\">const</span> songs <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span> \n  <span class=\"token punctuation\">{</span> \n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://os71std62.bkt.clouddn.com/Alan%20Walker%20-%20Faded.mp3'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'faded'</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> \n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://os71std62.bkt.clouddn.com/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E5%AE%89%E5%92%8C%E6%A1%A5.mp3'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'安和桥'</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> \n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://os71std62.bkt.clouddn.com/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'童话镇'</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> \n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://os71std62.bkt.clouddn.com/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'外面的世界'</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    song<span class=\"token punctuation\">:</span> songs<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n  index <span class=\"token operator\">=</span> <span class=\"token number\">0</span>\n  nextSong <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>index <span class=\"token operator\">>=</span> songs<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>index <span class=\"token operator\">=</span> <span class=\"token number\">0</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>index<span class=\"token operator\">++</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      song<span class=\"token punctuation\">:</span> songs<span class=\"token punctuation\">[</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>index<span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Audio</span>\n          <span class=\"token attr-name\">volume</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">0.2</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">autoPlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">showProgressBarInfo</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>song<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onEnded</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>nextSong<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>  \n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>nextSong<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>换一首<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>正在播放：<span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>song<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import \"rc-audio/lib/style/\";\nimport Audio from 'rc-audio'\n\nconst songs = [ \n  { \n    url: 'http://os71std62.bkt.clouddn.com/Alan%20Walker%20-%20Faded.mp3',\n    title: 'faded'\n  },\n  { \n    url: 'http://os71std62.bkt.clouddn.com/%E5%AE%8B%E5%86%AC%E9%87%8E%20-%20%E5%AE%89%E5%92%8C%E6%A1%A5.mp3',\n    title: '安和桥'\n  },\n  { \n    url: 'http://os71std62.bkt.clouddn.com/%E9%99%88%E4%B8%80%E5%8F%91%E5%84%BF%20-%20%E7%AB%A5%E8%AF%9D%E9%95%87.mp3',\n    title: '童话镇'\n  },\n  { \n    url: 'http://os71std62.bkt.clouddn.com/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E5%A4%96%E9%9D%A2%E7%9A%84%E4%B8%96%E7%95%8C.mp3',\n    title: '外面的世界'\n  }\n]\n\nclass App extends React.Component {\n  state = {\n    song: songs[0]\n  }\n  index = 0\n  nextSong = () => {\n    if (this.index >= songs.length - 1) {\n      this.index = 0\n    } else {\n      this.index++\n    }\n    this.setState({\n      song: songs[this.index]\n    })\n  }\n  render() {\n    return (\n      <div>\n        <Audio\n          volume={0.2}\n          autoPlay={true}\n          showProgressBarInfo={false}\n          src={this.state.song.url}\n          onEnded={this.nextSong}\n        />\n        <br />  \n        <button onClick={this.nextSong}>换一首</button>\n        <br />\n        <br />\n        <span>正在播放：{this.state.song.title}</span>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);"
      ]
    ],
    [
      "h3",
      "进度条标记"
    ],
    [
      "p",
      "给进度条某些时间点标记。"
    ],
    function mdToolsPluginReactPreviewer() {
  var React = __webpack_require__(17);

  var ReactDOM = __webpack_require__(202);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  __webpack_require__(680);

  var _rcAudio = __webpack_require__(682);

  var _rcAudio2 = _interopRequireDefault(_rcAudio);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            _rcAudio2.default,
            {
              volume: 0.6,
              cuePoints: [{
                time: 30,
                title: '标题1'
              }, {
                time: 60,
                title: '标题2'
              }, {
                time: 150,
                title: '标题3'
              }],
              onCuePoints: function onCuePoints(cuePoint, audio) {
                console.log(cuePoint, audio);
              },
              showBufferProgress: false,
              src: 'http://os71std62.bkt.clouddn.com/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'
            },
            "Your browser does not support the audio element."
          )
        );
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
},
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">\"rc-audio/lib/style/\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Audio <span class=\"token keyword\">from</span> <span class=\"token string\">'rc-audio'</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Audio</span>\n          <span class=\"token attr-name\">volume</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">0.6</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">cuePoints</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span> <span class=\"token punctuation\">{</span>time<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'标题1'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>time<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'标题2'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>time<span class=\"token punctuation\">:</span> <span class=\"token number\">150</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'标题3'</span><span class=\"token punctuation\">}</span> <span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onCuePoints</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>cuePoint<span class=\"token punctuation\">,</span> audio<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>cuePoint<span class=\"token punctuation\">,</span> audio<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">showBufferProgress</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token string\">'http://os71std62.bkt.clouddn.com/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          Your browser does not support the audio element<span class=\"token punctuation\">.</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Audio</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import \"rc-audio/lib/style/\";\nimport Audio from 'rc-audio'\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div>\n        <Audio\n          volume={0.6}\n          cuePoints={[ {time: 30, title: '标题1'}, {time: 60, title: '标题2'}, {time: 150, title: '标题3'} ]}\n          onCuePoints={(cuePoint, audio) => {console.log(cuePoint, audio)}}\n          showBufferProgress={false}\n          src={'http://os71std62.bkt.clouddn.com/%E7%89%9B%E5%A5%B6%E5%92%96%E5%95%A1%20-%20%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD.mp3'}\n        >\n          Your browser does not support the audio element.\n        </Audio>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);"
      ]
    ],
    [
      "h2",
      "API"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "src"
          ],
          [
            "td",
            "音频链接"
          ],
          [
            "td",
            "string ",
            "|",
            " function"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "currentTime"
          ],
          [
            "td",
            "初始音频播放位置，单位为秒"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "volume"
          ],
          [
            "td",
            "初始音量，范围为0到1"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "muted"
          ],
          [
            "td",
            "是否静音"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showProgressBarInfo"
          ],
          [
            "td",
            "hover在进度条的时候是否显示进度信息"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "cuePoints"
          ],
          [
            "td",
            "在进度条上标记，time为要标记的时间点， title为标记hover时显示的文本"
          ],
          [
            "td",
            "Array<{ time: number, title: string }>"
          ],
          [
            "td",
            "[]"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showBufferProgress"
          ],
          [
            "td",
            "显示缓冲进度"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onEnded"
          ],
          [
            "td",
            "结束播放时触发"
          ],
          [
            "td",
            "function"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onSeeked"
          ],
          [
            "td",
            "跳转播放时触发"
          ],
          [
            "td",
            "function"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onCuePoints"
          ],
          [
            "td",
            "播放到标记的时间触发，参数为cuePoint和audio对象；cuePoint是cuePoints被触发的时间点对应的对象，增加的index属性是对应cuePoints的数组索引"
          ],
          [
            "td",
            "function"
          ],
          [
            "td",
            "无"
          ]
        ]
      ]
    ],
    [
      "p",
      "更多参数参考：",
      [
        "a",
        {
          "title": null,
          "href": "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio"
        },
        "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio"
      ]
    ]
  ],
  "meta": {
    "filename": "README.md"
  },
  "description": [
    "section",
    [
      "h1",
      "react audio组件"
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "md-tools-toc-h2",
          "href": "#何时使用",
          "title": "何时使用"
        },
        "何时使用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "md-tools-toc-h2",
          "href": "#浏览器支持",
          "title": "浏览器支持"
        },
        "浏览器支持"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "md-tools-toc-h2",
          "href": "#安装",
          "title": "安装"
        },
        "安装"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "md-tools-toc-h2",
          "href": "#运行",
          "title": "运行"
        },
        "运行"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "md-tools-toc-h2",
          "href": "#代码演示",
          "title": "代码演示"
        },
        "代码演示"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "md-tools-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "style": [

  ]
};

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(686);

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(203)(false);
// imports


// module
exports.push([module.i, ".rc-audio {\n  height: 40px;\n  width: 100%;\n  position: relative;\n  background: #1E1E1E;\n  color: white;\n  min-width: 300px;\n}\n.rc-audio-operate {\n  padding-top: 8px;\n  height: 100%;\n  line-height: 32px;\n}\n.rc-audio-switch {\n  cursor: pointer;\n  display: inline-block;\n  height: 32px;\n  line-height: 32px;\n  width: 60px;\n  background-repeat: no-repeat;\n  background-size: 15px 15px;\n  background-position: center;\n}\n.rc-audio-switch-play {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMzNzk0NDAwNjg2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkxNy44MTEyIDQ1MC40MDY0TDE2MC41ODg4IDguNTUwNEMxNTEuMzcyOCAzLjE3NDQgMTQxLjgyNCAwIDEzMC45NDQgMCAxMDEuMjczNiAwIDc3LjA4MTYgMjQuMDEyOCA3Ny4wODE2IDUzLjMyNDhINzYuOHY5MTcuMzUwNGgwLjI1NkM3Ny4wNTYgOTk5Ljk4NzIgMTAxLjI5OTIgMTAyNCAxMzAuOTQ0IDEwMjRjMTEuMTYxNiAwIDIwLjQwMzItMy43Mzc2IDMwLjQ2NC05LjA2MjRsNzU2LjQyODgtNDQxLjM0NEE3OS4zMzQ0IDc5LjMzNDQgMCAwIDAgOTQ3LjIgNTEyYzAtMjQuODA2NC0xMS40MTc2LTQ2LjY2ODgtMjkuMzg4OC02MS41OTM2eiIgcC1pZD0iMTA3NiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==\");\n}\n.rc-audio-switch-pause {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMzNzk2MDU1MTcwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQyOS4xNDk1NTA2MSA5NzcuNTE1OTYyNDdMNDI5LjE0OTU1MDYxIDQ2LjIyNTEyOTg3YzAtMTcuMzQ2ODEyODMtMTMuOTgxMDEzMzMtMzEuMzI3ODI2MTctMzEuNTg2NzMzODEtMzEuMzI3ODI2MTdsLTE4NS4zNzc4ODA1IDBjLTE3LjYwNTcyMDUgMC0zMS41ODY3MzM4MyAxMy45ODEwMTMzMy0zMS41ODY3MzM4MyAzMS4zMjc4MjYxN2wwIDkzMS4yOTA4MzI2YzAgMTcuMzQ2ODEyODMgMTMuOTgxMDEzMzMgMzEuNTg2NzMzODMgMzEuNTg2NzMzODMgMzEuNTg2NzMzODNsMTg1LjM3Nzg4MDUgMEM0MTUuMTY4NTM3MjggMTAwOS4xMDI2OTYzIDQyOS4xNDk1NTA2MSA5OTUuMTIxNjgyOTcgNDI5LjE0OTU1MDYxIDk3Ny41MTU5NjI0N3oiIHAtaWQ9IjEyODIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNODExLjgxNTA2MzcgMTQuODk3MzAzN2wtMTg1LjM3Nzg4MDUgMGMtMTcuMzQ2ODEyODMgMC0zMS41ODY3MzM4MyAxMy45ODEwMTMzMy0zMS41ODY3MzM4MSAzMS4zMjc4MjYxN2wwIDkzMS4yOTA4MzI2YzAgMTcuMzQ2ODEyODMgMTMuOTgxMDEzMzMgMzEuNTg2NzMzODMgMzEuNTg2NzMzODEgMzEuNTg2NzMzODNsMTg1LjM3Nzg4MDUgMGMxNy4zNDY4MTI4MyAwIDMxLjU4NjczMzgzLTEzLjk4MTAxMzMzIDMxLjU4NjczMzgzLTMxLjU4NjczMzgzTDg0My40MDE3OTc1MyA0Ni4yMjUxMjk4N0M4NDMuNDAxNzk3NTMgMjguODc4MzE3MDMgODI5LjQyMDc4NDE5IDE0Ljg5NzMwMzcgODExLjgxNTA2MzcgMTQuODk3MzAzN3oiIHAtaWQ9IjEyODMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=\");\n}\n.rc-audio-time {\n  margin: 0 10px;\n  line-height: 32px;\n  display: inline-block;\n  vertical-align: top;\n}\n.rc-audio-progress {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 8px;\n  width: 100%;\n  background: #4d4d4d;\n}\n.rc-audio-progress-buffer {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  height: 8px;\n  background: #797979;\n}\n.rc-audio-progress-playing-wrap {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: 8px;\n  border-left: 6px solid #ee750a;\n  border-right: 6px solid transparent;\n}\n.rc-audio-progress-playing {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  height: 8px;\n  background: #EE750A;\n}\n.rc-audio-progress-dot {\n  position: absolute;\n  z-index: 3;\n  height: 12px;\n  width: 12px;\n  border-radius: 50% 50%;\n  background: #CACBCD;\n  top: -2px;\n  margin-left: -6px;\n}\n.rc-audio-progress .rc-audio-progress-tag-wrap {\n  margin-right: 4px;\n  position: relative;\n}\n.rc-audio-progress .rc-audio-progress-tag {\n  position: absolute;\n  height: 8px;\n  width: 4px;\n  background: #C9C9C9;\n  top: 0;\n  z-index: 4;\n}\n.rc-audio-progress .rc-audio-progress-tag-tip {\n  display: none;\n  position: absolute;\n  top: -28px;\n  left: -16px;\n  padding: 0 5px;\n  white-space: nowrap;\n  background: #252526;\n}\n.rc-audio-progress .rc-audio-progress-tag:hover .rc-audio-progress-tag-tip {\n  display: block;\n}\n.rc-audio-progress-hover-tip {\n  position: absolute;\n  top: -28px;\n  margin-left: -16px;\n  background: #252526;\n  padding: 0 5px;\n}\n.rc-audio-progress-hover-tip:before {\n  position: absolute;\n  bottom: -4px;\n  left: 13px;\n  content: '';\n  width: 0;\n  height: 0;\n  border-width: 4px 4px 0;\n  border-style: solid;\n  border-color: #1e1e1e transparent transparent;\n}\n.rc-audio-volume-wrap {\n  display: inline-block;\n  height: 32px;\n  line-height: 32px;\n  vertical-align: top;\n}\n.rc-audio-volume {\n  position: absolute;\n  background: #797979;\n  width: 100px;\n  height: 4px;\n  display: inline-block;\n  margin-left: 10px;\n  top: 22px;\n}\n.rc-audio-volume-muted {\n  cursor: pointer;\n  display: inline-block;\n  width: 30px;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: 15px 15px;\n  background-position: center;\n}\n.rc-audio-volume-muted-on {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMzNzk2Mjk3OTMyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYyMy4zMjMzODc1OCAyNy44NDk1OTAycTE2OC4yOTY4NzkwOCAzNi4yNjA4ODA0NCAyNzcuMDI0Mjg2MzUgMTcyLjE2MzIzMzgxdDEwOC43NTUwMjM2NyAzMTEuOTg3MTc1OTktMTA4Ljc1NTAyMzY3IDMxMS45ODcxNzU5OS0yNzcuMDI0Mjg2MzUgMTcyLjE2MzIzMzgxbDAtMTEzLjkxOTM2NzlxMTIxLjY3OTY5Mzc2LTM2LjI2MDg4MDQ0IDE5OC4wNjc4MDgwOS0xMzcuMjI3OTYwNTZ0NzYuMzg4MTE0MzUtMjMzLjAzMDY5NzcyLTc2LjM4ODExNDM1LTIzMy4wMzA2OTc3My0xOTguMDY3ODA4MDktMTM3LjIyNzk2MDU3bDAtMTEzLjkxOTM2Nzl6TTc2MC41NTEzNDgxNSA1MTJxMCAxNTUuMzQ0NTkyNTktMTM3LjIyNzk2MDU3IDIyMi42NzQzOTE1NWwwLTQ0NS4zMjExNjU0M3ExMzcuMjI3OTYwNTUgNjcuMzI5Nzk4OTcgMTM3LjIyNzk2MDU3IDIyMi42NzQzOTE1NXpNMTQuODk3MzAzNyAzNDYuMjk5MTAxMjRsMjIwLjA3ODQwOTk1IDAgMjc3LjAyNDI4NjM1LTI3Ny4wMjQyODYzNiAwIDg4NS40Nzc5ODY2Mi0yNzcuMDI0Mjg2MzUtMjc3LjAyNDI4NjM1LTIyMC4wNzg0MDk5NSAwIDAtMzMxLjQwMTc5NzUzeiIgcC1pZD0iMTcyNCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==\");\n}\n.rc-audio-volume-muted-off {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMzNzk2MjkxNDk4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1NzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA3MC4xMzA5MzcwNkwzOTYuNTYxNzA3NjMgMTg1LjU2OTIyOTQzIDUxMiAzMDEuMDA3NTIxOE04NS4wNDQwMTc5NSAxNC44OTczMDM3TDE0Ljg5NzMwMzcgODUuMDQ0MDE3OTUgMjc2LjE1MjM4NyAzNDYuMjk5MTAxMjQgMTQuODk3MzAzNyAzNDYuMjk5MTAxMjQgMTQuODk3MzAzNyA2NzcuNzAwODk4NzYgMjM1LjgzMTgzNTgyIDY3Ny43MDA4OTg3NiA1MTIgOTUzLjg2OTA2Mjk0IDUxMiA1ODIuMTQ2NzE0MjUgNzQ2Ljc0MjkzOTQ5IDgxNy40NDE5OTA0OUM3MDkuNzM2NDA2MjkgODQ1LjYxMTE0MzI5IDY2OC4zMTExODE2IDg2OC44MDkyNjkxIDYyMi40NjcyNjU0MSA4ODIuMDY1MzQxTDYyMi40NjcyNjU0MSA5OTYuMzk4OTYxMTVDNjk4LjY4OTY3ODg1IDk3OC43MjQxOTc3NSA3NjcuNzMxNzIwODYgOTQzLjkyNzAwOTAxIDgyNS43MjcwMzU0MiA4OTYuNDI2MDg1MTRMOTM4Ljk1NTk4MjA1IDEwMDkuMTAyNjk2MyAxMDA5LjEwMjY5NjMgOTM4Ljk1NTk4MjA1IDUxMiA0NDEuODUzMjg1NzVNODk4LjYzNTQzMDg4IDUxMkM4OTguNjM1NDMwODggNTYzLjkxOTYxNTM3IDg4Ny41ODg3MDM0MyA2MTIuNTI1MjExNDkgODY4LjgwOTI2OTEgNjU3LjgxNjc5MDkxTDk1Mi4yMTIwNTM5NiA3NDEuMjE5NTc3MDZDOTg4LjExMzkxNjIxIDY3Mi43Mjk4NzE4MSAxMDA5LjEwMjY5NjMgNTk0Ljg1MDQ0OTM5IDEwMDkuMTAyNjk2MyA1MTIgMTAwOS4xMDI2OTYzIDI3NS42MDAwNTE1MyA4NDMuNDAxNzk3NTMgNzcuODYzNjQ1MjQgNjIyLjQ2NzI2NTQxIDI3LjYwMTAzODg1TDYyMi40NjcyNjU0MSAxNDEuMzgyMzIzNTNDNzgyLjA5MjQ2NDk4IDE4OC44ODMyNDc0MSA4OTguNjM1NDMwODggMzM2LjkwOTM4NDA2IDg5OC42MzU0MzA4OCA1MTJNNzYwLjU1MTM0ODE1IDUxMkM3NjAuNTUxMzQ4MTUgNDE0LjIzNjQ2OTczIDcwNS4zMTc3MTQ3OSAzMzAuMjgxMzQ4MTIgNjIyLjQ2NzI2NTQxIDI4OS40MDg0NTg5TDYyMi40NjcyNjU0MSA0MTEuNDc0Nzg4NTEgNzU3Ljc4OTY2NjkzIDU0Ni43OTcxODg3NUM3NjAuNTUxMzQ4MTUgNTM1Ljc1MDQ2MjU5IDc2MC41NTEzNDgxNSA1MjMuNTk5MDYyOTEgNzYwLjU1MTM0ODE1IDUxMloiIHAtaWQ9IjE1NzciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=\");\n}\n.rc-audio-volume-bar {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  background: #EE750A;\n  height: 4px;\n}\n.rc-audio-volume-dot {\n  cursor: pointer;\n  position: absolute;\n  top: -2px;\n  background: #CACBCD;\n  height: 8px;\n  width: 8px;\n  border-radius: 50% 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(684);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(297);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(51);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(52);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _time = __webpack_require__(691);

var _time2 = _interopRequireDefault(_time);

var _progress = __webpack_require__(692);

var _progress2 = _interopRequireDefault(_progress);

var _volume = __webpack_require__(693);

var _volume2 = _interopRequireDefault(_volume);

var _audioEl = __webpack_require__(694);

var _audioEl2 = _interopRequireDefault(_audioEl);

var _switch = __webpack_require__(695);

var _switch2 = _interopRequireDefault(_switch);

var _addEventListener = __webpack_require__(696);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RcAudio = function (_Component) {
  (0, _inherits3['default'])(RcAudio, _Component);

  function RcAudio(props) {
    (0, _classCallCheck3['default'])(this, RcAudio);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (RcAudio.__proto__ || Object.getPrototypeOf(RcAudio)).call(this, props));

    _this.segments = {};
    _this.lastFiredSegment = -0.125;

    _this.setBuffered = function () {
      var timeRanges = _this.audio.getBuffered();
      if (timeRanges.length !== 0) {
        var bufferedTime = timeRanges.end(timeRanges.length - 1);
        _this.setState({ bufferedTime: bufferedTime });
      }
    };

    _this.setVolume = function (volume) {
      _this.setState({ volume: volume });
      _this.audio.setVolume(volume);
    };

    _this.setCurrentTime = function (currentTime) {
      _this.setState({ currentTime: currentTime });
      _this.audio.setCurrentTime(currentTime);
    };

    _this.setCuePoint = function (cues) {
      _this.cuepoints = [];
      _this.segments = {};
      cues.forEach(_this.addCuePoint);
    };

    _this.addCuePoint = function (cue) {
      if (!_this.cuepoints) {
        _this.cuepoints = [];
      }
      if (typeof cue === 'number') {
        cue = {
          time: cue
        };
      }
      cue.index = 0;
      var segment = _this.segmentForCue(cue);
      if (!_this.segments[segment]) {
        _this.segments[segment] = [];
      }
      _this.segments[segment].push(cue);
      if (_this.cuepoints.length) {
        cue.index = Math.max.apply(null, _this.cuepoints.map(function (cue) {
          return cue.index;
        })) + 1;
      }
      _this.cuepoints.push(cue);
    };

    _this.segmentForCue = function (cue) {
      var time = cue && !isNaN(cue.time) ? cue.time : cue;
      if (time < 0) time = _this.audio.getDuration() + time;
      return Math.round(time / 0.125) * 0.125;
    };

    _this.onProgress = function (e) {
      _this.setBuffered();

      var onProgress = _this.props.onProgress;

      if (onProgress) {
        onProgress(e);
      }
    };

    _this.onTimeUpdate = function (e) {
      var currentTime = _this.audio.getCurrentTime();
      if (!_this.holding) {
        _this.setState({ currentTime: currentTime });
      }

      // 触发提示点事件
      var segment = _this.segmentForCue(currentTime);
      while (_this.lastFiredSegment < segment) {
        _this.lastFiredSegment += 0.125;
        if (!_this.segments[_this.lastFiredSegment]) {
          continue;
        }
        _this.segments[_this.lastFiredSegment].forEach(function (item) {
          _this.props.onCuePoints(item, _this.audio);
        });
      }

      var onTimeUpdate = _this.props.onTimeUpdate;

      if (onTimeUpdate) {
        onTimeUpdate(e);
      }
    };

    _this.onSeeked = function (e) {
      var currentTime = _this.audio.getCurrentTime();
      _this.lastFiredSegment = _this.segmentForCue(currentTime || 0) - 0.125;
      // 跳转到第0秒时，处理提示点事件
      if (!currentTime && _this.segments[0]) {
        _this.segments[0].forEach(function (item) {
          _this.props.onCuePoints(item, _this.audio);
        });
      }

      var onSeeked = _this.props.onSeeked;

      if (onSeeked) {
        onSeeked(e);
      }
    };

    _this.onPlay = function (e) {
      _this.setState({ playing: true });

      var onPlay = _this.props.onPlay;

      if (onPlay) {
        onPlay(e);
      }
    };

    _this.onPause = function (e) {
      _this.setState({ playing: false });

      var onPause = _this.props.onPause;

      if (onPause) {
        onPause(e);
      }
    };

    _this.onDurationChange = function (e) {
      _this.setBuffered();
      _this.setCuePoint(_this.props.cuePoints);
      _this.setState({ duration: _this.audio.getDuration() });
      _this.setState({ playing: false });

      var currentTime = _this.props.currentTime;

      if (currentTime) {
        _this.setState({ currentTime: currentTime });
        _this.setCurrentTime(currentTime);
      }

      var onDurationChange = _this.props.onDurationChange;

      if (onDurationChange) {
        onDurationChange(e);
      }
    };

    _this.togglePlay = function () {
      _this.state.playing ? _this.audio.pause() : _this.audio.play();
    };

    _this.toggleMuted = function () {
      var muted = _this.state.muted;


      _this.setMuted(!muted);
    };

    _this.setMuted = function (muted) {
      _this.setState({ muted: muted });
      _this.audio.setMuted(muted);
    };

    _this.onProgressMouseDown = function (e) {
      e.preventDefault();
      _this.holding = true; // 判断鼠标是否按住
      var progressLeft = e.currentTarget.getBoundingClientRect().left + e.currentTarget.clientLeft;
      var progressWidth = e.currentTarget.clientWidth;
      var newProgress = e.pageX - progressLeft;
      var currentTime = newProgress * _this.audio.getDuration() / progressWidth;
      _this.setState({ currentTime: parseFloat(currentTime) });

      // 拖动进度条
      _this.progressMouseMove = (0, _addEventListener2['default'])(document, 'mousemove', function (e) {
        _this.onProgressMouseMove(progressLeft, progressWidth)(e);
      });
      _this.progressMouseUp = (0, _addEventListener2['default'])(document, 'mouseup', _this.onProgressMouseUp);
    };

    _this.onProgressMouseMove = function (progressLeft, progressWidth) {
      return function (event) {
        if (_this.holding) {
          var duration = _this.audio.getDuration();
          var current = duration * (event.pageX - progressLeft) / progressWidth;
          if (current >= 0 && current < duration) {
            _this.setState({ currentTime: current });
          }
        }
      };
    };

    _this.onProgressMouseUp = function () {
      _this.holding = false;
      _this.audio.setCurrentTime(_this.state.currentTime);

      if (_this.progressMouseMove) {
        _this.progressMouseMove.remove();
      }
      if (_this.progressMouseUp) {
        _this.progressMouseUp.remove();
      }
    };

    _this.onVolumeMouseDown = function (e) {
      e.preventDefault();
      _this.holding = true;
      var volumeLeft = e.currentTarget.getBoundingClientRect().left;
      var volumeWidth = e.currentTarget.offsetWidth;
      var newVolume = e.pageX - volumeLeft;
      var volume = newVolume / volumeWidth;
      _this.setState({ volume: volume });
      _this.audio.setVolume(volume);

      // 拖动音量条
      _this.volumeMouseMove = (0, _addEventListener2['default'])(document, 'mousemove', function (e) {
        _this.onVolumeMouseMove(volumeLeft, volumeWidth)(e);
      });
      _this.volumeMouseUp = (0, _addEventListener2['default'])(document, 'mouseup', _this.onVolumeMouseUp);
    };

    _this.onVolumeMouseMove = function (volumeLeft, volumeWidth) {
      return function (event) {
        if (_this.holding) {
          var current = (event.pageX - volumeLeft) / volumeWidth;
          if (current >= 0 && current < 1) {
            _this.setState({ volume: current });
          }
        }
      };
    };

    _this.onVolumeMouseUp = function () {
      _this.holding = false;
      _this.audio.setVolume(_this.state.volume);
      if (_this.volumeMouseMove) {
        _this.volumeMouseMove.remove();
      }
      if (_this.volumeMouseUp) {
        _this.volumeMouseUp.remove();
      }
    };

    _this.state = {
      playing: false,
      muted: false,
      currentTime: 0,
      duration: 0,
      volume: 0,
      bufferedTime: 0
    };
    return _this;
  }

  (0, _createClass3['default'])(RcAudio, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          volume = _props.volume,
          muted = _props.muted;

      if (volume) {
        this.setVolume(this.props.volume);
      } else {
        this.setState({ volume: 1 });
      }
      if (muted) {
        this.setMuted(muted);
      }
    }

    // 缓冲进度条


    // 添加处理标识点

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          showBufferProgress = _props2.showBufferProgress,
          showProgressBarInfo = _props2.showProgressBarInfo,
          cuePoints = _props2.cuePoints,
          restProps = (0, _objectWithoutProperties3['default'])(_props2, ['prefixCls', 'showBufferProgress', 'showProgressBarInfo', 'cuePoints']);


      return _react2['default'].createElement(
        'div',
        { className: '' + prefixCls },
        _react2['default'].createElement(_progress2['default'], {
          prefixCls: prefixCls,
          cuePoints: cuePoints,
          showProgressBarInfo: showProgressBarInfo,
          currentTime: this.state.currentTime,
          duration: this.state.duration,
          bufferedTime: this.state.bufferedTime,
          showBufferProgress: showBufferProgress,
          setCurrentTime: this.setCurrentTime,
          onProgressMouseDown: this.onProgressMouseDown }),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-operate' },
          _react2['default'].createElement(_switch2['default'], {
            prefixCls: prefixCls,
            playing: this.state.playing,
            togglePlay: this.togglePlay
          }),
          _react2['default'].createElement(_time2['default'], {
            prefixCls: this.props.prefixCls,
            currentTime: this.state.currentTime,
            duration: this.state.duration }),
          _react2['default'].createElement(_volume2['default'], {
            prefixCls: this.props.prefixCls,
            volume: this.state.volume,
            muted: this.state.muted,
            onVolumeMouseDown: this.onVolumeMouseDown,
            toggleMuted: this.toggleMuted
          })
        ),
        _react2['default'].createElement(_audioEl2['default'], (0, _extends3['default'])({}, restProps, {
          ref: function ref(node) {
            _this2.audio = node;
          },
          onDurationChange: this.onDurationChange,
          onSeeked: this.onSeeked,
          onPause: this.onPause,
          onPlay: this.onPlay,
          onProgress: this.onProgress,
          onTimeUpdate: this.onTimeUpdate }))
      );
    }
  }]);
  return RcAudio;
}(_react.Component);

RcAudio.propTypes = {
  prefixCls: _react2['default'].PropTypes.string,
  src: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.func]),
  children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.node]),
  volume: _react2['default'].PropTypes.number,
  muted: _react2['default'].PropTypes.bool,
  currentTime: _react2['default'].PropTypes.number,
  autoPlay: _react2['default'].PropTypes.bool,
  showBufferProgress: _react2['default'].PropTypes.bool,
  showProgressBarInfo: _react2['default'].PropTypes.bool,
  cuePoints: _react2['default'].PropTypes.array,
  onCuePoints: _react2['default'].PropTypes.func,
  onSeeked: _react2['default'].PropTypes.func,
  onProgress: _react2['default'].PropTypes.func,
  onCanPlay: _react2['default'].PropTypes.func,
  onPlay: _react2['default'].PropTypes.func,
  onPause: _react2['default'].PropTypes.func,
  onTimeUpdate: _react2['default'].PropTypes.func,
  onDurationChange: _react2['default'].PropTypes.func
};
RcAudio.defaultProps = {
  prefixCls: 'rc-audio',
  showBufferProgress: true,
  showProgressBarInfo: true,
  cuePoints: []
};
exports['default'] = RcAudio;
module.exports = exports['default'];

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondsToTime = secondsToTime;
exports.decimalToPercent = decimalToPercent;
function timeUnitFormat(time) {
  return time.toString().padStart(2, '0');
}

function secondsToTime(secs) {
  secs = Math.floor(secs);
  var hours = Math.floor(secs / (60 * 60));

  var divisorForMinutes = secs % (60 * 60);
  var minutes = Math.floor(divisorForMinutes / 60);

  var divisorForSeconds = divisorForMinutes % 60;
  var seconds = Math.floor(divisorForSeconds);
  var time = '';

  if (hours > 0) {
    time += hours + ':';
  }

  time += timeUnitFormat(minutes) + ':';
  time += timeUnitFormat(seconds);
  return time;
}

function decimalToPercent(decimal) {
  return decimal * 100 + '%';
}

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(687);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(302);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(681);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(204)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(681, function() {
			var newContent = __webpack_require__(681);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(688), __esModule: true };

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(689);
module.exports = __webpack_require__(53).Object.assign;


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(82);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(690) });


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(129);
var gOPS = __webpack_require__(205);
var pIE = __webpack_require__(130);
var toObject = __webpack_require__(301);
var IObject = __webpack_require__(300);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(95)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(683);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (props) {
  return _react2['default'].createElement(
    'span',
    { className: props.prefixCls + '-time' },
    (0, _util.secondsToTime)(props.currentTime),
    '/',
    (0, _util.secondsToTime)(props.duration)
  );
};

module.exports = exports['default'];

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(51);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(52);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(683);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ProgressBar = function (_Component) {
  (0, _inherits3['default'])(ProgressBar, _Component);

  function ProgressBar(props) {
    (0, _classCallCheck3['default'])(this, ProgressBar);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

    _this.onMouseOver = function (e) {
      var _this$props = _this.props,
          duration = _this$props.duration,
          prefixCls = _this$props.prefixCls,
          showProgressBarInfo = _this$props.showProgressBarInfo;

      var progress = e.currentTarget;
      var progressRef = progress.getBoundingClientRect().left;
      var hoverPos = e.pageX - progressRef;
      _this.hoverTime = hoverPos * duration / progress.offsetWidth;
      if (e.target.className !== prefixCls + '-progress-tag' && showProgressBarInfo) {
        _this.setState({
          hoverTip: _this.hoverTime
        });
      }
    };

    _this.onCuePointClick = function (e, time) {
      e.stopPropagation && e.stopPropagation();
      e.cancelBubble = true;

      _this.props.setCurrentTime(time);
    };

    _this.onMouseOut = function () {
      _this.setState({
        hoverTip: ''
      });
    };

    _this.state = {
      hoverTip: ''
    };
    return _this;
  }

  (0, _createClass3['default'])(ProgressBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          cuePoints = _props.cuePoints,
          currentTime = _props.currentTime,
          duration = _props.duration,
          bufferedTime = _props.bufferedTime,
          showBufferProgress = _props.showBufferProgress;

      return _react2['default'].createElement(
        'div',
        { className: prefixCls + '-progress' },
        _react2['default'].createElement(
          'span',
          {
            className: prefixCls + '-progress-hover-tip',
            style: { display: this.state.hoverTip ? 'block' : 'none', left: (0, _util.decimalToPercent)(this.hoverTime / duration) } },
          (0, _util.secondsToTime)(this.state.hoverTip)
        ),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-progress-tag-wrap' },
          cuePoints.length > 0 ? cuePoints.map(function (item) {
            if (item.time >= 0 && item.time <= duration) {
              return _react2['default'].createElement(
                'span',
                {
                  onClick: function onClick(e) {
                    _this2.onCuePointClick(e, item.time);
                  },
                  key: item.time,
                  className: prefixCls + '-progress-tag',
                  style: { left: (0, _util.decimalToPercent)(item.time / duration) } },
                _react2['default'].createElement(
                  'span',
                  { className: prefixCls + '-progress-tag-tip' },
                  item.title
                )
              );
            }
          }) : null
        ),
        showBufferProgress ? _react2['default'].createElement('div', { className: prefixCls + '-progress-buffer', style: { width: (0, _util.decimalToPercent)(bufferedTime / duration) } }) : null,
        _react2['default'].createElement(
          'div',
          {
            className: prefixCls + '-progress-playing-wrap',
            onMouseDown: this.props.onProgressMouseDown,
            onMouseMove: this.onMouseOver,
            onMouseOut: this.onMouseOut },
          _react2['default'].createElement('div', { className: prefixCls + '-progress-playing', style: { width: (0, _util.decimalToPercent)(currentTime / duration) } }),
          _react2['default'].createElement('div', { className: prefixCls + '-progress-dot', style: { left: (0, _util.decimalToPercent)(currentTime / duration) } })
        )
      );
    }
  }]);
  return ProgressBar;
}(_react.Component);

ProgressBar.propTypes = {
  prefixCls: _react2['default'].PropTypes.string,
  currentTime: _react2['default'].PropTypes.number,
  duration: _react2['default'].PropTypes.number,
  onProgressMouseDown: _react2['default'].PropTypes.func,
  cuePoints: _react2['default'].PropTypes.array,
  bufferedTime: _react2['default'].PropTypes.number,
  showBufferProgress: _react2['default'].PropTypes.bool,
  showProgressBarInfo: _react2['default'].PropTypes.bool,
  setCurrentTime: _react2['default'].PropTypes.func
};
exports['default'] = ProgressBar;
module.exports = exports['default'];

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _defineProperty2 = __webpack_require__(685);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(51);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(52);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(683);

var _classnames = __webpack_require__(298);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Volume = function (_Component) {
  (0, _inherits3['default'])(Volume, _Component);

  function Volume() {
    (0, _classCallCheck3['default'])(this, Volume);
    return (0, _possibleConstructorReturn3['default'])(this, (Volume.__proto__ || Object.getPrototypeOf(Volume)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Volume, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          volume = _props.volume,
          onVolumeMouseDown = _props.onVolumeMouseDown,
          toggleMuted = _props.toggleMuted,
          muted = _props.muted;

      return _react2['default'].createElement(
        'div',
        { className: prefixCls + '-volume-wrap' },
        _react2['default'].createElement('div', {
          className: (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-volume-muted', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-volume-muted-on', !muted), (0, _defineProperty3['default'])(_classNames, prefixCls + '-volume-muted-off', muted), _classNames)),
          onClick: toggleMuted }),
        _react2['default'].createElement(
          'div',
          {
            className: prefixCls + '-volume',
            onMouseDown: onVolumeMouseDown },
          _react2['default'].createElement('div', { className: prefixCls + '-volume-bar', style: { width: (0, _util.decimalToPercent)(volume / 1) } }),
          _react2['default'].createElement('div', { className: prefixCls + '-volume-dot', style: { left: (0, _util.decimalToPercent)(volume / 1) } })
        )
      );
    }
  }]);
  return Volume;
}(_react.Component);

exports['default'] = Volume;
module.exports = exports['default'];

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends2 = __webpack_require__(684);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(297);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(49);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(50);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(51);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(52);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var AudioEl = function (_Component) {
  (0, _inherits3['default'])(AudioEl, _Component);

  function AudioEl() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, AudioEl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = AudioEl.__proto__ || Object.getPrototypeOf(AudioEl)).call.apply(_ref, [this].concat(args))), _this), _this.play = function () {
      _this.audioRef.play();
    }, _this.pause = function () {
      _this.audioRef.pause();
    }, _this.getDuration = function () {
      return _this.audioRef.duration;
    }, _this.getBuffered = function () {
      return _this.audioRef.buffered;
    }, _this.getVolume = function () {
      return _this.audioRef.volume;
    }, _this.setVolume = function (volume) {
      _this.audioRef.volume = volume;
    }, _this.getCurrentTime = function () {
      return _this.audioRef.currentTime;
    }, _this.setCurrentTime = function (currentTime) {
      _this.audioRef.currentTime = parseFloat(currentTime);
    }, _this.setMuted = function (muted) {
      _this.audioRef.muted = muted;
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(AudioEl, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3['default'])(_props, ['children']);


      if (typeof restProps.src === 'function') {
        restProps.src = restProps.src();
      }

      return _react2['default'].createElement(
        'audio',
        (0, _extends3['default'])({}, restProps, {
          ref: function ref(_ref2) {
            _this2.audioRef = _ref2;
          }
        }),
        children
      );
    }
  }]);
  return AudioEl;
}(_react.Component);

AudioEl.propTypes = {
  src: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.func])
};
exports['default'] = AudioEl;
module.exports = exports['default'];

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(685);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(298);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (props) {
  var _classNames;

  return _react2['default'].createElement('div', {
    className: (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, props.prefixCls + '-switch', true), (0, _defineProperty3['default'])(_classNames, props.prefixCls + '-switch-play', !props.playing), (0, _defineProperty3['default'])(_classNames, props.prefixCls + '-switch-pause', props.playing), _classNames)),
    onClick: props.togglePlay });
};

module.exports = exports['default'];

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(697);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(202);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__(698);

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(699);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(299);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=README.md.js.map