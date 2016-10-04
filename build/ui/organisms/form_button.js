'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAtomicMolecule = require('react-atomic-molecule');

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormButton = function (_Component) {
    _inherits(FormButton, _Component);

    function FormButton() {
        _classCallCheck(this, FormButton);

        return _possibleConstructorReturn(this, (FormButton.__proto__ || Object.getPrototypeOf(FormButton)).apply(this, arguments));
    }

    _createClass(FormButton, [{
        key: 'render',
        value: function render() {
            var topDom = void 0;
            var bottomDom = void 0;
            var _props = this.props;
            var top = _props.top;
            var path = _props.path;
            var buttonText = _props.buttonText;

            var props = _objectWithoutProperties(_props, ['top', 'path', 'buttonText']);

            if (top) {
                topDom = this.props.children;
            } else {
                bottomDom = this.props.children;
            }
            return _react2.default.createElement(
                _form2.default,
                this.props,
                topDom,
                _react2.default.createElement(
                    _reactAtomicMolecule.Button,
                    _extends({ type: 'submit' }, props),
                    buttonText
                ),
                bottomDom
            );
        }
    }]);

    return FormButton;
}(_react.Component);

exports.default = FormButton;

FormButton.defaultProps = {
    buttonText: 'Submit'
};
module.exports = exports['default'];