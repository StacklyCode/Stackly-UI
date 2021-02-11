"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var __jsx = _react["default"].createElement;

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  height: 50px;\n  color: white;\n  background-color: #c95555;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  max-width: 1440px;\n  height: 100%;\n  margin: 0px 40px;\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  ", " {\n    margin: 0px 60px;\n  }\n  ", " {\n    margin: 0px 80px;\n  }\n  ", " {\n    margin: 0px 100px;\n  }\n  ", " {\n    margin: 0px 100px;\n  }\n  ", " {\n    margin: 0px 100px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Container = _styled["default"].div(_templateObject(), function (_ref) {
  var fullwidth = _ref.fullwidth;
  return fullwidth && {
    width: "100%"
  };
}, function (_ref2) {
  var alignItems = _ref2.alignItems;
  return alignItems || "flex-start";
}, function (_ref3) {
  var justifyContent = _ref3.justifyContent;
  return justifyContent || "flex-start";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mediaquery.extrasmall;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.mediaquery.small;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.mediaquery.medium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.mediaquery.large;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.mediaquery.extralarge;
});

var ContainerText = _styled["default"].div(_templateObject2(), function (_ref9) {
  var theme = _ref9.theme;
  return {
    fontSize: theme.texts.Button.FontSize,
    fontFamily: theme.texts.Button.FontFamily,
    fontWeight: "bold"
  };
});

var AtomContainer = function AtomContainer(_ref10) {
  var children = _ref10.children,
      alignItems = _ref10.alignItems,
      justifyContent = _ref10.justifyContent,
      fullwidth = _ref10.fullwidth;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    alignItems: alignItems,
    justifyContent: justifyContent,
    fullwidth: fullwidth
  }, children || /*#__PURE__*/_react["default"].createElement(ContainerText, null, "This is a Container"));
};

var _default = AtomContainer;
exports["default"] = _default;