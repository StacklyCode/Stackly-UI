"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _navegation = _interopRequireDefault(require("../organisms/navegation"));

var _footer = _interopRequireDefault(require("../organisms/footer"));

var __jsx = _react["default"].createElement;

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: max-content;\n  width: 100%;\n  margin-top: 110px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Background = _styled["default"].main(_templateObject());

var TemplateMain = function TemplateMain(_ref) {
  var children = _ref.children,
      t = _ref.t;
  return /*#__PURE__*/_react["default"].createElement(Background, null, /*#__PURE__*/_react["default"].createElement(_navegation["default"], {
    t: t
  }), children, /*#__PURE__*/_react["default"].createElement(_footer["default"], {
    t: t
  }));
};

var _default = TemplateMain;
exports["default"] = _default;