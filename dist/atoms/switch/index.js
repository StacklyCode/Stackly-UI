"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _theme = _interopRequireDefault(require("../../../styles/theme"));

var _ThemeContext = _interopRequireDefault(require("../../../hooks/ThemeContext"));

var __jsx = _react["default"].createElement;

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n\n  border-radius: 34px;\n\n  :before {\n    position: absolute;\n    content: \"\";\n    height: 15px;\n    width: 15px;\n    left: 5px;\n    bottom: 5px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n\n  :checked {\n    background-color: #2196f3;\n  }\n\n  :focus {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  :checked + :before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 20px;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 25px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SwitchLabelStyled = _styled["default"].label(_templateObject());

var SwitchInputStyled = _styled["default"].input(_templateObject2());

var SwitchSpanStyled = _styled["default"].span(_templateObject3(), function (_ref) {
  var theme = _ref.theme,
      check = _ref.check;
  return check ? theme.colors.accent.primary.base : "#ccc";
});

var AtomSwitch = function AtomSwitch() {
  var _useState = (0, _react.useState)(false),
      checked = _useState[0],
      setChecked = _useState[1];

  var _useContext = (0, _react.useContext)(_ThemeContext["default"]),
      setTheme = _useContext.setTheme;

  return /*#__PURE__*/_react["default"].createElement(SwitchLabelStyled, {
    htmlFor: "SwitchTheme"
  }, /*#__PURE__*/_react["default"].createElement(SwitchInputStyled, {
    checked: checked,
    onChange: function onChange() {
      console.log(checked);
      setChecked(!checked);

      if (checked) {
        setTheme(_theme["default"].theme1);
        localStorage.setItem("theme", "theme1");
      } else {
        setTheme(_theme["default"].theme2);
        localStorage.setItem("theme", "theme2");
      }
    },
    type: "checkbox",
    name: "SwitchTheme",
    id: "SwitchTheme"
  }), /*#__PURE__*/_react["default"].createElement(SwitchSpanStyled, {
    check: checked
  }));
};

var _default = AtomSwitch;
exports["default"] = _default;