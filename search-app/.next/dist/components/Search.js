'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _store = require('../store');

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _redux = require('redux');

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