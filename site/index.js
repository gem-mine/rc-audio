webpackJsonp([2],{

/***/ 127:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Base = function (_React$Component) {
  (0, _inherits3['default'])(Base, _React$Component);

  function Base() {
    (0, _classCallCheck3['default'])(this, Base);
    return (0, _possibleConstructorReturn3['default'])(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Base, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!location.hash) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(function () {
          document.getElementById(decodeURI(location.hash.replace('#', ''))).scrollIntoView();
        }, 10);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }]);
  return Base;
}(_react2['default'].Component);

Base.collector = function (nextProps) {
  return {};
};

exports['default'] = Base;
module.exports = exports['default'];

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

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

var _reactDom = __webpack_require__(202);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(199);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(200);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  __webpack_require__(676);
  // Expose to iframe
  window.react = _react2['default'];
  window['react-dom'] = _reactDom2['default'];
}

var Layout = function (_React$Component) {
  (0, _inherits3['default'])(Layout, _React$Component);

  function Layout() {
    (0, _classCallCheck3['default'])(this, Layout);
    return (0, _possibleConstructorReturn3['default'])(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window.ga !== 'undefined') {
        this.context.router.listen(function (loc) {
          window.ga('send', 'pageview', loc.pathname + loc.search);
        });
      }

      var nprogressHiddenStyle = document.getElementById('nprogress-style');
      if (nprogressHiddenStyle) {
        this.timer = setTimeout(function () {
          nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
        }, 0);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3['default'])(_props, ['children']);

      return _react2['default'].createElement(
        'div',
        { className: 'page-wrapper' },
        _react2['default'].createElement(_Header2['default'], restProps),
        children,
        _react2['default'].createElement(_Footer2['default'], restProps)
      );
    }
  }]);
  return Layout;
}(_react2['default'].Component);

Layout.contextTypes = {
  router: _react2['default'].PropTypes.object.isRequired
};
exports['default'] = Layout;
module.exports = exports['default'];

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(203)(false);
// imports


// module
exports.push([module.i, "/* Make clicks pass-through */\n#nprogress {\n  pointer-events: none;\n}\n\n#nprogress .bar {\n  background: #29d;\n\n  position: fixed;\n  z-index: 1031;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 2px;\n}\n\n/* Fancy blur effect */\n#nprogress .peg {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  -webkit-box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n          box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n          transform: rotate(3deg) translate(0px, -4px);\n}\n\n/* Remove these to get rid of the spinner */\n#nprogress .spinner {\n  display: block;\n  position: fixed;\n  z-index: 1031;\n  top: 15px;\n  right: 15px;\n}\n\n#nprogress .spinner-icon {\n  width: 18px;\n  height: 18px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 50%;\n\n  -webkit-animation: nprogress-spinner 400ms linear infinite;\n          animation: nprogress-spinner 400ms linear infinite;\n}\n\n.nprogress-custom-parent {\n  overflow: hidden;\n  position: relative;\n}\n\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n  position: absolute;\n}\n\n@-webkit-keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n@keyframes nprogress-spinner {\n  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n", ""]);

// exports


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = NotFound;

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(178);

var _utils = __webpack_require__(197);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function NotFound(_ref) {
  var location = _ref.location;

  return _react2['default'].createElement(
    'div',
    { id: 'page-404' },
    _react2['default'].createElement(
      'section',
      null,
      _react2['default'].createElement(
        'h1',
        null,
        '404'
      ),
      _react2['default'].createElement(
        'p',
        null,
        '\u4F60\u8981\u627E\u7684\u9875\u9762\u4E0D\u5B58\u5728!',
        _react2['default'].createElement(
          _reactRouter.Link,
          { to: utils.getLocalizedPathname('/', utils.isZhCN(location.pathname)) },
          '\u8FD4\u56DE\u9996\u9875'
        )
      )
    ),
    _react2['default'].createElement('style', {
      dangerouslySetInnerHTML: {
        __html: '#react-content { height: 100%; background-color: #fff }'
      }
    })
  );
}
module.exports = exports['default'];

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuItems = getMenuItems;
exports.isZhCN = isZhCN;
exports.getLocalizedPathname = getLocalizedPathname;
exports.ping = ping;
exports.isLocalStorageNameSupported = isLocalStorageNameSupported;
function getMenuItems(moduleData, locale) {
  var menuMeta = moduleData.map(function (item) {
    return item.meta;
  });
  var menuItems = {};
  menuMeta.sort(function (a, b) {
    return (a.order || 0) - (b.order || 0);
  }).forEach(function (meta) {
    var category = meta.category && meta.category[locale] || meta.category || 'topLevel';
    if (!menuItems[category]) {
      menuItems[category] = {};
    }

    var type = meta.type || 'topLevel';
    if (!menuItems[category][type]) {
      menuItems[category][type] = [];
    }

    menuItems[category][type].push(meta);
  });
  return menuItems;
}

function isZhCN(pathname) {
  return (/-cn\/?$/.test(pathname)
  );
}

function getLocalizedPathname(path, zhCN) {
  var pathname = path.startsWith('/') ? path : '/' + path;
  if (!zhCN) {
    // to enUS
    return (/\/?index-cn/.test(pathname) ? '/' : pathname.replace('-cn', '')
    );
  } else if (pathname === '/') {
    return '/index-cn';
  } else if (pathname.endsWith('/')) {
    return pathname.replace(/\/$/, '-cn/');
  }

  return pathname + '-cn';
}

function ping(url, callback) {
  var img = new Image();
  var done = void 0;
  var finish = function finish(status) {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = function () {
    return finish('responded');
  };
  img.onerror = function () {
    return finish('error');
  };
  img.src = url;
  return setTimeout(function () {
    return finish('timeout');
  }, 1500);
}

function isLocalStorageNameSupported() {
  var testKey = 'test';
  var storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

/***/ }),

/***/ 198:
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

var _classnames = __webpack_require__(298);

var _classnames2 = _interopRequireDefault(_classnames);

var _copyToClipboard = __webpack_require__(674);

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Demo = function (_React$Component) {
  (0, _inherits3['default'])(Demo, _React$Component);

  function Demo(props) {
    (0, _classCallCheck3['default'])(this, Demo);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.handleCodeExapnd = function () {
      _this.setState({ codeExpand: !_this.state.codeExpand });
    };

    _this.handleCodeCopied = function () {
      (0, _copyToClipboard2['default'])(_this.props.sourceCode);
      _this.setState({ copied: true });
    };

    _this.state = {
      codeExpand: false,
      copied: false
    };
    return _this;
  }

  (0, _createClass3['default'])(Demo, [{
    key: 'render',
    value: function render() {
      var state = this.state;
      var props = this.props;
      var codeBoxClass = (0, _classnames2['default'])({
        'code-box': true,
        expand: state.codeExpand
      });
      var highlightClass = (0, _classnames2['default'])({
        'highlight-wrapper': true,
        'highlight-wrapper-expand': state.codeExpand
      });
      return _react2['default'].createElement(
        'section',
        { className: codeBoxClass },
        props.children ? _react2['default'].createElement(
          'section',
          { className: 'code-box-demo' },
          props.children
        ) : null,
        _react2['default'].createElement(
          'section',
          { className: 'code-box-meta markdown', onClick: this.handleCodeExapnd },
          props.lang + '\u6E90\u7801',
          _react2['default'].createElement('span', { className: 'collapse anticon anticon-circle-o-down', unselectable: 'none' })
        ),
        _react2['default'].createElement(
          'section',
          { className: highlightClass, key: 'code' },
          _react2['default'].createElement(
            'div',
            { className: 'highlight' },
            _react2['default'].createElement(
              'i',
              { className: 'code-box-code-copy', onClick: this.handleCodeCopied },
              '\u590D\u5236'
            ),
            props.textNode
          )
        )
      );
    }
  }]);
  return Demo;
}(_react2['default'].Component);

exports['default'] = Demo;
module.exports = exports['default'];

/***/ }),

/***/ 199:
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

var _reactRouter = __webpack_require__(178);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header = function (_React$Component) {
  (0, _inherits3['default'])(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3['default'])(this, Header);
    return (0, _possibleConstructorReturn3['default'])(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Header, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'header' },
        _react2['default'].createElement(
          _reactRouter.Link,
          { to: '/', id: 'logo' },
          _react2['default'].createElement('img', { alt: 'logo', src: '//dn-tomjoke.qbox.me/docs/logo-3fec646f7c415b30213a261431b6b07f.png' }),
          _react2['default'].createElement(
            'span',
            null,
            this.props.themeConfig && this.props.themeConfig.title
          )
        )
      );
    }
  }]);
  return Header;
}(_react2['default'].Component);

exports['default'] = Header;
module.exports = exports['default'];

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Footer = function (_React$Component) {
  (0, _inherits3['default'])(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck3['default'])(this, Footer);
    return (0, _possibleConstructorReturn3['default'])(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Footer, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'footer' },
        _react2['default'].createElement(
          'ul',
          null,
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              'GitHub'
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'a',
                {
                  target: '_blank ',
                  href: this.props.themeConfig && this.props.themeConfig.github
                },
                '\u4ED3\u5E93'
              )
            )
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              '\u76F8\u5173\u7AD9\u70B9'
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'a',
                { href: 'https://gem-mine.club/#/' },
                'gem-mine'
              ),
              _react2['default'].createElement(
                'span',
                null,
                ' - '
              ),
              '\u524D\u7AEF\u811A\u624B\u67B6'
            )
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              '\u5E2E\u52A9'
            ),
            _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(
                'a',
                { href: 'changelog' },
                '\u66F4\u65B0\u65E5\u5FD7'
              )
            )
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'h2',
              null,
              'Copyright \xA9 ',
              new Date().getFullYear()
            ),
            _react2['default'].createElement(
              'div',
              null,
              'Built with\xA0',
              _react2['default'].createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'https://github.com/gem-mine/md-tools'
                },
                'md-tools'
              )
            )
          )
        )
      );
    }
  }]);
  return Footer;
}(_react2['default'].Component);

