"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _body = _interopRequireDefault(require("../../atoms/body"));

var _icon = _interopRequireDefault(require("../../atoms/icon"));

var _title = _interopRequireDefault(require("../../atoms/title"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var __jsx = _react["default"].createElement;

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 180px;\n  height: 250px;\n  padding: 20px 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  ", " {\n    align-items: flex-start;\n    width: 240px;\n    height: 240px;\n    padding: 20px 30px;\n  }\n  border-radius: 10px;\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);\n  :hover {\n    background-color: ", ";\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    div {\n      background-color: ", ";\n      svg {\n        height: 60%;\n        width: 60%;\n        path {\n          fill: ", ";\n        }\n      }\n    }\n  }\n  div {\n    background-color: ", ";\n    border-radius: 10px;\n    width: 72px;\n    height: 72px;\n    transition: all 0.3s ease;\n    svg {\n      height: 60%;\n      width: 60%;\n      transition: all 0.3s ease;\n      path {\n        fill: ", ";\n      }\n    }\n  }\n  h2 {\n    line-height: 20px;\n  }\n  transition: all 0.3s ease;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Tags = _styled["default"].article(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.mediaquery.small;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary.light;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.accent.primary.base;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.secondary.base;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.secondary.dark;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary.base;
});

var MoleculesTagServices = function MoleculesTagServices(_ref7) {
  var icon = _ref7.icon,
      title = _ref7.title,
      description = _ref7.description;
  return /*#__PURE__*/_react["default"].createElement(Tags, null, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: icon
  }), /*#__PURE__*/_react["default"].createElement(_title["default"], {
    align: "left",
    as: "span",
    size: "SubTitleMedium",
    color: "black",
    bold: true
  }, title || "Some Title"), /*#__PURE__*/_react["default"].createElement(_body["default"], {
    align: "left",
    size: "BodySmall",
    color: "light"
  }, description || "Marketing strategies to bring a fresh and modern identity for your brand."));
};

var _default = MoleculesTagServices;
exports["default"] = _default;