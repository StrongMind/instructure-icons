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

var IconUserLine = function (_Component) {
  _inherits(IconUserLine, _Component);

  function IconUserLine() {
    _classCallCheck(this, IconUserLine);

    return _possibleConstructorReturn(this, (IconUserLine.__proto__ || Object.getPrototypeOf(IconUserLine)).apply(this, arguments));
  }

  _createClass(IconUserLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconUserLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1694.176 1571.305c-133.27 94.984-388.969 235.709-734.117 235.709-152.923 0-448.377-31.06-734.118-235.709v-155.068c0-91.708 59.746-171.67 148.744-198.89 193.58-59.406 393.826-87.19 595.426-87.867 195.049.903 388.856 30.494 575.887 87.98 88.658 27.22 148.178 107.069 148.178 198.777v155.068zM952.153 112.896h15.812c184.32 0 341.308 129.882 378.691 307.313-31.962 18.522-65.054 31.51-122.315 31.51-73.637 0-107.068-21.12-149.534-47.774-48.339-30.494-103.002-65.167-208.49-65.167-106.277 0-161.28 34.786-209.844 65.393-28.348 17.845-52.744 33.205-87.868 41.45C595.372 257.8 757.216 112.896 952.153 112.896zm626.936 996.593c-106.277-32.64-214.814-56.019-324.48-71.605 128.866-90.579 213.685-239.774 213.685-408.847h-112.941c0 213.685-173.817 387.388-387.388 387.388h-15.812c-213.572 0-387.388-173.703-387.388-387.388v-67.99c70.136-9.713 113.167-36.82 152.019-61.44 42.465-26.767 76.009-47.887 149.534-47.887 72.734 0 106.051 21.007 148.178 47.66 48.565 30.608 103.568 65.28 209.845 65.28 106.278 0 161.506-35.011 214.363-68.555l29.929-18.974-4.066-35.35C1434.864 189.92 1221.292-.045 967.965-.045h-15.812c-275.915 0-500.33 224.527-500.33 508.235v120.847c0 169.412 85.045 318.72 214.137 409.299-109.553 15.247-218.09 38.4-324.48 71.04C204.821 1151.277 113 1274.722 113 1416.237v211.99l22.588 16.942c318.833 239.096 653.365 274.786 824.47 274.786 398.457 0 687.587-172.235 824.471-274.786l22.589-16.941v-211.99c0-141.63-91.709-264.848-228.029-306.75z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconUserLine;
}(_react.Component);

exports.default = IconUserLine;