exports['default'] = Footer;
module.exports = exports['default'];

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(203)(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block;\n}\n/**\n * Add the correct display in IE 9-.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\ntemplate,\n[hidden] {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n * Restore the font weight unset by the previous rule.\n */\noptgroup {\n  font-weight: bold;\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n}\nbody,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\ncode,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nblockquote,\nth,\ntd,\nhr,\nbutton,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  margin: 0;\n  padding: 0;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n}\nul,\nol {\n  list-style: none;\n}\ninput::-ms-clear,\ninput::-ms-reveal {\n  display: none;\n}\n::-moz-selection {\n  background: #2d8cf0;\n  color: #fff;\n}\n::selection {\n  background: #2d8cf0;\n  color: #fff;\n}\na {\n  color: #2d8cf0;\n  background: transparent;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n  -webkit-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\na:hover {\n  color: #57a3f3;\n}\na:active {\n  color: #2b85e4;\n}\na:active,\na:hover {\n  outline: 0;\n  text-decoration: none;\n}\na[disabled] {\n  color: #ccc;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.clearfix {\n  zoom: 1;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.ant-divider {\n  margin: 0 4px;\n  color: #999;\n  display: inline-block;\n  height: 8px;\n  width: 1px;\n  background: #ccc;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Consolas, Menlo, Courier, monospace;\n}\nhtml {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun, sans-serif;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  background: #fff;\n  -webkit-transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  overflow-x: hidden;\n}\na {\n  -webkit-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.main-wrapper {\n  background: #fff;\n  margin: 0px;\n  border-radius: 4px;\n  padding: 24px 0 0;\n  margin-bottom: 5px;\n  position: relative;\n}\n.main-container {\n  padding: 0 40px 120px;\n  margin-left: -1px;\n  background: #fff;\n  min-height: 500px;\n  overflow: hidden;\n  border-left: 1px solid #e9e9e9;\n  position: relative;\n}\n.main-container-component {\n  padding-right: 130px;\n}\n.aside-container {\n  padding-bottom: 50px;\n  font-family: Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun, sans-serif;\n}\n.aside-container.ant-menu-inline .ant-menu-submenu-title h4,\n.aside-container.ant-menu-inline > .ant-menu-item,\n.aside-container.ant-menu-inline .ant-menu-item a {\n  font-size: 14px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.aside-container a[disabled] {\n  color: #ccc;\n}\n.aside-container .menu-item-link-outside {\n  position: relative;\n}\n.aside-container .menu-item-link-outside .anticon {\n  font-size: 12px;\n  color: #2d8cf0;\n  opacity: 0;\n  position: absolute;\n  right: -10px;\n  top: 16px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.aside-container .menu-item-link-outside:hover .anticon {\n  opacity: 1;\n}\n.aside-container .chinese {\n  font-size: 12px;\n  margin-left: 6px;\n  font-weight: normal;\n  opacity: 0.67;\n}\n.outside-link {\n  display: inline-block;\n}\n.outside-link:after {\n  content: \"\\E691\";\n  font-family: \"anticon\";\n  margin-left: 5px;\n  font-size: 12px;\n  color: #aaa;\n}\n.outside-link.internal {\n  display: none;\n}\n.page-wrapper {\n  background: #ececec;\n}\n#header {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n  background: #fff;\n  height: 80px;\n  margin-bottom: 5px;\n  padding: 0 48px;\n  width: 100%;\n}\n#header.home-nav-bottom {\n  background: rgba(255, 255, 255, 0.9);\n  border-bottom-color: #ebedee;\n}\n#header.home-nav-bottom .search {\n  border-left-color: #ebedee;\n}\n#header.home-nav-bottom a {\n  color: rgba(0, 0, 0, 0.65);\n}\n#logo {\n  float: left;\n  height: 80px;\n  line-height: 80px;\n}\n#logo img {\n  height: 40px;\n  line-height: 40px;\n  width: 40px;\n  margin-right: 8px;\n  margin-top: 20px;\n}\n#logo span {\n  float: right;\n  font-size: 16px;\n  font-family: 'Raleway', 'Hiragino Sans GB', sans-serif;\n  height: 80px;\n  line-height: 80px;\n}\n#search-box {\n  border-left: 1px solid #ebedee;\n  float: left;\n  height: 22px;\n  line-height: 22px;\n  padding-left: 30px;\n  margin: 29px auto 0;\n}\n#search-box .ant-select {\n  font-size: 14px;\n  margin-top: -3px;\n  width: 200px;\n}\n#search-box .ant-select-selection {\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.lang,\n.version {\n  float: right;\n  margin-top: 29px;\n  margin-left: 10px;\n}\n.version {\n  width: 70px;\n  margin-left: 0;\n}\n#nav {\n  border: 0;\n  float: right;\n  font-size: 14px;\n  font-family: Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun, sans-serif;\n}\n#nav li {\n  height: 80px;\n  line-height: 80px;\n  min-width: 72px;\n  text-align: center;\n  border-bottom-width: 3px;\n}\n#nav li.ant-menu-item-selected a {\n  color: #2d8cf0;\n  font-weight: bold;\n}\n.component-select.ant-select-dropdown {\n  border: 0;\n  border-radius: 0;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);\n  font-size: 14px;\n}\n.component-select .ant-select-dropdown-menu {\n  max-height: 200px;\n}\n.component-select .ant-select-dropdown-menu-item {\n  border-radius: 0 !important;\n}\n.component-select .ant-component-decs {\n  font-size: 12px;\n  position: absolute;\n  color: #aaa;\n  right: 16px;\n}\n#footer {\n  clear: both;\n  font-size: 12px;\n  background: #fff;\n  position: relative;\n  z-index: 1;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-shadow: 0 1000px 0 1000px #fff;\n          box-shadow: 0 1000px 0 1000px #fff;\n}\n#footer ul {\n  overflow: hidden;\n  margin: 0 2%;\n  list-style: none;\n}\n#footer ul li {\n  float: left;\n  width: 25%;\n  padding: 24px 2%;\n}\n#footer ul li > h2 {\n  font-size: 14px;\n  margin: 0 auto 8px;\n  font-weight: 500;\n  position: relative;\n}\n#footer ul li > h2 > .anticon {\n  font-size: 16px;\n  position: absolute;\n  left: -22px;\n  top: 3px;\n  color: #aaa;\n}\n#footer ul li > div {\n  margin: 0 0 5px;\n}\n.banner-wrapper {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  background: url(\"https://os.alipayobjects.com/rmsportal/GhjqstwSgxBXrZS.png\") no-repeat center / cover;\n}\n.banner-text-wrapper {\n  position: absolute;\n  left: 13%;\n  top: 53%;\n  color: #fff;\n  text-align: right;\n  font-family: Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun, sans-serif;\n}\n.banner-text-wrapper h2 {\n  font-size: 40px;\n  font-weight: normal;\n  font-family: 'Raleway', 'Hiragino Sans GB';\n  white-space: nowrap;\n}\n.banner-text-wrapper h2 p {\n  color: #ff3171;\n  display: inline-block;\n}\n.banner-text-wrapper .line {\n  width: 0.8px;\n  height: 76px;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.44);\n  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.03));\n  background-image: -o-linear-gradient(top, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.03));\n  top: 16px;\n  right: -25px;\n}\n.banner-text-wrapper > p {\n  margin: 10px auto 24px;\n  font-size: 16px;\n}\n.banner-text-wrapper .start-button {\n  margin-bottom: 24px;\n  text-align: right;\n}\n.banner-text-wrapper .start-button > a {\n  display: inline-block;\n  height: 40px;\n  padding: 0 16px;\n  font-weight: 500;\n  border-radius: 4px;\n  border: 1px solid #57a3f3;\n  color: #0ae;\n  font-size: 15px;\n  background: transparent;\n  -webkit-transition: all .45s;\n  transition: all .45s;\n  text-align: center;\n  line-height: 36px;\n  margin-left: 8px;\n}\n.banner-text-wrapper .start-button > a:hover {\n  color: #fff;\n  background: #57a3f3;\n}\n.banner-text-wrapper .github-btn {\n  float: right;\n  line-height: 14px;\n  text-align: left;\n}\n.banner-text-wrapper .github-btn a:hover {\n  color: #333;\n}\n.down {\n  text-align: center;\n  position: absolute;\n  bottom: 30px;\n  color: rgba(255, 255, 255, 0.75);\n  left: 50%;\n  margin-left: -7px;\n}\n.page {\n  min-height: 700px;\n  height: 100vh;\n}\n.content-wrapper {\n  width: 100%;\n  max-width: 1500px;\n  margin: auto;\n  overflow: hidden;\n  background: #fff;\n}\n.content-wrapper .image-wrapper {\n  width: 65%;\n  float: left;\n  position: relative;\n}\n.content-wrapper .text-wrapper {\n  width: 35%;\n  float: left;\n  position: relative;\n  top: 20%;\n  left: -30px;\n  font-family: Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun, sans-serif;\n  z-index: 1;\n}\n.content-wrapper .text-wrapper h2,\n.content-wrapper .text-wrapper-bottom h2 {\n  font-size: 32px;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: normal;\n  white-space: nowrap;\n}\n.content-wrapper .text-wrapper p {\n  margin: 10px 0 20px;\n  font-size: 16px;\n  line-height: 28px;\n  color: #999;\n}\n.content-wrapper .left-text {\n  padding-left: 10%;\n}\n.image1 {\n  background: url(\"https://t.alipayobjects.com/images/T1Ch8kXfpdXXXXXXXX.png\") no-repeat right / 841px;\n  height: 511px;\n  top: 50%;\n  margin-top: -256px;\n}\n.image2 {\n  background: url(\"https://t.alipayobjects.com/images/T1r5RkXotXXXXXXXXX.png\") no-repeat left / 800px;\n  height: 474px;\n  top: 50%;\n  margin-top: -266px;\n}\n.image3 {\n  padding-right: 10%;\n  background: url(\"https://t.alipayobjects.com/images/T1nx0kXdFfXXXXXXXX.png\") no-repeat right / 639px;\n  background-origin: content-box;\n  height: 500px;\n  top: 50%;\n  margin-top: -250px;\n}\n.image4 {\n  background: url(\"https://t.alipayobjects.com/images/T1lyJkXg4aXXXXXXXX.png\") no-repeat center / 615px;\n  height: 364px;\n  margin: auto;\n}\n.text-wrapper-bottom {\n  text-align: center;\n  margin: 10% auto 40px;\n}\n.text-wrapper-bottom p {\n  margin: 20px auto;\n  font-size: 16px;\n  line-height: 28px;\n  color: #999;\n}\n.prev-next-nav {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  font-size: 14px;\n  border-top: 1px solid #ddd;\n}\n.prev-next-nav > .prev-page,\n.prev-next-nav > .next-page {\n  padding: 0 24px;\n  width: 50%;\n  float: left;\n  line-height: 72px;\n  height: 72px;\n}\n.prev-next-nav > a.prev-page:before {\n  font-family: 'anticon';\n  content: '\\E61C';\n  font-size: 12px;\n  margin-right: 1em;\n  color: rgba(0, 0, 0, 0.43);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  position: relative;\n  left: 0;\n}\n.prev-next-nav > a.prev-page:hover:before {\n  color: #2d8cf0;\n  left: -3px;\n}\n.prev-next-nav > .next-page {\n  text-align: right;\n  float: right;\n}\n.prev-next-nav > .next-page:after {\n  font-family: 'anticon';\n  content: '\\E61B';\n  font-size: 12px;\n  margin-left: 1em;\n  color: rgba(0, 0, 0, 0.43);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  position: relative;\n  right: 0;\n}\n.prev-next-nav > .next-page:hover:after {\n  color: #2d8cf0;\n  right: -3px;\n}\n.prev-next-nav .chinese {\n  margin-left: 0.5em;\n}\n.markdown {\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  line-height: 1.8;\n}\n.highlight {\n  line-height: 1.5;\n}\n.markdown img {\n  vertical-align: middle;\n  max-width: 100%;\n}\n.markdown h1 {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  line-height: 40px;\n  margin-bottom: 24px;\n  margin-top: 8px;\n  font-family: Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun, sans-serif;\n}\n.markdown h1 .subtitle {\n  font-weight: normal;\n  font-size: 90%;\n  margin-left: 12px;\n}\n.markdown h2,\n.markdown h3,\n.markdown h4,\n.markdown h5,\n.markdown h6 {\n  color: rgba(0, 0, 0, 0.85);\n  font-family: Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun, sans-serif;\n  margin: 1.6em 0 0.6em;\n  font-weight: 500;\n  clear: both;\n}\n.markdown h1 {\n  font-size: 28px;\n}\n.markdown h2 {\n  font-size: 22px;\n}\n.markdown h3 {\n  font-size: 18px;\n}\n.markdown h4 {\n  font-size: 16px;\n}\n.markdown h5 {\n  font-size: 14px;\n}\n.markdown h6 {\n  font-size: 12px;\n}\n.markdown hr {\n  height: 1px;\n  border: 0;\n  background: #e9e9e9;\n  margin: 16px 0;\n  clear: both;\n}\n.markdown p,\n.markdown pre {\n  margin: 1em 0;\n}\n.markdown ul > li {\n  list-style-type: circle;\n  margin-left: 20px;\n  padding-left: 4px;\n}\n.markdown ul > li:empty {\n  display: none;\n}\n.markdown ol > li {\n  list-style-type: decimal;\n  margin-left: 20px;\n  padding-left: 4px;\n}\n.markdown ul > li > p,\n.markdown ol > li > p {\n  margin: 0.2em 0;\n}\n.markdown code {\n  margin: 0 1px;\n  background: #f7f7f7;\n  padding: .2em .4em;\n  border-radius: 3px;\n  font-size: .9em;\n  border: 1px solid #eee;\n}\n.markdown pre {\n  border-radius: 4px;\n  background: #f7f7f7;\n  font-family: \"Lucida Console\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n}\n.markdown pre code {\n  border: none;\n  background: #f7f7f7;\n  margin: 0;\n  padding: 0;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.65);\n  overflow: auto;\n}\n.markdown strong,\n.markdown b {\n  font-weight: 600;\n}\n.markdown > table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin: 16px 0;\n}\n.markdown > table th {\n  white-space: nowrap;\n  color: #5c6b77;\n  font-weight: 600;\n}\n.markdown > table th,\n.markdown > table td {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n.markdown > table th {\n  background: #f7f7f7;\n}\n.markdown blockquote {\n  font-size: 90%;\n  color: #999;\n  border-left: 4px solid #e9e9e9;\n  padding-left: 0.8em;\n  margin: 1em 0;\n}\n.markdown blockquote p {\n  margin: 0;\n}\n.markdown .anchor {\n  opacity: 0;\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n  margin-left: 8px;\n}\n.markdown .waiting {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.markdown a.edit-button {\n  line-height: 12px;\n  display: inline-block;\n  margin-left: 10px;\n  height: 12px;\n}\n.markdown a.edit-button i {\n  color: #999;\n}\n.markdown a.edit-button i:hover {\n  color: #2d8cf0;\n}\n.markdown a.edit-button .anticon {\n  display: block;\n  font-size: 16px;\n}\n.markdown h1:hover .anchor,\n.markdown h2:hover .anchor,\n.markdown h3:hover .anchor,\n.markdown h4:hover .anchor,\n.markdown h5:hover .anchor,\n.markdown h6:hover .anchor {\n  opacity: 1;\n  display: inline-block;\n}\n.markdown > br,\n.markdown > p > br {\n  clear: both;\n}\n.markdown.api-container table {\n  font-size: 13px;\n}\n.markdown.api-container table td:first-child {\n  background: #fcfcfc;\n  font-weight: 500;\n  width: 20%;\n  font-family: \"Lucida Console\", Consolas, Menlo, Courier, monospace;\n}\n.markdown.api-container table td:nth-child(3) {\n  width: 22%;\n  font-size: 12px;\n  font-family: \"Lucida Console\", Consolas, Menlo, Courier, monospace;\n}\n.markdown.api-container table td:last-child {\n  width: 13%;\n  font-size: 12px;\n  font-family: \"Lucida Console\", Consolas, Menlo, Courier, monospace;\n}\n.grid-demo .demo-row,\n[id^=\"components-grid-demo-\"] .demo-row,\n.grid-demo .code-box-demo .demo-row,\n[id^=\"components-grid-demo-\"] .code-box-demo .demo-row {\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(4.16666667%, #f5f5f5), color-stop(4.16666667%, transparent), color-stop(8.33333333%, transparent), color-stop(8.33333333%, #f5f5f5), color-stop(12.5%, #f5f5f5), color-stop(12.5%, transparent), color-stop(16.66666667%, transparent), color-stop(16.66666667%, #f5f5f5), color-stop(20.83333333%, #f5f5f5), color-stop(20.83333333%, transparent), color-stop(25%, transparent), color-stop(25%, #f5f5f5), color-stop(29.16666667%, #f5f5f5), color-stop(29.16666667%, transparent), color-stop(33.33333333%, transparent), color-stop(33.33333333%, #f5f5f5), color-stop(37.5%, #f5f5f5), color-stop(37.5%, transparent), color-stop(41.66666667%, transparent), color-stop(41.66666667%, #f5f5f5), color-stop(45.83333333%, #f5f5f5), color-stop(45.83333333%, transparent), color-stop(50%, transparent), color-stop(50%, #f5f5f5), color-stop(54.16666667%, #f5f5f5), color-stop(54.16666667%, transparent), color-stop(58.33333333%, transparent), color-stop(58.33333333%, #f5f5f5), color-stop(62.5%, #f5f5f5), color-stop(62.5%, transparent), color-stop(66.66666667%, transparent), color-stop(66.66666667%, #f5f5f5), color-stop(70.83333333%, #f5f5f5), color-stop(70.83333333%, transparent), color-stop(75%, transparent), color-stop(75%, #f5f5f5), color-stop(79.16666667%, #f5f5f5), color-stop(79.16666667%, transparent), color-stop(83.33333333%, transparent), color-stop(83.33333333%, #f5f5f5), color-stop(87.5%, #f5f5f5), color-stop(87.5%, transparent), color-stop(91.66666667%, transparent), color-stop(91.66666667%, #f5f5f5), color-stop(95.83333333%, #f5f5f5), color-stop(95.83333333%, transparent));\n  background-image: -webkit-linear-gradient(left, #f5f5f5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #f5f5f5 8.33333333%, #f5f5f5 12.5%, transparent 12.5%, transparent 16.66666667%, #f5f5f5 16.66666667%, #f5f5f5 20.83333333%, transparent 20.83333333%, transparent 25%, #f5f5f5 25%, #f5f5f5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #f5f5f5 33.33333333%, #f5f5f5 37.5%, transparent 37.5%, transparent 41.66666667%, #f5f5f5 41.66666667%, #f5f5f5 45.83333333%, transparent 45.83333333%, transparent 50%, #f5f5f5 50%, #f5f5f5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #f5f5f5 58.33333333%, #f5f5f5 62.5%, transparent 62.5%, transparent 66.66666667%, #f5f5f5 66.66666667%, #f5f5f5 70.83333333%, transparent 70.83333333%, transparent 75%, #f5f5f5 75%, #f5f5f5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #f5f5f5 83.33333333%, #f5f5f5 87.5%, transparent 87.5%, transparent 91.66666667%, #f5f5f5 91.66666667%, #f5f5f5 95.83333333%, transparent 95.83333333%);\n  background-image: linear-gradient(90deg, #f5f5f5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #f5f5f5 8.33333333%, #f5f5f5 12.5%, transparent 12.5%, transparent 16.66666667%, #f5f5f5 16.66666667%, #f5f5f5 20.83333333%, transparent 20.83333333%, transparent 25%, #f5f5f5 25%, #f5f5f5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #f5f5f5 33.33333333%, #f5f5f5 37.5%, transparent 37.5%, transparent 41.66666667%, #f5f5f5 41.66666667%, #f5f5f5 45.83333333%, transparent 45.83333333%, transparent 50%, #f5f5f5 50%, #f5f5f5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #f5f5f5 58.33333333%, #f5f5f5 62.5%, transparent 62.5%, transparent 66.66666667%, #f5f5f5 66.66666667%, #f5f5f5 70.83333333%, transparent 70.83333333%, transparent 75%, #f5f5f5 75%, #f5f5f5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #f5f5f5 83.33333333%, #f5f5f5 87.5%, transparent 87.5%, transparent 91.66666667%, #f5f5f5 91.66666667%, #f5f5f5 95.83333333%, transparent 95.83333333%);\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.grid-demo .ant-row-flex,\n[id^=\"components-grid-demo-\"] .ant-row-flex,\n.grid-demo .code-box-demo .ant-row-flex,\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row-flex {\n  background: #f5f5f5;\n}\n.grid-demo .ant-row > div,\n[id^=\"components-grid-demo-\"] .ant-row > div,\n.grid-demo .code-box-demo .ant-row > div,\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row > div,\n.grid-demo .ant-row-flex > div,\n[id^=\"components-grid-demo-\"] .ant-row-flex > div,\n.grid-demo .code-box-demo .ant-row-flex > div,\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row-flex > div {\n  padding: 5px 0;\n  text-align: center;\n  border-radius: 0;\n  min-height: 30px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  color: #fff;\n}\n.grid-demo .code-box-demo .ant-row > div:not(.gutter-row),\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row > div:not(.gutter-row),\n.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row),\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row-flex > div:not(.gutter-row) {\n  background: #00a0e9;\n  padding: 16px 0;\n}\n.grid-demo .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),\n.grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1),\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1) {\n  background: rgba(0, 160, 233, 0.7);\n}\n.grid-demo .ant-row .demo-col,\n[id^=\"components-grid-demo-\"] .ant-row .demo-col,\n.grid-demo .code-box-demo .ant-row .demo-col,\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row .demo-col {\n  text-align: center;\n  padding: 30px 0;\n  color: #fff;\n  font-size: 18px;\n  border: none;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.grid-demo .ant-row .demo-col-1,\n[id^=\"components-grid-demo-\"] .ant-row .demo-col-1,\n.grid-demo .ant-row .demo-col-1,\n[id^=\"components-grid-demo-\"] .ant-row .demo-col-1 {\n  background: rgba(0, 160, 233, 0.7);\n}\n.grid-demo .ant-row .demo-col-2,\n[id^=\"components-grid-demo-\"] .ant-row .demo-col-2,\n.grid-demo .code-box-demo .ant-row .demo-col-2,\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row .demo-col-2 {\n  background: rgba(0, 160, 233, 0.5);\n}\n.grid-demo .ant-row .demo-col-3,\n[id^=\"components-grid-demo-\"] .ant-row .demo-col-3,\n.grid-demo .code-box-demo .ant-row .demo-col-3,\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row .demo-col-3 {\n  background: rgba(255, 255, 255, 0.2);\n  color: #999;\n}\n.grid-demo .ant-row .demo-col-4,\n[id^=\"components-grid-demo-\"] .ant-row .demo-col-4,\n.grid-demo .code-box-demo .ant-row .demo-col-4,\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row .demo-col-4 {\n  background: rgba(0, 160, 233, 0.6);\n}\n.grid-demo .ant-row .demo-col-5,\n[id^=\"components-grid-demo-\"] .ant-row .demo-col-5,\n.grid-demo .code-box-demo .ant-row .demo-col-5,\n[id^=\"components-grid-demo-\"] .code-box-demo .ant-row .demo-col-5 {\n  background: rgba(255, 255, 255, 0.5);\n  color: #999;\n}\n.grid-demo .code-box-demo .height-100,\n[id^=\"components-grid-demo-\"] .code-box-demo .height-100 {\n  height: 100px;\n  line-height: 100px;\n}\n.grid-demo .code-box-demo .height-50,\n[id^=\"components-grid-demo-\"] .code-box-demo .height-50 {\n  height: 50px;\n  line-height: 50px;\n}\n.grid-demo .code-box-demo .height-120,\n[id^=\"components-grid-demo-\"] .code-box-demo .height-120 {\n  height: 120px;\n  line-height: 120px;\n}\n.grid-demo .code-box-demo .height-80,\n[id^=\"components-grid-demo-\"] .code-box-demo .height-80 {\n  height: 80px;\n  line-height: 80px;\n}\n.markdown ul.ant-timeline li.ant-timeline-item {\n  list-style: none;\n  margin: 0;\n  padding: 0 0 30px;\n}\n.markdown ul.ant-timeline li.ant-timeline-item .ant-timeline-item-content {\n  font-size: 14px;\n  padding-left: 32px;\n  position: relative;\n  top: -14px;\n}\n.markdown ul.ant-timeline li.ant-timeline-item .ant-timeline-item-content > h2 {\n  margin-top: 0;\n  padding-top: 0.5px;\n}\n.markdown ul.ant-timeline li.ant-timeline-item:first-child {\n  margin-top: 40px;\n}\n.resource-cards {\n  width: 100%;\n}\n.resource-card {\n  max-width: 350px;\n  width: 40%;\n  min-width: 300px;\n  height: 130px;\n  border: 1px solid #e9e9e9;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #777;\n  display: inline-block;\n  margin: 20px 40px 10px 0;\n  vertical-align: middle;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.resource-card:hover {\n  -webkit-box-shadow: 0 3px 8px #d3ddeb;\n          box-shadow: 0 3px 8px #d3ddeb;\n  border-color: transparent;\n}\n.resource-card:hover .resource-card-title {\n  color: #2d8cf0;\n}\n.resource-card.disabled {\n  opacity: 0.45;\n  pointer-events: none;\n}\n.resource-card img {\n  display: inline-block;\n  vertical-align: middle;\n  width: 50px;\n  margin: 0 20px 0 24px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.resource-card-content {\n  display: inline-block;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  margin-left: 92px;\n}\n.resource-card-title {\n  display: block;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.65);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  margin-bottom: 6px;\n}\n.resource-card-description {\n  display: block;\n  color: #999;\n  padding-right: 8px;\n}\n.preview-image-boxes {\n  float: right;\n  margin: 0 0 70px 20px;\n  width: 608px;\n  clear: both;\n}\n.preview-image-boxes-with-carousel {\n  width: 420px;\n}\n.preview-image-boxes-with-carousel .preview-image-box img {\n  padding: 0;\n}\n.preview-image-boxes + .preview-image-boxes {\n  margin-top: -35px;\n}\n.preview-image-box {\n  width: 100%;\n  float: left;\n  padding: 0 8px;\n}\n.preview-image-wrapper {\n  background: #f7f7f7;\n  padding: 16px;\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  position: relative;\n}\n.preview-image-wrapper.video {\n  padding: 0;\n  background: 0;\n  display: block;\n}\n.preview-image-wrapper video {\n  width: 100%;\n  display: block;\n}\n.preview-image-wrapper video + svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.preview-image-wrapper.good:after {\n  content: '';\n  width: 100%;\n  height: 3px;\n  background: #2d8cf0;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.preview-image-wrapper.bad:after {\n  content: '';\n  width: 100%;\n  height: 3px;\n  background: #ff5745;\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.preview-image-title {\n  font-size: 12px;\n  margin-top: 5px;\n  color: rgba(0, 0, 0, 0.65);\n}\n.preview-image-description {\n  font-size: 12px;\n  margin-top: 2px;\n  color: rgba(0, 0, 0, 0.43);\n  line-height: 1.5;\n}\n.preview-image-description hr {\n  margin: 2px 0;\n  border: 0;\n  background: none;\n}\n.preview-image-box img {\n  cursor: pointer;\n  max-width: 100%;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  background: #fff;\n  padding: 12px;\n  border-radius: 4px;\n}\n.preview-image-box img.no-padding {\n  padding: 0;\n  background: none;\n}\n.preview-image-boxes.preview-image-boxes-with-carousel img {\n  padding: 0;\n  -webkit-box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 #fff, 0 4px 0 0 #ddd, 0 6px 0 0 #fff, 0 7px 0 0 #ddd;\n          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 #fff, 0 4px 0 0 #ddd, 0 6px 0 0 #fff, 0 7px 0 0 #ddd;\n}\n.preview-image-box img:hover {\n  -webkit-box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);\n          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);\n}\n.image-modal {\n  text-align: center;\n}\n.image-modal-container {\n  position: relative;\n  text-align: center;\n}\n.image-modal .ant-carousel .slick-slider {\n  padding-bottom: 24px;\n}\n.image-modal .ant-carousel .slick-slider img {\n  display: inline;\n  max-width: 100%;\n}\n.image-modal .ant-carousel .slick-dots {\n  bottom: 4px;\n}\n.image-modal .ant-carousel .slick-dots li button {\n  background: #888;\n}\n.image-modal .image-modal-single.slick-slider {\n  padding-bottom: 0;\n}\n.image-modal .image-modal-single .slick-dots {\n  display: none!important;\n}\n.transition-video-player {\n  float: right;\n  padding: 0 0 70px 20px;\n  width: 600px;\n}\n.transition-video-player .preview-image-wrapper {\n  padding: 0;\n}\n.toc {\n  font-size: 14px;\n  margin: 24px 0;\n  border-left: 1px solid #e9e9e9;\n  list-style: none;\n  position: fixed;\n  top: 90px;\n  right: 0px;\n  margin: 0px;\n  padding: 5px;\n}\n.markdown .toc {\n  background: #fbfbfb;\n  border-left: 2px solid #eee;\n}\n.toc > ul {\n  padding: 8px 0;\n  list-style: none;\n}\n.toc > ul li {\n  list-style: none;\n  margin: 0;\n}\n.toc li > ul {\n  text-indent: 8px;\n  font-size: 12px;\n  display: none;\n}\n.toc a {\n  padding-left: 16px;\n  display: block;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.65);\n}\n.toc a:hover {\n  color: #2d8cf0;\n}\n.toc a.current {\n  border-color: #2d8cf0;\n  color: #2d8cf0;\n}\n.toc-affix {\n  position: absolute;\n  top: 8px;\n  right: 20px;\n}\n.demos-anchor {\n  color: #aaa;\n  font-size: 12px;\n  margin-top: -4px;\n}\n.demos-anchor a {\n  padding-left: 8px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 110px;\n}\n#page-404 {\n  background-image: url('https://os.alipayobjects.com/rmsportal/NOAjOBbnYCrNzrW.jpg');\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n}\n#page-404 section {\n  position: absolute;\n  top: 48%;\n  left: 55%;\n  margin: -103px 0 0 -120px;\n  text-align: center;\n}\n#page-404 h1 {\n  color: #2d8cf0;\n  font-size: 120px;\n  font-weight: 500;\n}\n#page-404 p {\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 18px;\n}\n/**\n* prism.js default theme for JavaScript, CSS and HTML\n* Based on dabblet (http://dabblet.com)\n* @author Lea Verou\n*/\npre code {\n  display: block;\n  background: white;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 1.7;\n  border: 1px solid #e9e9e9;\n  padding: 10px 15px;\n  border-radius: 4px;\n  font-size: 13px;\n  white-space: pre;\n  font-family: \"Lucida Console\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n}\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: black;\n  background: none;\n  text-shadow: 0 1px white;\n  font-family: \"Lucida Console\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\npre[class*=\"language-\"]::-moz-selection,\npre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection,\ncode[class*=\"language-\"] ::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\npre[class*=\"language-\"]::selection,\npre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection,\ncode[class*=\"language-\"] ::selection {\n  text-shadow: none;\n  background: #b3d4fc;\n}\n@media print {\n  code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    text-shadow: none;\n  }\n}\n/* Code blocks */\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: 1.2em 0;\n  overflow: auto;\n}\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: #f7f7f7;\n}\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal;\n}\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray;\n}\n.token.punctuation {\n  color: #999;\n}\n.namespace {\n  opacity: .7;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #bb0606;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #690;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #690;\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a;\n}\n.token.function {\n  color: #dd4a68;\n}\n.token.regex,\n.token.important,\n.token.variable {\n  color: #e90;\n}\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.code-boxes-col-1-1 {\n  width: 100%;\n}\n.code-boxes-col-2-1 {\n  display: inline-block;\n  vertical-align: top;\n}\n.code-box {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 5px;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n.code-box:target {\n  border: 1px solid #2d8cf0;\n  z-index: 10;\n}\n.code-box-expand-trigger {\n  cursor: pointer;\n  font-size: 14px;\n  color: #9199ac;\n  margin-left: 5px;\n  opacity: .8;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  top: -2px;\n  position: relative;\n}\n.code-box-expand-trigger-active {\n  color: #3b4357;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 8px;\n  margin-left: -8px;\n  color: #777;\n  border-radius: 4px;\n  border-top-left-radius: 0;\n  background: #fff;\n  -webkit-transition: background-color 0.4s;\n  transition: background-color 0.4s;\n}\n.code-box-title a,\n.code-box-title a:hover {\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-weight: 500;\n}\n.code-box a.edit-button {\n  position: absolute;\n  right: -16px;\n  top: 7px;\n  font-size: 12px;\n  -webkit-transform: scale(0.9);\n      -ms-transform: scale(0.9);\n          transform: scale(0.9);\n  background: #fff;\n  padding-right: 6px;\n}\n.code-box-demo {\n  border-bottom: 1px solid #ddd;\n  padding: 42px 20px 50px;\n}\n.code-box iframe {\n  width: 100%;\n  border: 0;\n}\n.code-box-meta.markdown {\n  position: relative;\n  padding: 17px 16px 15px 20px;\n  border-radius: 0 0 4px 4px;\n  -webkit-transition: background-color 0.4s;\n  transition: background-color 0.4s;\n  width: 100%;\n  font-size: 12px;\n  cursor: pointer;\n}\n.code-box-meta blockquote {\n  margin: 0;\n}\n.code-box-meta h4,\nsection.code-box-meta p {\n  margin: 4px 0;\n  width: 98%;\n}\n.code-box-meta > p {\n  font-size: 12px;\n  margin: 0.5em 0;\n  padding-right: 25px;\n  width: 100%;\n  word-break: break-word;\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #ddd;\n}\n.code-box .anticon-caret-circle-o-down:before,\n.code-box .anticon-circle-o-down:before {\n  content: '\\25BC';\n}\n.code-box .collapse {\n  position: absolute;\n  right: 14px;\n  bottom: 22px;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  line-height: 16px;\n  opacity: 0.5;\n  text-align: center;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  color: #999;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 100%;\n}\n.code-box.expand .collapse {\n  color: #2470c0;\n  -webkit-transform: rotate(-180deg);\n      -ms-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.code-box.expand .collapse:hover {\n  opacity: 1;\n}\n.code-box .highlight-wrapper {\n  display: none;\n  overflow: auto;\n  border-radius: 0 0 4px 4px;\n}\n.code-box .highlight-wrapper-expand {\n  display: block;\n}\n.code-box .highlight {\n  position: relative;\n}\n.code-box .highlight pre {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n.code-box .highlight:not(:first-child) {\n  border-top: 1px dashed #ddd;\n}\n.code-box-code-copy {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  margin: 0 !important;\n  font-size: 14px;\n  cursor: pointer;\n  color: #888;\n  -webkit-transition: all .24s;\n  transition: all .24s;\n  background: #fff;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 20px;\n  opacity: 0;\n}\n.code-box-code-copy:hover {\n  color: #2d8cf0;\n  -webkit-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.code-box-code-copy.anticon-check {\n  color: #00a854 !important;\n  font-weight: bold;\n}\n.highlight-wrapper:hover .code-box-code-copy {\n  opacity: 1;\n}\n.code-box pre {\n  margin: 0;\n  width: auto;\n}\n.code-box pre code {\n  display: block;\n  background: #fff;\n  color: #000;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 1.7;\n  border: 1px solid #e9e9e9;\n  padding: 10px 15px;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.code-box-demo .demo-header {\n  width: 100%;\n  background: #ebedee;\n  height: 30px;\n}\n.code-box-demo .demo-header ul {\n  float: right;\n  margin-right: 5px;\n}\n.code-box-demo .demo-header ul li {\n  width: 50px;\n  height: 30px;\n  float: left;\n  background: #e4e4e4;\n  margin-left: 5px;\n}\n.code-box-demo .demo-header ul li:before {\n  margin: 10px auto;\n  width: 20px;\n  height: 10px;\n  background: #ebeded;\n}\n.code-box-demo .demo-header .logo {\n  float: left;\n  margin: 0px auto 0 10px;\n  line-height: 32px;\n}\n.code-box-demo .demo-header .logo img {\n  margin: auto;\n}\n.code-box-demo .demo-header .logo span {\n  display: block;\n  float: right;\n}\n.code-box-demo .demo-content {\n  margin: 10px auto;\n}\n.code-box-demo .demo-content .demo-title {\n  text-align: left;\n  background: #a4a4a4;\n  width: 40%;\n  height: 20px;\n  line-height: 20px;\n  color: #ebeded;\n  text-indent: 10px;\n}\n.code-box-demo .demo-content .demo-listBox {\n  margin-top: 10px;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title {\n  height: 30px;\n  background: #cacaca;\n  overflow: hidden;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title:before,\n.code-box-demo .demo-content .demo-listBox .demo-list .title:after {\n  width: 30%;\n  height: 5px;\n  background: #ebeded;\n  float: left;\n  margin: 12px 35px 0;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title:after {\n  width: 15%;\n  float: right;\n  margin: 12px 10px 0;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li {\n  height: 25px;\n  background: #ebeded;\n  border-bottom: 1px solid #cacaca;\n  overflow: hidden;\n  padding: 5px 15px;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li:before {\n  width: 10px;\n  height: 5px;\n  background: #cacaca;\n  float: left;\n  margin-top: 4px;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li:after {\n  width: 50%;\n  height: 5px;\n  background: #cacaca;\n  float: left;\n  margin-left: 10px;\n  margin-top: 4px;\n}\n.code-box-demo .demo-content .demo-kp {\n  margin: 10px auto;\n}\n.code-box-demo .demo-content .demo-kp ul li {\n  display: inline-block;\n  width: 32%;\n  height: 40px;\n  background: #cacaca;\n  color: #ebeded;\n  text-align: left;\n  padding: 10px;\n  margin-right: calc(2%);\n}\n.code-box-demo .demo-content .demo-kp ul li:last-child {\n  margin-right: 0%;\n}\n.code-box-demo .demo-content .demo-kp ul li:after {\n  width: 60%;\n  height: 5px;\n  background: #ebeded;\n  float: left;\n  margin-top: 7px;\n}\n.code-box-demo .demo-content .demo-kp ul li:before {\n  background: #ebeded;\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin: 2px 10% 0 0;\n}\n.code-box-demo .demo-footer {\n  margin-top: 10px;\n  background: #cacaca;\n  height: 40px;\n  float: left;\n  width: 100%;\n  display: table;\n}\n.code-box-demo .demo-footer:before {\n  width: 60%;\n  height: 5px;\n  background: #ededed;\n  margin: 10px auto 0;\n}\n.code-box-demo .demo-footer:after {\n  width: 30%;\n  height: 5px;\n  background: #ededed;\n  margin: 5px auto;\n}\n.code-box-demo .demo-header ul li:before,\n.code-box-demo .demo-content .demo-kp ul li:before,\n.code-box-demo .demo-content .demo-kp ul li:after,\n.code-box-demo .demo-content .demo-listBox .demo-list .title:before,\n.code-box-demo .demo-content .demo-listBox .demo-list .title:after,\n.code-box-demo .demo-content .demo-listBox .demo-list ul li:before,\n.code-box-demo .demo-content .demo-listBox .demo-list ul li:after,\n.code-box-demo .demo-footer:before,\n.code-box-demo .demo-footer:after {\n  display: block;\n  content: \"\";\n}\n.code-box-demo .demo-header {\n  width: 100%;\n  background: #ebedee;\n  height: 30px;\n}\n.code-box-demo .demo-header ul {\n  float: right;\n  margin-right: 5px;\n}\n.code-box-demo .demo-header ul li {\n  width: 50px;\n  height: 30px;\n  float: left;\n  background: #e4e4e4;\n  margin-left: 5px;\n}\n.code-box-demo .demo-header ul li:before {\n  margin: 10px auto;\n  width: 20px;\n  height: 10px;\n  background: #ebeded;\n}\n.code-box-demo .demo-header .logo {\n  float: left;\n  margin: 0px auto 0 10px;\n  line-height: 32px;\n}\n.code-box-demo .demo-header .logo img {\n  margin: auto;\n}\n.code-box-demo .demo-header .logo span {\n  display: block;\n  float: right;\n}\n.code-box-demo .demo-content {\n  margin: 10px auto;\n}\n.code-box-demo .demo-content .demo-title {\n  text-align: left;\n  background: #a4a4a4;\n  width: 40%;\n  height: 20px;\n  line-height: 20px;\n  color: #ebeded;\n  text-indent: 10px;\n}\n.code-box-demo .demo-content .demo-listBox {\n  margin-top: 10px;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title {\n  height: 30px;\n  background: #cacaca;\n  overflow: hidden;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title:before,\n.code-box-demo .demo-content .demo-listBox .demo-list .title:after {\n  width: 30%;\n  height: 5px;\n  background: #ebeded;\n  float: left;\n  margin: 12px 35px 0;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title:after {\n  width: 15%;\n  float: right;\n  margin: 12px 10px 0;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li {\n  height: 25px;\n  background: #ebeded;\n  border-bottom: 1px solid #cacaca;\n  overflow: hidden;\n  padding: 5px 15px;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li:before {\n  width: 10px;\n  height: 5px;\n  background: #cacaca;\n  float: left;\n  margin-top: 4px;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li:after {\n  width: 50%;\n  height: 5px;\n  background: #cacaca;\n  float: left;\n  margin-left: 10px;\n  margin-top: 4px;\n}\n.code-box-demo .demo-content .demo-kp {\n  margin: 10px auto;\n}\n.code-box-demo .demo-content .demo-kp ul li {\n  display: inline-block;\n  width: 32%;\n  height: 40px;\n  background: #cacaca;\n  color: #ebeded;\n  text-align: left;\n  padding: 10px;\n  margin-right: calc(2%);\n}\n.code-box-demo .demo-content .demo-kp ul li:last-child {\n  margin-right: 0%;\n}\n.code-box-demo .demo-content .demo-kp ul li:after {\n  width: 60%;\n  height: 5px;\n  background: #ebeded;\n  float: left;\n  margin-top: 7px;\n}\n.code-box-demo .demo-content .demo-kp ul li:before {\n  background: #ebeded;\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin: 2px 10% 0 0;\n}\n.code-box-demo .demo-footer {\n  margin-top: 10px;\n  background: #cacaca;\n  height: 40px;\n  float: left;\n  width: 100%;\n  display: table;\n}\n.code-box-demo .demo-footer:before {\n  width: 60%;\n  height: 5px;\n  background: #ededed;\n  margin: 10px auto 0;\n}\n.code-box-demo .demo-footer:after {\n  width: 30%;\n  height: 5px;\n  background: #ededed;\n  margin: 5px auto;\n}\n.code-box-demo .demo-header ul li:before,\n.code-box-demo .demo-content .demo-kp ul li:before,\n.code-box-demo .demo-content .demo-kp ul li:after,\n.code-box-demo .demo-content .demo-listBox .demo-list .title:before,\n.code-box-demo .demo-content .demo-listBox .demo-list .title:after,\n.code-box-demo .demo-content .demo-listBox .demo-list ul li:before,\n.code-box-demo .demo-content .demo-listBox .demo-list ul li:after,\n.code-box-demo .demo-footer:before,\n.code-box-demo .demo-footer:after {\n  display: block;\n  content: \"\";\n}\n.color-palette {\n  margin: 45px 0;\n}\n.color-palette-pick {\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 8px;\n}\n.color-palette-picker {\n  margin: 12px 0 24px;\n}\n.color-palette-picker-value {\n  font-size: 13px;\n  font-family: Consolas;\n}\n.main-color {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.main-color-item {\n  cursor: pointer;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 80px;\n  border-radius: 4px;\n  float: left;\n  margin-right: 4px;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n  position: relative;\n  text-align: center;\n  padding-top: 28px;\n  font-family: Consolas;\n  font-size: 12px;\n}\n.main-color-item:last-child {\n  margin-right: 0;\n}\n.main-color-item:hover {\n  margin-top: -10px;\n  height: 90px;\n}\n.main-color-item .main-color-value {\n  font-size: 12px;\n  position: absolute;\n  bottom: -4px;\n  -webkit-transform: scale(0.85);\n      -ms-transform: scale(0.85);\n          transform: scale(0.85);\n  left: 0;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  -webkit-transition: all .2s ease .1s;\n  transition: all .2s ease .1s;\n}\n.color-title {\n  margin: 0 0 24px;\n  font-weight: 500;\n  color: #5c6b77;\n  font-size: 26px;\n  text-transform: capitalize;\n  text-align: center;\n}\n.color-description {\n  font-size: 12px;\n  font-weight: lighter;\n  color: #777;\n  display: block;\n}\n.main-color:hover .main-color-item {\n  padding-top: 4px;\n}\n.main-color:hover .main-color-value {\n  opacity: 0.7;\n  bottom: 3px;\n}\n.main-color .palatte-blue-1 {\n  background: #ecf6fd;\n}\n.main-color .palatte-blue-2 {\n  background: #d2eafb;\n}\n.main-color .palatte-blue-3 {\n  background: #add8f7;\n}\n.main-color .palatte-blue-4 {\n  background: #7ec2f3;\n}\n.main-color .palatte-blue-5 {\n  background: #49a9ee;\n}\n.main-color .palatte-blue-6 {\n  background: #108ee9;\n}\n.main-color .palatte-blue-7 {\n  background: #0e77ca;\n}\n.main-color .palatte-blue-8 {\n  background: #0c60aa;\n}\n.main-color .palatte-blue-9 {\n  background: #09488a;\n}\n.main-color .palatte-blue-10 {\n  background: #073069;\n}\n.main-color .palatte-purple-1 {\n  background: #f4f3fd;\n}\n.main-color .palatte-purple-2 {\n  background: #e4e2fa;\n}\n.main-color .palatte-purple-3 {\n  background: #cfcaf6;\n}\n.main-color .palatte-purple-4 {\n  background: #b3acf2;\n}\n.main-color .palatte-purple-5 {\n  background: #948aec;\n}\n.main-color .palatte-purple-6 {\n  background: #7265e6;\n}\n.main-color .palatte-purple-7 {\n  background: #6252cd;\n}\n.main-color .palatte-purple-8 {\n  background: #533eb4;\n}\n.main-color .palatte-purple-9 {\n  background: #42299a;\n}\n.main-color .palatte-purple-10 {\n  background: #321580;\n}\n.main-color .palatte-cyan-1 {\n  background: #ebf8f9;\n}\n.main-color .palatte-cyan-2 {\n  background: #cfedf0;\n}\n.main-color .palatte-cyan-3 {\n  background: #a7dfe3;\n}\n.main-color .palatte-cyan-4 {\n  background: #76cdd3;\n}\n.main-color .palatte-cyan-5 {\n  background: #3db8c1;\n}\n.main-color .palatte-cyan-6 {\n  background: #00a2ae;\n}\n.main-color .palatte-cyan-7 {\n  background: #008997;\n}\n.main-color .palatte-cyan-8 {\n  background: #00707f;\n}\n.main-color .palatte-cyan-9 {\n  background: #005667;\n}\n.main-color .palatte-cyan-10 {\n  background: #003c4e;\n}\n.main-color .palatte-green-1 {\n  background: #ebf8f2;\n}\n.main-color .palatte-green-2 {\n  background: #cfefdf;\n}\n.main-color .palatte-green-3 {\n  background: #a7e1c4;\n}\n.main-color .palatte-green-4 {\n  background: #76d0a3;\n}\n.main-color .palatte-green-5 {\n  background: #3dbd7d;\n}\n.main-color .palatte-green-6 {\n  background: #00a854;\n}\n.main-color .palatte-green-7 {\n  background: #00924c;\n}\n.main-color .palatte-green-8 {\n  background: #007b43;\n}\n.main-color .palatte-green-9 {\n  background: #00643b;\n}\n.main-color .palatte-green-10 {\n  background: #004c32;\n}\n.main-color .palatte-pink-1 {\n  background: #feeff5;\n}\n.main-color .palatte-pink-2 {\n  background: #fdd8e7;\n}\n.main-color .palatte-pink-3 {\n  background: #fcb8d3;\n}\n.main-color .palatte-pink-4 {\n  background: #fa90ba;\n}\n.main-color .palatte-pink-5 {\n  background: #f7629e;\n}\n.main-color .palatte-pink-6 {\n  background: #f5317f;\n}\n.main-color .palatte-pink-7 {\n  background: #dc277d;\n}\n.main-color .palatte-pink-8 {\n  background: #c11c7b;\n}\n.main-color .palatte-pink-9 {\n  background: #a71278;\n}\n.main-color .palatte-pink-10 {\n  background: #8c0776;\n}\n.main-color .palatte-red-1 {\n  background: #fef0ef;\n}\n.main-color .palatte-red-2 {\n  background: #fcdbd9;\n}\n.main-color .palatte-red-3 {\n  background: #fabeb9;\n}\n.main-color .palatte-red-4 {\n  background: #f79992;\n}\n.main-color .palatte-red-5 {\n  background: #f46e65;\n}\n.main-color .palatte-red-6 {\n  background: #f04134;\n}\n.main-color .palatte-red-7 {\n  background: #d73435;\n}\n.main-color .palatte-red-8 {\n  background: #bd2636;\n}\n.main-color .palatte-red-9 {\n  background: #a31837;\n}\n.main-color .palatte-red-10 {\n  background: #880a38;\n}\n.main-color .palatte-orange-1 {\n  background: #fef3eb;\n}\n.main-color .palatte-orange-2 {\n  background: #fde3cf;\n}\n.main-color .palatte-orange-3 {\n  background: #fccca7;\n}\n.main-color .palatte-orange-4 {\n  background: #faaf76;\n}\n.main-color .palatte-orange-5 {\n  background: #f78e3d;\n}\n.main-color .palatte-orange-6 {\n  background: #f56a00;\n}\n.main-color .palatte-orange-7 {\n  background: #d75000;\n}\n.main-color .palatte-orange-8 {\n  background: #b93600;\n}\n.main-color .palatte-orange-9 {\n  background: #991b00;\n}\n.main-color .palatte-orange-10 {\n  background: #7a0000;\n}\n.main-color .palatte-yellow-1 {\n  background: #fffaeb;\n}\n.main-color .palatte-yellow-2 {\n  background: #fff3cf;\n}\n.main-color .palatte-yellow-3 {\n  background: #ffe9a7;\n}\n.main-color .palatte-yellow-4 {\n  background: #ffdd76;\n}\n.main-color .palatte-yellow-5 {\n  background: #ffce3d;\n}\n.main-color .palatte-yellow-6 {\n  background: #ffbf00;\n}\n.main-color .palatte-yellow-7 {\n  background: #e09a00;\n}\n.main-color .palatte-yellow-8 {\n  background: #c17500;\n}\n.main-color .palatte-yellow-9 {\n  background: #a04f00;\n}\n.main-color .palatte-yellow-10 {\n  background: #802800;\n}\n.main-color .palatte-grey-1 {\n  background: #fbfbfb;\n}\n.main-color .palatte-grey-2 {\n  background: #f7f7f7;\n}\n.main-color .palatte-grey-3 {\n  background: #f5f5f5;\n}\n.main-color .palatte-grey-4 {\n  background: #e9e9e9;\n}\n.main-color .palatte-grey-5 {\n  background: #d9d9d9;\n}\n.main-color .palatte-grey-6 {\n  background: #bfbfbf;\n}\n.main-color .palatte-grey-7 {\n  background: #919191;\n}\n.main-color .palatte-grey-8 {\n  background: #5a5a5a;\n}\n.main-color .palatte-grey-9 {\n  background: #404040;\n}\n.main-color .palatte-grey-10 {\n  background: #222;\n}\nul.anticons-list {\n  margin: 40px 0;\n  list-style: none;\n  overflow: hidden;\n}\nul.anticons-list li {\n  float: left;\n  width: 16.66%;\n  text-align: center;\n  list-style: none;\n  cursor: pointer;\n  height: 100px;\n  color: #555;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  position: relative;\n  margin: 3px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  overflow: hidden;\n  padding: 10px 0 0;\n}\nul.anticons-list li .anticon {\n  font-size: 24px;\n  margin: 12px 0 16px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\nul.anticons-list li .anticon-class {\n  display: block;\n  text-align: center;\n  -webkit-transform: scale(0.83);\n      -ms-transform: scale(0.83);\n          transform: scale(0.83);\n  font-family: \"Lucida Console\", Consolas;\n  white-space: nowrap;\n}\nul.anticons-list li:hover {\n  background-color: #2d8cf0;\n  color: #fff;\n}\nul.anticons-list li:hover .anticon {\n  -webkit-transform: scale(1.4);\n      -ms-transform: scale(1.4);\n          transform: scale(1.4);\n}\nul.anticons-list li.copied:hover {\n  color: rgba(255, 255, 255, 0.2);\n}\nul.anticons-list li:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  content: \"Copied!\";\n  text-align: center;\n  line-height: 110px;\n  color: #fff;\n  -webkit-transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  opacity: 0;\n}\nul.anticons-list li.copied:after {\n  opacity: 1;\n  top: -10px;\n}\n/* Browser mockup code\n * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f\n * Live example: https://updown.io\n */\n.browser-mockup {\n  border-top: 2em solid rgba(230, 230, 230, 0.7);\n  -webkit-box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);\n          box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);\n  position: relative;\n  border-radius: 3px 3px 0 0;\n}\n.browser-mockup:before {\n  display: block;\n  position: absolute;\n  content: '';\n  top: -1.25em;\n  left: 1em;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  background-color: #f44;\n  -webkit-box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;\n          box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;\n}\n.browser-mockup.with-tab:after {\n  display: block;\n  position: absolute;\n  content: '';\n  top: -2em;\n  left: 5.5em;\n  width: 20%;\n  height: 0;\n  border-bottom: 2em solid white;\n  border-left: 0.8em solid transparent;\n  border-right: 0.8em solid transparent;\n}\n.browser-mockup.with-url:after {\n  display: block;\n  position: absolute;\n  content: '';\n  top: -1.6em;\n  left: 5.5em;\n  width: calc(100% - 6em);\n  height: 1.2em;\n  border-radius: 2px;\n  background-color: white;\n}\n.browser-mockup > * {\n  display: block;\n}\n.motion-container {\n  height: 190px;\n  line-height: 190px;\n  text-align: center;\n  margin: 40px 0 20px;\n}\n.motion-example {\n  width: 180px;\n  height: 180px;\n  line-height: 180px;\n  font-size: 18px;\n  color: #fff;\n  text-align: center;\n  display: inline-block !important;\n  border-radius: 8px;\n  -webkit-animation-duration: 0.5s !important;\n          animation-duration: 0.5s !important;\n  font-weight: bold;\n  background: url(//cdncs.101.com/v0.1/static/fep/static/ndlogo.png) center / 180px;\n}\n.motion-select-wrapper {\n  text-align: center;\n  margin-bottom: 40px;\n}\n.motion-select {\n  text-align: left;\n  width: 180px;\n}\n.video-player {\n  position: relative;\n  max-width: 800px;\n}\n.video-player-right {\n  width: 616px;\n  float: right;\n}\n.nav-phone-icon {\n  display: none;\n  position: absolute;\n  right: 30px;\n  top: 32px;\n  z-index: 1;\n  width: 16px;\n  height: 22px;\n  cursor: pointer;\n}\n@media only screen and (min-width: 0) and (max-width: 1280px) {\n  .en-us #search-box {\n    display: none;\n  }\n}\n@media only screen and (min-width: 0) and (max-width: 1080px) {\n  .zh-cn #search-box {\n    display: none;\n  }\n}\n@media only screen and (min-width: 0) and (max-width: 992px) {\n  #search-box {\n    display: none;\n  }\n  .code-boxes-col-2-1,\n  .code-boxes-col-1-1 {\n    float: none;\n    width: 100%;\n  }\n  .preview-image-boxes {\n    margin: 0!important;\n    float: none;\n    width: 100%;\n  }\n  .preview-image-box {\n    padding-left: 0;\n    margin: 10px 0;\n  }\n  a#logo {\n    width: 150px;\n    margin-left: auto;\n    margin-right: auto;\n    float: none;\n    display: block;\n  }\n  .banner-entry {\n    position: relative;\n    top: 30px;\n    left: 0;\n    text-align: center;\n  }\n  .image-wrapper {\n    display: none;\n  }\n  .banner-wrapper {\n    background-position: 40%;\n  }\n  .content-wrapper .text-wrapper {\n    float: none;\n    text-align: center;\n    left: 0;\n    width: 100%;\n    padding: 0;\n  }\n  .content-wrapper .text-wrapper > p {\n    max-width: 100% !important;\n    padding: 0 40px;\n  }\n  .content-wrapper.page {\n    min-height: 300px;\n    height: 300px;\n  }\n  .banner-text-wrapper {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    text-align: center;\n  }\n  .banner-text-wrapper .start-button {\n    text-align: center;\n  }\n  .banner-text-wrapper .start-button > a {\n    margin: 0 4px;\n  }\n  .banner-text-wrapper .github-btn {\n    text-align: center;\n    float: none;\n    display: inline-block;\n  }\n  .banner-text-wrapper .line {\n    display: none;\n  }\n  button.lang {\n    display: block;\n    margin: 29px auto 16px;\n    color: rgba(0, 0, 0, 0.65);\n    border-color: rgba(0, 0, 0, 0.65);\n  }\n  div.version {\n    display: block;\n    margin: 29px auto 16px;\n  }\n  div.version > .ant-select-selection {\n    color: rgba(0, 0, 0, 0.65);\n  }\n  div.version > .ant-select-selection:not(:hover) {\n    border-color: rgba(0, 0, 0, 0.65);\n  }\n  .popover-menu {\n    width: 300px;\n  }\n  .popover-menu button.lang {\n    margin: 16px auto;\n    float: none;\n  }\n  .popover-menu div.version {\n    margin: 32px auto 16px;\n    float: none;\n  }\n  .popover-menu .ant-popover-inner {\n    overflow: hidden;\n  }\n  .popover-menu .ant-popover-inner-content {\n    padding: 0;\n  }\n  ul#nav,\n  ul#nav li {\n    width: 100%;\n    font-size: 14px;\n  }\n  ul#nav li {\n    line-height: 60px;\n    height: 60px;\n    padding: 0 !important;\n    border: 0;\n  }\n  ul#nav li a {\n    color: #333;\n  }\n  .toc {\n    display: none;\n  }\n  .nav-phone-icon {\n    display: block;\n  }\n  .nav-phone-icon:before {\n    content: \"\";\n    display: block;\n    border-radius: 2px;\n    width: 16px;\n    height: 2px;\n    background: #777;\n    -webkit-box-shadow: 0 6px 0 0 #777, 0 12px 0 0 #777;\n            box-shadow: 0 6px 0 0 #777, 0 12px 0 0 #777;\n    position: absolute;\n  }\n  .main {\n    height: calc(14%);\n  }\n  .aside-container {\n    float: none;\n    width: auto;\n    padding-bottom: 30px;\n    border-bottom: 1px solid #e9e9e9;\n    border-right: 0;\n    margin-bottom: 30px;\n  }\n  .main-container {\n    padding-left: 16px;\n    padding-right: 16px;\n    margin-right: 0;\n  }\n  .main-container > .markdown > * {\n    width: 100%!important;\n  }\n  .main-wrapper {\n    width: 100%;\n    border-radius: 0;\n    margin: 0;\n  }\n  footer {\n    text-align: center;\n  }\n  footer ul li {\n    float: none;\n    width: auto;\n  }\n  footer ul li > h2 .anticon {\n    display: none;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ 295:
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

var _utils = __webpack_require__(93);

var _Base2 = __webpack_require__(127);

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Changelog = function (_Base) {
  (0, _inherits3['default'])(Changelog, _Base);

  function Changelog() {
    (0, _classCallCheck3['default'])(this, Changelog);
    return (0, _possibleConstructorReturn3['default'])(this, (Changelog.__proto__ || Object.getPrototypeOf(Changelog)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Changelog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          utils = _props.utils,
          content = _props.content,
          description = _props.description;

      return _react2['default'].createElement(
        'div',
        { className: 'main-wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'main-container main-container-component' },
          _react2['default'].createElement(
            'article',
            { className: 'markdown' },
            !description ? null : utils.toReactComponent(['section', { className: 'markdown' }].concat((0, _utils.getChildren)(description))),
            utils.toReactComponent(['section', { className: 'markdown' }].concat((0, _utils.getChildren)(content)))
          )
        )
      );
    }
  }]);
  return Changelog;
}(_Base3['default']);

