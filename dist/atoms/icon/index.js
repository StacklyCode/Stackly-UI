"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard3(require("react"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _dynamic = _interopRequireDefault(require("next/dynamic"));

var __jsx = _react["default"].createElement;

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50px;\n  height: 50px;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", "\n  svg {\n    width: 100%;\n    height: 100%;\n    path {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var IconStyled = _styled["default"].div(_templateObject(), function (_ref) {
  var size = _ref.size;
  return size && {
    width: size,
    height: size
  };
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return color === "white" ? theme.colors.secondary.base : theme.colors.primary.base;
});

var IconStyledTest = _styled["default"].span(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return {
    fontSize: theme.texts.Button.FontSize,
    fontFamily: theme.texts.Button.FontFamily,
    fontWeight: "bold"
  };
});

var AtomIcon = function AtomIcon(_ref4) {
  var icon = _ref4.icon,
      size = _ref4.size,
      color = _ref4.color;

  var _useState = (0, _react.useState)(false),
      iconLoad = _useState[0],
      setIconLoad = _useState[1];

  var DynamicIcon = (0, _dynamic["default"])(function () {
    return Promise.resolve("@Assets/icons/".concat(icon, ".svg")).then(function (s) {
      return (0, _interopRequireWildcard2["default"])(require(s));
    })["catch"](function () {
      setIconLoad(true);
    });
  }, {
    loadableGenerated: {
      webpack: function webpack() {
        return [require.resolveWeak("@Assets/icons/".concat(icon, ".svg"))];
      },
      modules: ["@Assets/icons/".concat(icon, ".svg")]
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !iconLoad ? /*#__PURE__*/_react["default"].createElement(IconStyled, {
    size: size,
    color: color
  }, /*#__PURE__*/_react["default"].createElement(DynamicIcon, null)) : /*#__PURE__*/_react["default"].createElement(IconStyledTest, null, " Please Write Correct Icon "));
};

var _default = AtomIcon;
exports["default"] = _default;