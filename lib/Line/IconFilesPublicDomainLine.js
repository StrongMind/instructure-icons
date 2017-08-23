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

var IconFilesPublicDomainLine = function (_Component) {
  _inherits(IconFilesPublicDomainLine, _Component);

  function IconFilesPublicDomainLine() {
    _classCallCheck(this, IconFilesPublicDomainLine);

    return _possibleConstructorReturn(this, (IconFilesPublicDomainLine.__proto__ || Object.getPrototypeOf(IconFilesPublicDomainLine)).apply(this, arguments));
  }

  _createClass(IconFilesPublicDomainLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconFilesPublicDomainLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960 0c529.355 0 960 430.645 960 960s-430.645 960-960 960S0 1489.355 0 960 430.645 0 960 0zm0 1807.059c467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059zM800.157 711C913.347 711 970 762.572 970 865.418c0 17.658-2.726 34.752-8.177 50.905-5.45 16.153-14.907 32.355-28.312 48.563-13.405 16.152-33.513 29.48-60.35 39.756-26.782 10.22-58.57 15.6-95.31 15.6H687.2V1167H571V711h229.157zm38.854 204.267C851.021 902.043 857 885.923 857 866.283c0-46.114-24.944-68.845-74.86-68.845h-95.753L686 797v138h99.1c23.94 0 41.9-6.51 53.911-19.733zm516.348-148.291C1397.101 804.182 1418 861.64 1418 938.978c0 77.421-20.899 134.908-62.64 172.059-41.854 37.206-99.563 55.963-173.155 55.963h-179.171l-.034-.279V711h179.205c73.564 0 131.301 18.77 173.154 55.976zm-81.904 268.662c18.35-24.115 27.545-56.367 27.545-96.706 0-40.34-9.155-72.619-27.505-96.762-18.35-24.057-48.338-36.087-90.043-36.087L1118 806l.185.027V1072h66.635c40.731 0 70.258-12.192 88.635-36.362z', stroke: '#979797', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconFilesPublicDomainLine;
}(_react.Component);

exports.default = IconFilesPublicDomainLine;