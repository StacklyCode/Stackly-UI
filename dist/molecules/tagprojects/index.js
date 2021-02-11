"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _body = _interopRequireDefault(require("../../atoms/body"));

var _title = _interopRequireDefault(require("../../atoms/title"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _button = _interopRequireDefault(require("../../atoms/button"));

var __jsx = _react["default"].createElement;

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  overflow: hidden;\n  height: max-content;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-between;\n  p {\n    text-align: left;\n  }\n  a {\n    width: 100%;\n    margin-bottom: 0;\n    button {\n      margin-bottom: 0;\n      width: 100%;\n      max-width: 100%;\n    }\n  }\n  button {\n    margin: 20px 0;\n  }\n  transition: all 0.6s ease;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: max-content;\n  img {\n    margin-bottom: 5px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n  transition: all 0.6s ease;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 240px;\n  padding: 20px 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  border-radius: 10px;\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);\n  :hover {\n    background-color: ", ";\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    img {\n      filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.25));\n    }\n    div {\n      opacity: 1;\n    }\n  }\n  span {\n    width: 100%;\n    margin-top: 5px;\n    text-align: center;\n    ", " {\n      margin-top: 10px;\n      text-align: left;\n    }\n  }\n  p {\n    text-align: center;\n    ", " {\n      text-align: left;\n    }\n    margin-top: 5px;\n  }\n  transition: all 0.6s ease;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Tags = _styled["default"].article(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary.base;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.mediaquery.small;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.mediaquery.small;
});

var TagImage = _styled["default"].img(_templateObject2());

var TagImageDesc = _styled["default"].desc(_templateObject3());

var TagDescContainer = _styled["default"].div(_templateObject4());

var MoleculesTagProject = function MoleculesTagProject(_ref4) {
  var img = _ref4.img,
      type = _ref4.type,
      title = _ref4.title,
      link = _ref4.link,
      description = _ref4.description,
      t = _ref4.t;
  return /*#__PURE__*/_react["default"].createElement(Tags, null, /*#__PURE__*/_react["default"].createElement(TagImageDesc, null, /*#__PURE__*/_react["default"].createElement(TagImage, {
    src: img || "https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5f86270f93330c1ddd36c821_best-website-gallery.jpg"
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
  }, type || "Web | UI/UX")), /*#__PURE__*/_react["default"].createElement(TagDescContainer, null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    href: link
  }, "View Project")));
};

var _default = MoleculesTagProject;
exports["default"] = _default;