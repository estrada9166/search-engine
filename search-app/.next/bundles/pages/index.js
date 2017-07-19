
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.search = exports.inputChange = exports.reducer = undefined;

var _assign = __webpack_require__(113);

var _assign2 = _interopRequireDefault(_assign);

var _redux = __webpack_require__(563);

var _reduxThunk = __webpack_require__(618);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(628);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  text: '',
  links: [],
  length: 0,
  display: false
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'SEARCH_WORD') {
    return (0, _assign2.default)({}, state, { text: action.text, display: action.display });
  } else if (action.type === 'RESULT') {
    return (0, _assign2.default)({}, state, { links: action.links });
  }
  return state;
};

// ACTIONS
var inputChange = exports.inputChange = function inputChange(text) {
  return function (dispatch) {
    return dispatch({ type: 'SEARCH_WORD', text: text, display: false });
  };
};

var search = exports.search = function search(text) {
  return function (dispatch) {
    return _axios2.default.get('http://localhost:8000/api/search/' + text + '/?from=0&to=10').then(function (response) {
      console.log(response.data);
      dispatch({ type: 'RESULT', links: response.data });
    });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/store.js"); } } })();

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(581);


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(582);

var _Header2 = _interopRequireDefault(_Header);

var _store = __webpack_require__(579);

var _nextReduxWrapper = __webpack_require__(619);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Results = __webpack_require__(620);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_Results2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }));
    }
  }], [{
    key: 'getInitProps',
    value: function getInitProps(_ref) {
      var store = _ref.store;

      store.dispatch((0, _store.inputChange)());
      store.dispatch((0, _store.search)());
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _reactBootstrap = __webpack_require__(558);

var _reactRedux = __webpack_require__(557);

var _Search = __webpack_require__(617);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Search Engine'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_reactBootstrap.Jumbotron, { style: { borderRadius: '15px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h1', { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Zuti'), _react2.default.createElement(_Search2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }))))));
    }
  }]);

  return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Header.js"); } } })();

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _store = __webpack_require__(579);

var _reactBootstrap = __webpack_require__(558);

var _reactRedux = __webpack_require__(557);

var _redux = __webpack_require__(563);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Search.js';


var Search = function (_Component) {
  (0, _inherits3.default)(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call.apply(_ref, [this].concat(args))), _this), _this.inputChange = function (e) {
      var text = e.target.value;
      _this.props.inputChange(text);
    }, _this.search = function (state) {
      var text = state.text;
      _this.props.search(text);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.props.state;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '30px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_reactBootstrap.InputGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_reactBootstrap.FormControl, { onChange: function onChange(e) {
          return _this2.inputChange(e);
        }, type: 'text', placeholder: 'Search engine', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_reactBootstrap.InputGroup.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', onClick: function onClick() {
          return _this2.search(state);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-search', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), ' Search'))))))));
    }
  }]);

  return Search;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_store.inputChange, dispatch),
    search: (0, _redux.bindActionCreators)(_store.search, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Search);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Search.js"); } } })();

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _reactBootstrap = __webpack_require__(558);

var _reactRedux = __webpack_require__(557);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Results.js';


var Results = function (_Component) {
  (0, _inherits3.default)(Results, _Component);

  function Results() {
    (0, _classCallCheck3.default)(this, Results);

    return (0, _possibleConstructorReturn3.default)(this, (Results.__proto__ || (0, _getPrototypeOf2.default)(Results)).apply(this, arguments));
  }

  (0, _createClass3.default)(Results, [{
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, state.links.map(function (link) {
        return _react2.default.createElement(_reactBootstrap.Panel, { key: link.id, header: link._source.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }, 'Panel content');
      })))));
    }
  }]);

  return Results;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Results);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Results.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Results.js"); } } })();