Changelog.collector = function (nextProps) {
  return nextProps.data.CHANGELOG();
};

exports['default'] = Changelog;
module.exports = exports['default'];

/***/ }),

/***/ 296:
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

var _utils = __webpack_require__(93);

var _Base2 = __webpack_require__(127);

var _Base3 = _interopRequireDefault(_Base2);

var _Demo = __webpack_require__(198);

var _Demo2 = _interopRequireDefault(_Demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Readme = function (_Base) {
  (0, _inherits3['default'])(Readme, _Base);

  function Readme() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, Readme);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = Readme.__proto__ || Object.getPrototypeOf(Readme)).call.apply(_ref, [this].concat(args))), _this), _this.getCompliedLang = function (node) {
      if (!node || !(0, _utils.isElement)(node)) {
        return false;
      }
      var lang = (0, _utils.getAttributes)(node) && (0, _utils.getAttributes)(node).lang;
      return (0, _utils.getTagName)(node) === 'pre' && (lang === 'css' || lang === 'jsx') && lang;
    }, _this.getSouceCode = function (element) {
      var div = document.createElement('div');
      div.innerHTML = element[1].highlighted;
      return div.textContent || div.innerText;
    }, _this.spiltByJsx = function (children) {
      return children.map(function (element, idx) {
        var lang = _this.getCompliedLang(element);
        if (lang) {
          return _react2['default'].createElement(
            _Demo2['default'],
            {
              key: 'demo' + idx,
              lang: lang,
              textNode: _this.props.utils.toReactComponent(element),
              sourceCode: _this.getSouceCode(element)
            },
            lang === 'jsx' ? _this.props.utils.toReactComponent(children[idx - 1]) : null
          );
        } else if (_this.getCompliedLang(children[idx + 1]) === 'jsx') {
          return null;
        } else {
          return _this.props.utils.toReactComponent(element);
        }
      });
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(Readme, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          utils = _props.utils,
          toc = _props.toc,
          content = _props.content,
          style = _props.style,
          description = _props.description;

      var styleList = style && (Array.isArray(style) ? style : [style]);
      return _react2['default'].createElement(
        'div',
        { className: 'main-wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'main-container main-container-component' },
          _react2['default'].createElement(
            'article',
            { className: 'markdown' },
            styleList ? styleList.map(function (style, no) {
              return _react2['default'].createElement('style', { key: no, dangerouslySetInnerHTML: { __html: style } });
            }) : null,
            !description ? null : utils.toReactComponent(['section', { className: 'markdown' }].concat((0, _utils.getChildren)(description))),
            !toc || toc.length <= 2 ? null : _react2['default'].createElement(
              'section',
              { className: 'toc' },
              utils.toReactComponent(toc)
            ),
            this.spiltByJsx((0, _utils.getChildren)(content))
          )
        )
      );
    }
  }]);
  return Readme;
}(_Base3['default']);

