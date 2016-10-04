'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAtomicMolecule = require('react-atomic-molecule');

var _reactAtomicOrganism = require('react-atomic-organism');

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormPreview = function (_Component) {
    _inherits(FormPreview, _Component);

    function FormPreview(props) {
        _classCallCheck(this, FormPreview);

        var _this = _possibleConstructorReturn(this, (FormPreview.__proto__ || Object.getPrototypeOf(FormPreview)).call(this, props));

        _this.state = {
            preview: ''
        };
        return _this;
    }

    _createClass(FormPreview, [{
        key: 'reset',
        value: function reset() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var preview = null;
            if (this.state.preview) {
                preview = _jsx(_reactAtomicOrganism.FormattedJson, {
                    atom: 'div',
                    indent: 2,
                    label: this.props.label
                }, void 0, this.state.preview);
            }
            return _react2.default.createElement(
                _form2.default,
                _extends({ callback: function (json) {
                        if (json) {
                            _this2.setState({ preview: json });
                        }
                        if (json.errors) {
                            _this2.setState({
                                message: json.errors[0].message,
                                error: 'error'
                            });
                        } else {
                            _this2.reset();
                        }
                    }.bind(this) }, this.props, { children: null }),
                _react2.default.createElement(
                    _reactAtomicMolecule.Button,
                    _extends({ type: 'submit' }, this.props),
                    this.props.buttonText
                ),
                preview
            );
        }
    }]);

    return FormPreview;
}(_react.Component);

exports.default = FormPreview;

FormPreview.defaultProps = { label: 'Preview' };
module.exports = exports['default'];