/***/ })

},[580]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlLmpzP2M3ZDZkOWQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/YzdkNmQ5ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz9jN2Q2ZDlkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzP2M3ZDZkOWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN1bHRzLmpzP2M3ZDZkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB0ZXh0OiAnJyxcbiAgbGlua3M6IFtdLFxuICBsZW5ndGg6IDAsXG4gIGRpc3BsYXk6IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NFQVJDSF9XT1JEJykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB0ZXh0OiBhY3Rpb24udGV4dCwgZGlzcGxheTogYWN0aW9uLmRpc3BsYXkgfSk7XG4gIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRVNVTFQnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGxpbmtzOiBhY3Rpb24ubGlua3MgfSk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cbi8vIEFDVElPTlNcbmV4cG9ydCBjb25zdCBpbnB1dENoYW5nZSA9IHRleHQgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggKHsgdHlwZTogJ1NFQVJDSF9XT1JEJywgdGV4dCwgZGlzcGxheTogZmFsc2UgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaCA9IHRleHQgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3NlYXJjaC8ke3RleHR9Lz9mcm9tPTAmdG89MTBgKVxuICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICBkaXNwYXRjaCAoeyB0eXBlOiAnUkVTVUxUJywgbGlua3M6IHJlc3BvbnNlLmRhdGEgfSlcbiAgfSlcbn1cblxuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBpbml0U3RvcmUsIGlucHV0Q2hhbmdlLCBzZWFyY2ggfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHRzJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICBzdGF0aWMgZ2V0SW5pdFByb3BzICh7IHN0b3JlIH0pIHtcbiAgICBzdG9yZS5kaXNwYXRjaChpbnB1dENoYW5nZSgpKVxuICAgIHN0b3JlLmRpc3BhdGNoKHNlYXJjaCgpKSAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8UmVzdWx0cyAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG51bGwpKEluZGV4KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDb2wsIFJvdywgSnVtYm90cm9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+U2VhcmNoIEVuZ2luZTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC9sYXRlc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBsZ09mZnNldD17Mn0+XG4gICAgICAgICAgICAgIDxKdW1ib3Ryb24gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+WnV0aTwvaDE+ICBcbiAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdGVcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgaW5wdXRDaGFuZ2UsIHNlYXJjaCB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgQ29sLCBSb3csIEZvcm1Db250cm9sLCBCdXR0b24sIElucHV0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGlucHV0Q2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMuaW5wdXRDaGFuZ2UodGV4dCk7XG4gIH1cblxuICBzZWFyY2ggPSBzdGF0ZSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IHN0YXRlLnRleHQ7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2godGV4dCk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC9sYXRlc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMzBweCcgfX0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPENvbCBsZz17OH0gbGdPZmZzZXQ9ezJ9PlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5pbnB1dENoYW5nZShlKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBlbmdpbmVcIi8+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlYXJjaChzdGF0ZSl9PjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPiBTZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdGVcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbnB1dENoYW5nZTogYmluZEFjdGlvbkNyZWF0b3JzKGlucHV0Q2hhbmdlLCBkaXNwYXRjaCksXG4gICAgc2VhcmNoOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2VhcmNoLCBkaXNwYXRjaClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlYXJjaCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ29sLCBSb3csIFBhbmVsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jbGFzcyBSZXN1bHRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC9sYXRlc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBsZ09mZnNldD17Mn0+XG4gICAgICAgICAgICB7c3RhdGUubGlua3MubWFwKGxpbmsgPT4gXG4gICAgICAgICAgICAgIDxQYW5lbCBrZXk9e2xpbmsuaWR9IGhlYWRlcj17bGluay5fc291cmNlLnVybH0+XG4gICAgICAgICAgICAgICAgUGFuZWwgY29udGVudFxuICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXRlXG4gIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSZXN1bHRzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Jlc3VsdHMuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBUEE7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBTkE7QUFTQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7Ozs7QUFUQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUhBO0FBQ0E7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBT0E7QUFQQTtBQUFBOzs7OztBQWRBO0FBQ0E7QUF1QkE7O0FBSUE7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBOzs7OztBQWxDQTtBQUNBO0FBbUNBOztBQUlBO0FBRkE7QUFGQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQURBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTs7Ozs7QUFyQkE7QUFDQTtBQXVCQTs7QUFJQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        