Readme.collector = function (nextProps) {
  return nextProps.data.README();
};

exports['default'] = Readme;
module.exports = exports['default'];

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(304);
__webpack_require__(324);
module.exports = __webpack_require__(326);


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

/* global __resourceQuery WorkerGlobalScope self */
/* eslint prefer-destructuring: off */

var url = __webpack_require__(305);
var stripAnsi = __webpack_require__(312);
var log = __webpack_require__(314).getLogger('webpack-dev-server');
var socket = __webpack_require__(315);
var overlay = __webpack_require__(317);

function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute('src');
  }
  // Fall back to getting all scripts in the document.
  var scriptElements = document.scripts || [];
  var currentScript = scriptElements[scriptElements.length - 1];
  if (currentScript) {
    return currentScript.getAttribute('src');
  }
  // Fail as there was no script to use.
  throw new Error('[WDS] Failed to get current script source.');
}

var urlParts = void 0;
var hotReload = true;
if (typeof window !== 'undefined') {
  var qs = window.location.search.toLowerCase();
  hotReload = qs.indexOf('hotreload=false') === -1;
}
if (true) {
  // If this bundle is inlined, use the resource query to get the correct url.
  urlParts = url.parse(__resourceQuery.substr(1));
} else {
  // Else, get the url from the <script> this file was called with.
  var scriptHost = getCurrentScriptSource();
  // eslint-disable-next-line no-useless-escape
  scriptHost = scriptHost.replace(/\/[^\/]+$/, '');
  urlParts = url.parse(scriptHost || '/', false, true);
}

