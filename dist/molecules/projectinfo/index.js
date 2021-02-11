"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _body = _interopRequireDefault(require("../../atoms/body"));

var _button = _interopRequireDefault(require("../../atoms/button"));

var _image = _interopRequireDefault(require("../../atoms/image"));

var _title = _interopRequireDefault(require("../../atoms/title"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var __jsx = _react["default"].createElement;

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 20px;\n  ", " {\n    margin-top: 0px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 20px 20px;\n  ", " {\n    margin: 0px 20px;\n  }\n  p {\n    max-width: 280px;\n    font-weight: 500;\n    margin-top: 10px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    ", " {\n      text-align: left;\n    }\n  }\n  span {\n    text-align: center;\n    ", " {\n      text-align: left;\n    }\n  }\n  a {\n    margin-top: 20px;\n    width: max-content;\n    align-self: center;\n    ", " {\n      align-self: flex-start;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 30px 0px;\n  height: max-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  ", " {\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ProjectInfo = _styled["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.mediaquery.medium;
});

var ContainerInfo = _styled["default"].div(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.mediaquery.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.mediaquery.medium;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mediaquery.medium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.mediaquery.medium;
});

var ContainerInfoTitle = _styled["default"].div(_templateObject3(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.mediaquery.medium;
});

var MoleculeProjectInfo = function MoleculeProjectInfo(_ref7) {
  var urlImage = _ref7.urlImage,
      title = _ref7.title,
      type = _ref7.type,
      description = _ref7.description,
      link = _ref7.link;
  return __jsx(ProjectInfo, null, __jsx(_image["default"], {
    background: true,
    image: urlImage
  }), __jsx(ContainerInfo, null, __jsx(ContainerInfoTitle, null, __jsx(_title["default"], {
    as: "span",
    align: "left",
    bold: true,
    size: "SubTitleMedium"
  }, title), __jsx(_title["default"], {
    as: "span",
    color: "gray",
    align: "left",
    size: "SubTitleMedium"
  }, type)), __jsx(_body["default"], {
    color: "white",
    align: "left",
    size: "BodyMedium"
  }, description), __jsx(_button["default"], {
    outline: true,
    href: link
  }, "View project")));
};

var _default = MoleculeProjectInfo;
exports["default"] = _default;