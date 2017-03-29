'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPaintSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPaintSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPaintSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1690.164 250.043c-93.116-93.39-243.911-93.39-337.026 0L657.634 946.93c88.348-5.892 178.524 23.646 246.056 91.24 67.453 67.675 96.929 158.12 90.97 246.654l695.504-697.046C1734.814 542.954 1760 482.285 1760 418.91a239.002 239.002 0 0 0-69.836-168.867zM377.613 1150.789c-221.109 221.574 30.27 335.346-217.613 583.83 0 0 410.2 52.309 631.229-169.265 114.328-114.49 114.328-300.076 0-414.565-114.17-114.41-299.447-114.41-413.616 0z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}