if (!urlParts.port || urlParts.port === '0') {
  urlParts.port = self.location.port;
}

var _hot = false;
var initial = true;
var currentHash = '';
var useWarningOverlay = false;
var useErrorOverlay = false;
var useProgress = false;

var INFO = 'info';
var WARNING = 'warning';
var ERROR = 'error';
var NONE = 'none';

// Set the default log level
log.setDefaultLevel(INFO);

// Send messages to the outside, so plugins can consume it.
function sendMsg(type, data) {
  if (typeof self !== 'undefined' && (typeof WorkerGlobalScope === 'undefined' || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: 'webpack' + type,
      data: data
    }, '*');
  }
}

var onSocketMsg = {
  hot: function hot() {
    _hot = true;
    log.info('[WDS] Hot Module Replacement enabled.');
  },
  invalid: function invalid() {
    log.info('[WDS] App updated. Recompiling...');
    // fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
    if (useWarningOverlay || useErrorOverlay) overlay.clear();
    sendMsg('Invalid');
  },
  hash: function hash(_hash) {
    currentHash = _hash;
  },

  'still-ok': function stillOk() {
    log.info('[WDS] Nothing changed.');
    if (useWarningOverlay || useErrorOverlay) overlay.clear();
    sendMsg('StillOk');
  },
  'log-level': function logLevel(level) {
    var hotCtx = __webpack_require__(322);
    if (hotCtx.keys().indexOf('./log') !== -1) {
      hotCtx('./log').setLogLevel(level);
    }
    switch (level) {
      case INFO:
      case ERROR:
        log.setLevel(level);
        break;
      case WARNING:
        // loglevel's warning name is different from webpack's
        log.setLevel('warn');
        break;
      case NONE:
        log.disableAll();
        break;
      default:
        log.error('[WDS] Unknown clientLogLevel \'' + level + '\'');
    }
  },
  overlay: function overlay(value) {
    if (typeof document !== 'undefined') {
      if (typeof value === 'boolean') {
        useWarningOverlay = false;
        useErrorOverlay = value;
      } else if (value) {
        useWarningOverlay = value.warnings;
        useErrorOverlay = value.errors;
      }
    }
  },
  progress: function progress(_progress) {
    if (typeof document !== 'undefined') {
      useProgress = _progress;
    }
  },

  'progress-update': function progressUpdate(data) {
    if (useProgress) log.info('[WDS] ' + data.percent + '% - ' + data.msg + '.');
  },
  ok: function ok() {
    sendMsg('Ok');
    if (useWarningOverlay || useErrorOverlay) overlay.clear();
    if (initial) return initial = false; // eslint-disable-line no-return-assign
    reloadApp();
  },

  'content-changed': function contentChanged() {
    log.info('[WDS] Content base changed. Reloading...');
    self.location.reload();
  },
  warnings: function warnings(_warnings) {
    log.warn('[WDS] Warnings while compiling.');
    var strippedWarnings = _warnings.map(function (warning) {
      return stripAnsi(warning);
    });
    sendMsg('Warnings', strippedWarnings);
    for (var i = 0; i < strippedWarnings.length; i++) {
      log.warn(strippedWarnings[i]);
    }
    if (useWarningOverlay) overlay.showMessage(_warnings);

    if (initial) return initial = false; // eslint-disable-line no-return-assign
    reloadApp();
  },
  errors: function errors(_errors) {
    log.error('[WDS] Errors while compiling. Reload prevented.');
    var strippedErrors = _errors.map(function (error) {
      return stripAnsi(error);
    });
    sendMsg('Errors', strippedErrors);
    for (var i = 0; i < strippedErrors.length; i++) {
      log.error(strippedErrors[i]);
    }
    if (useErrorOverlay) overlay.showMessage(_errors);
    initial = false;
  },
  error: function error(_error) {
    log.error(_error);
  },
  close: function close() {
    log.error('[WDS] Disconnected!');
    sendMsg('Close');
  }
};

