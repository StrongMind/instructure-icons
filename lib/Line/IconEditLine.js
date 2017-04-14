'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEditLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEditLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEditLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1514.299 619.918l-214.24-214.24 214.24-214.238 214.24 214.239-214.24 214.24zm-856.883 856.877l-214.24-214.239 749.762-749.758 214.24 214.24-749.762 749.757zm-413.041 198.8l106.8-290.8 184 184-290.8 106.8zM1835.66 298.559L1621.42 84.4c-59.201-59.199-155.041-59.199-214.241 0L259.655 1231.837c-20.08 20.08-34.08 45.44-40.48 73.04l-177.2 482.318c-6.24 27.28 2.8 53.12 20.24 70.56 17.52 17.44 43.36 26.56 70.64 20.24l482.241-177.2c27.68-6.4 52.96-20.4 73.04-40.48L1835.66 512.799c59.12-59.12 59.12-155.039 0-214.239z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}