'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconReplyAll2Line = function (_Component) {
  _inherits(IconReplyAll2Line, _Component);

  function IconReplyAll2Line() {
    _classCallCheck(this, IconReplyAll2Line);

    return _possibleConstructorReturn(this, (IconReplyAll2Line.__proto__ || Object.getPrototypeOf(IconReplyAll2Line)).apply(this, arguments));
  }

  _createClass(IconReplyAll2Line, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconReplyAll2Line',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M983.743 698.477c516.223 0 936.257 420.034 936.257 936.257v98.028h-114.92v-98.028c0-452.901-368.436-821.337-821.337-821.337H682.996l429.228 429.229-81.25 81.248-567.936-567.937L1030.975 188l81.249 81.249-429.228 429.228h300.747zM649.186 269.26L162.498 755.95l486.688 486.688-81.249 81.249L0 755.949 567.937 188.01l81.249 81.25z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconReplyAll2Line;
}(_react.Component);

exports.default = IconReplyAll2Line;