var hostname = urlParts.hostname;
var protocol = urlParts.protocol;

// check ipv4 and ipv6 `all hostname`
if (hostname === '0.0.0.0' || hostname === '::') {
  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384
  // eslint-disable-next-line no-bitwise
  if (self.location.hostname && !!~self.location.protocol.indexOf('http')) {
    hostname = self.location.hostname;
  }
}

// `hostname` can be empty when the script path is relative. In that case, specifying
// a protocol would result in an invalid URL.
// When https is used in the app, secure websockets are always necessary
// because the browser doesn't accept non-secure websockets.
if (hostname && (self.location.protocol === 'https:' || urlParts.hostname === '0.0.0.0')) {
  protocol = self.location.protocol;
}

var socketUrl = url.format({
  protocol: protocol,
  auth: urlParts.auth,
  hostname: hostname,
  port: urlParts.port,
  pathname: urlParts.path == null || urlParts.path === '/' ? '/sockjs-node' : urlParts.path
});

socket(socketUrl, onSocketMsg);

var isUnloading = false;
self.addEventListener('beforeunload', function () {
  isUnloading = true;
});

function reloadApp() {
  if (isUnloading || !hotReload) {
    return;
  }
  if (_hot) {
    log.info('[WDS] App hot update...');
    // eslint-disable-next-line global-require
    var hotEmitter = __webpack_require__(207);
    hotEmitter.emit('webpackHotUpdate', currentHash);
    if (typeof self !== 'undefined' && self.window) {
      // broadcast update to window
      self.postMessage('webpackHotUpdate' + currentHash, '*');
    }
  } else {
    var rootWindow = self;
    // use parent window for reload (in case we're in an iframe with no valid src)
    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== 'about:') {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;
        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }

  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    log.info('[WDS] App updated. Reloading...');
    rootWindow.location.reload();
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, "?http://localhost"))

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": 131
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 322;

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
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
		module.hot.accept(158, function() {
			var newContent = __webpack_require__(158);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./template/Content/Base": 127,
	"./template/Content/Base.jsx": 127,
	"./template/Content/Changelog": 295,
	"./template/Content/Changelog.jsx": 295,
	"./template/Content/Demo": 198,
	"./template/Content/Demo.jsx": 198,
	"./template/Content/Readme": 296,
	"./template/Content/Readme.jsx": 296,
	"./template/Layout": 128,
	"./template/Layout/": 128,
	"./template/Layout/Footer": 200,
	"./template/Layout/Footer.jsx": 200,
	"./template/Layout/Header": 199,
	"./template/Layout/Header.jsx": 199,
	"./template/Layout/index": 128,
	"./template/Layout/index.jsx": 128,
	"./template/NotFound": 196,
	"./template/NotFound.jsx": 196,
	"./template/utils": 197,
	"./template/utils.jsx": 197
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 673;

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
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
		module.hot.accept(201, function() {
			var newContent = __webpack_require__(201);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

},[303]);
//# sourceMappingURL=index.js.map