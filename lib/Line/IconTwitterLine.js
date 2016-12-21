'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconTwitterLine = function (_Component) {
  _inherits(IconTwitterLine, _Component);

  function IconTwitterLine() {
    _classCallCheck(this, IconTwitterLine);

    return _possibleConstructorReturn(this, (IconTwitterLine.__proto__ || Object.getPrototypeOf(IconTwitterLine)).apply(this, arguments));
  }

  _createClass(IconTwitterLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTwitterLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M844.987 1399.92c-1.94.45-122.043 24.932-266.18 5.397 54.81-23.807 108.384-58.97 154.059-110.267 21.783-24.481 27.433-59.363 14.447-89.466-12.958-30.076-42.19-49.92-74.935-50.932-43.595-1.264-83.986-16.78-116.113-42.61a157.688 157.688 0 0 0 7.87-3.374c32.605-15.037 52.084-49.104 48.542-84.885-3.541-35.725-29.344-65.322-64.254-73.67-53.714-12.874-97.983-46.322-125.557-90.62 4.469-.309 8.966-.758 13.463-1.433 32.662-4.722 59.589-28.108 68.836-59.813 9.248-31.706-.843-65.885-25.83-87.471-4.386-3.767-79.405-69.932-87.388-164.627 119.093 103.127 324.448 240.18 565.218 226.66 25.1-1.433 48.26-13.997 63.13-34.235a84.106 84.106 0 0 0 13.829-70.494c-4.272-17.09-6.437-34.572-6.437-52.561-.759-112.853 90.423-205.664 202.404-206.873h.028c54.191 0 105.432 23.751 144.445 61.36 54.501 52.56 63.833 142.927 65.379 165.554 1.714 25.044 34.32 615.165-594.956 764.36m886.067-997.486c-15.628-5.902-59.279 33.083-62.624 31.425 5.481-19.479 43.904-68.527 47.783-90.423 5.397-30.525-20.21-58.492-48.232-71.73-27.996-13.211-61.05-10.035-85.982 8.347-33.813 24.904-74.007 40.616-115.607 45.479C1400.48 270.806 1316.27 240 1229.248 240h-.085c-200.183 2.164-362.926 162.575-369.897 360.284-247.657-36.483-444.889-268.119-447.025-270.62-17.651-21.194-44.691-32.352-72.04-30.02-27.49 2.39-52.083 18.074-65.828 41.965-70.578 122.775-29.092 260.418 9.304 353.117 0 0-61.781-5.509-66.756 45.085-7.027 71.45 10.54 163.98 132.359 272.898 0 0-36.315 18.72-31.621 52.702 12.227 88.68 89.242 151.247 159.876 197.962-106.95 33.926-216.879 15.656-218.228 15.431-38.282-6.886-76.396 13.323-92.109 48.936-15.74 35.612-5.031 77.38 25.916 101.019 163.811 125.304 359.16 153.074 500.092 153.074 106.05 0 181.294-15.74 188.94-17.398 662.273-157.01 722.648-736.197 726.387-898.07 86.375-82.018 135.395-142.927 145.85-181.294 9.417-34.6 10.204-69.932-23.329-82.637', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTwitterLine;
}(_react.Component);

exports.default = IconTwitterLine;