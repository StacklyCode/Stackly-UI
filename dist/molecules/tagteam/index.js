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

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-bottom: 10px;\n  ", " {\n    margin-bottom: 0px;\n  }\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 150px;\n  height: 200px;\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  ", " {\n    align-items: flex-start;\n    width: 210px;\n    height: 220px;\n    padding: 20px 30px;\n  }\n  img {\n    border: 2px solid transparent;\n  }\n  border-radius: 10px;\n  background-color: ", ";\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);\n  :hover {\n    background-color: ", ";\n    span {\n      color: ", ";\n    }\n    p {\n      color: ", ";\n    }\n    svg {\n      path {\n        fill: ", ";\n      }\n    }\n    img {\n      border: 2px solid ", ";\n    }\n  }\n  img {\n    background-color: ", ";\n    border-radius: 10px;\n    width: 72px;\n    height: 72px;\n    transition: all 0.3s ease;\n    object-fit: cover;\n  }\n  h2 {\n    line-height: 20px;\n  }\n  transition: all 0.3s ease;\n"]);

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
  return theme.colors.secondary.base;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.accent.primary.base;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.secondary.base;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.secondary.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.secondary.base;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.secondary.base;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.secondary.dark;
});

var SocialNetworkContainer = _styled["default"].div(_templateObject2(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.mediaquery.small;
}, function (_ref10) {
  var theme = _ref10.theme;
  return true && {
    width: "20px",
    height: "20px",
    marginRight: "15px",
    svg: {
      width: "100%",
      height: "100%",
      path: {
        fill: theme.colors.primary.base
      }
    }
  };
});

var MoleculesTagTeam = function MoleculesTagTeam(_ref11) {
  var image = _ref11.image,
      name = _ref11.name,
      description = _ref11.description,
      social = _ref11.social;
  return /*#__PURE__*/_react["default"].createElement(Tags, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: image || "https://i.stack.imgur.com/l60Hf.png",
    alt: name
  }), /*#__PURE__*/_react["default"].createElement(_title["default"], {
    align: "left",
    as: "span",
    size: "SubTitleMedium",
    color: "black",
    bold: true
  }, name || "Some Name"), /*#__PURE__*/_react["default"].createElement(_body["default"], {
    align: "left",
    size: "BodySmall",
    color: "light"
  }, description || "CTO"), /*#__PURE__*/_react["default"].createElement(SocialNetworkContainer, null, social === null || social === void 0 ? void 0 : social.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      target: "_blank",
      key: "".concat(item.name, "key").concat(index),
      href: item.url
    }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
      icon: item.name,
      color: "dark",
      size: "12px"
    }));
  })));
};

var _default = MoleculesTagTeam;
exports["default"] = _default;