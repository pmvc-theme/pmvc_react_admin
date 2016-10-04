'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAtomicMolecule = require('react-atomic-molecule');

var _reactAtomicOrganism = require('react-atomic-organism');

var _pmvc_react_list = require('pmvc_react_list');

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
            preview: '',
            selected: 'list',
            width: ''
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
            var props = this.props;
            var list = null;
            if (this.state.preview) {
                preview = _jsx(_reactAtomicOrganism.FormattedJson, {
                    atom: 'div',
                    indent: 2,
                    label: this.props.label
                }, void 0, this.state.preview);
            }
            if (this.state.list) {
                list = _jsx(_pmvc_react_list.TableList, {
                    rows: this.state.list,
                    rowsLocator: this.props.rowsLocator,
                    tableWidth: this.state.width,
                    getColWidth: this.props.getColWidth,
                    getColStyle: this.props.getColStyle
                }, void 0, _jsx(_pmvc_react_list.Column, {
                    header: _jsx(_pmvc_react_list.Cell, {}, void 0, 'Col1'),
                    cell: function cell(_ref) {
                        var rowIndex = _ref.rowIndex;
                        var columnIndex = _ref.columnIndex;

                        var rows = _this2.props.rowsLocator(_this2.state.list);
                        return rows[rowIndex];
                    }
                }));
            }
            return _jsx('div', {}, void 0, _react2.default.createElement(
                _form2.default,
                _extends({
                    ref: function ref(dom) {
                        return _this2.form = dom;
                    },
                    callback: function (json) {
                        if (json) {
                            switch (_this2.state.selected) {
                                case "source":
                                    _this2.setState({ preview: json });
                                    break;
                                case "list":
                                    _this2.setState({ list: json });
                                    break;
                            }
                        }
                        if (json.errors) {
                            _this2.setState({
                                message: json.errors[0].message,
                                error: 'error'
                            });
                        } else {
                            _this2.reset();
                        }
                    }.bind(this)
                }, this.props),
                this.props.children
            ), _jsx(_reactAtomicOrganism.TabView, {
                selected: this.state.selected,
                onTabItemPress: function (name) {
                    var f = _reactDom2.default.findDOMNode(_this2.form);
                    var width = f.getBoundingClientRect().width - 30;
                    _this2.setState({ selected: name, width: width });
                    f.dispatchEvent(new Event("submit"));
                }.bind(this)
            }, void 0, _jsx('div', {
                name: 'list'
            }, void 0, list, _jsx(_reactAtomicMolecule.Item, {}, void 0, 'List')), _jsx('div', {
                name: 'source'
            }, void 0, preview, _jsx(_reactAtomicMolecule.Item, {}, void 0, 'Source'))));
        }
    }]);

    return FormPreview;
}(_react.Component);

exports.default = FormPreview;

FormPreview.defaultProps = { label: 'Preview' };
module.exports = exports['default'];