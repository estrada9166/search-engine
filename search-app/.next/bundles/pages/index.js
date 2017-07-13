
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(579);


/***/ }),

/***/ 579:
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

var _Header = __webpack_require__(580);

var _Header2 = _interopRequireDefault(_Header);

var _store = __webpack_require__(616);

var _nextReduxWrapper = __webpack_require__(618);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

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
          lineNumber: 13
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }));
    }
  }], [{
    key: 'getInitProps',
    value: function getInitProps(_ref) {
      var store = _ref.store;

      store.dispatch((0, _store.inputChange)());
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

/***/ 580:
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

var _reactBootstrap = __webpack_require__(581);

var _reactRedux = __webpack_require__(577);

var _Search = __webpack_require__(619);

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
      }, 'Download free pic'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
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

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.inputChange = exports.reducer = undefined;

var _assign = __webpack_require__(113);

var _assign2 = _interopRequireDefault(_assign);

var _redux = __webpack_require__(561);

var _reduxThunk = __webpack_require__(617);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

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

  if (action.type === "SEARCH_WORD") {
    return (0, _assign2.default)({}, state, { text: action.text, display: action.display });
  }
  return state;
};

// ACTIONS
var inputChange = exports.inputChange = function inputChange(text) {
  return function (dispatch) {
    return dispatch({ type: 'SEARCH_WORD', text: text, display: false });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/store.js"); } } })();

/***/ }),

/***/ 619:
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

var _store = __webpack_require__(616);

var _reactBootstrap = __webpack_require__(581);

var _reactRedux = __webpack_require__(577);

var _redux = __webpack_require__(561);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Search.js';


var Download = function (_Component) {
  (0, _inherits3.default)(Download, _Component);

  function Download() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Download);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Download.__proto__ || (0, _getPrototypeOf2.default)(Download)).call.apply(_ref, [this].concat(args))), _this), _this.inputChange = function (e) {
      var text = e.target.value;
      _this.props.inputChange(text);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Download, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.props.state;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '30px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_reactBootstrap.InputGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_reactBootstrap.FormControl, { onChange: function onChange(e) {
          return _this2.inputChange(e);
        }, type: 'text', placeholder: 'Search engine', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement(_reactBootstrap.InputGroup.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-search', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), ' Search'))))))));
    }
  }]);

  return Download;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    inputChange: (0, _redux.bindActionCreators)(_store.inputChange, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Download);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Search.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/makeItReal/Elite/Data-base/search-engine/search-app/components/Search.js"); } } })();

/***/ })

},[578]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzcwYmZlZDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NzBiZmVkOCIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz83MGJmZWQ4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzPzcwYmZlZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IGluaXRTdG9yZSwgaW5wdXRDaGFuZ2UgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxuICBzdGF0aWMgZ2V0SW5pdFByb3BzICh7IHN0b3JlIH0pIHtcbiAgICBzdG9yZS5kaXNwYXRjaChpbnB1dENoYW5nZSgpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbnVsbCkoSW5kZXgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IENvbCwgUm93LCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Eb3dubG9hZCBmcmVlIHBpYzwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC9sYXRlc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XG4gICAgICAgICAgICA8Q29sIGxnPXs4fSBsZ09mZnNldD17Mn0+XG4gICAgICAgICAgICAgIDxKdW1ib3Ryb24gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnMTVweCcgfX0+XG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+WnV0aTwvaDE+ICBcbiAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdGVcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRleHQ6ICcnLFxuICBsaW5rczogW10sXG4gIGxlbmd0aDogMCxcbiAgZGlzcGxheTogZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcbiAgaWYoYWN0aW9uLnR5cGUgPT09IFwiU0VBUkNIX1dPUkRcIikge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB0ZXh0OiBhY3Rpb24udGV4dCwgZGlzcGxheTogYWN0aW9uLmRpc3BsYXkgfSlcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cblxuLy8gQUNUSU9OU1xuZXhwb3J0IGNvbnN0IGlucHV0Q2hhbmdlID0gdGV4dCA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCAoeyB0eXBlOiAnU0VBUkNIX1dPUkQnLCB0ZXh0LCBkaXNwbGF5OiBmYWxzZSB9KVxufVxuXG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGlucHV0Q2hhbmdlIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBDb2wsIFJvdywgRm9ybUNvbnRyb2wsIEJ1dHRvbiwgSW5wdXRHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcblxuY2xhc3MgRG93bmxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBpbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5wcm9wcy5pbnB1dENoYW5nZSh0ZXh0KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogJzMwcHgnIH19PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezh9IGxnT2Zmc2V0PXsyfT5cbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBvbkNoYW5nZT17KGUpID0+IHRoaXMuaW5wdXRDaGFuZ2UoZSl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZW5naW5lXCIvPlxuICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCI+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+IFNlYXJjaDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGlucHV0Q2hhbmdlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoaW5wdXRDaGFuZ2UsIGRpc3BhdGNoKSxcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERvd25sb2FkKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7OztBQVBBO0FBQUE7QUFDQTtBQUFBOzs7OztBQUZBO0FBQ0E7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBT0E7QUFQQTtBQUFBOzs7OztBQWRBO0FBQ0E7QUF1QkE7O0FBSUE7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFMQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTs7Ozs7QUE3QkE7QUFDQTtBQThCQTs7QUFJQTtBQUZBO0FBRkE7QUFDQTtBQUtBOztBQUVBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        