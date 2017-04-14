'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHighlighterSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHighlighterSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHighlighterSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M80 1642h480.009l81.441-81.448-240.004-240.025L80 1642zm1186.31-162.865c-144.883 0-283.846 57.526-386.327 160.017H1840v-160.017h-573.69zm-182.46-997.054l-677.052 677.03 396.007 396.12 677.052-677.19-396.007-395.96zm552.154 239.824c62.481-62.486 62.481-163.776 0-226.343l-169.763-169.697c-62.4-62.487-163.763-62.487-226.244 0l-71.281 71.367 396.007 395.96 71.281-71.287z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}