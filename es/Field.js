"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useFormContext = _interopRequireDefault(require("./use-form-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getDefaultValue = function getDefaultValue(type, value, defaultValue, defaultChecked) {
  switch (type) {
    case 'checkbox':
      return defaultChecked || false;

    case 'radio':
      return defaultChecked ? value : '';

    default:
      return defaultValue || '';
  }
};

var Field = function Field(_ref) {
  var name = _ref.name,
      type = _ref.type,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      defaultChecked = _ref.defaultChecked,
      children = _ref.children,
      component = _ref.component,
      otherProps = _objectWithoutProperties(_ref, ["name", "type", "value", "defaultValue", "defaultChecked", "children", "component"]);

  var context = (0, _useFormContext.default)();
  var inputValue = (0, _react.useMemo)(function () {
    var state = context.state;

    if (state[name] === undefined) {
      return getDefaultValue(type, value, defaultValue, defaultChecked);
    }

    return state[name];
  }, [context, name, type, value, defaultChecked, defaultValue]);
  var handleChange = (0, _react.useCallback)(function (event) {
    var updateField = context.updateField;
    var inputValue = type === 'checkbox' ? event.target.checked : event.target.value;
    updateField(name, inputValue);
  }, [context, name, type]);
  var props = (0, _react.useMemo)(function () {
    var commonProps = _objectSpread(_objectSpread({}, otherProps), {}, {
      name: name,
      type: type,
      onChange: handleChange
    });

    switch (type) {
      case 'checkbox':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          checked: inputValue
        });

      case 'radio':
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          value: value,
          checked: inputValue === value
        });

      default:
        return _objectSpread(_objectSpread({}, commonProps), {}, {
          value: inputValue
        });
    }
  }, [name, type, value, otherProps, inputValue, handleChange]);
  (0, _react.useEffect)(function () {
    var state = context.state;
    var inputValue = getDefaultValue(type, value, defaultValue, defaultChecked); // mutate the context state trick

    if (type !== 'radio' || type === 'radio' && state[name] === undefined || type === 'radio' && state[name] !== value && defaultChecked) {
      state[name] = inputValue;
    } // updateField(name, inputValue);

  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  if (typeof children === 'function') {
    return children(props);
  }

  switch (type) {
    case 'select':
      return /*#__PURE__*/(0, _react.createElement)(component || 'select', props, children);

    case 'textarea':
      return /*#__PURE__*/(0, _react.createElement)(component || 'textarea', props, null);

    default:
      return /*#__PURE__*/(0, _react.createElement)(component || 'input', props, null);
  }
};

Field.propTypes = {
  name: _propTypes.default.string.isRequired,
  type: _propTypes.default.string.isRequired,
  defaultValue: _propTypes.default.any,
  defaultChecked: _propTypes.default.bool,
  children: _propTypes.default.any
};
var _default = Field;
exports.default = _default;