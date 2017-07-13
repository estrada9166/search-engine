webpackHotUpdate(5,{

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43YmJkY2UzZmMwZGJjZTU2NWQ3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2guanM/NTlmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgaW5wdXRDaGFuZ2UgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IENvbCwgUm93LCBGb3JtQ29udHJvbCwgQnV0dG9uLCBJbnB1dEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5jbGFzcyBEb3dubG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICB0aGlzLnByb3BzLmlucHV0Q2hhbmdlKHRleHQpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC9sYXRlc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMzBweCcgfX0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPENvbCBsZz17OH0gbGdPZmZzZXQ9ezJ9PlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5pbnB1dENoYW5nZShlKX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBlbmdpbmVcIi8+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIj48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj4gU2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoIHN0YXRlICkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW5wdXRDaGFuZ2U6IGJpbmRBY3Rpb25DcmVhdG9ycyhpbnB1dENoYW5nZSwgZGlzcGF0Y2gpLFxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRG93bmxvYWQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTs7Ozs7QUE3QkE7QUFDQTtBQThCQTs7QUFJQTtBQUZBO0FBRkE7QUFDQTtBQUtBOztBQUVBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==