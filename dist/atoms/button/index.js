"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _link = _interopRequireDefault(require("next/link"));

var __jsx = _react["default"].createElement;

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  /* StyleComponent Style with Theme*/\n  position: relative;\n  overflow: hidden;\n  max-width: 250px;\n  ", " {\n    max-width: max-content;\n  }\n  ", "\n\n  ", "\n    \n  ", "\n\n\n\n\n  transition: all 0.3s ease-out;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Button = _styled["default"].button(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.mediaquery.extrasmall;
}, function (_ref2) {
  var theme = _ref2.theme;
  return {
    fontSize: theme.texts.Button.FontSize,
    fontFamily: theme.texts.Button.FontFamily,
    fontWeight: "bold",
    lineHeight: theme.texts.Button.LineHeight,
    outline: "none",
    border: "1px solid ".concat(theme.colors.accent.primary.base),
    width: "max-content",
    color: theme.colors.white,
    backgroundColor: theme.colors.accent.primary.base,
    padding: "15px 20px",
    borderRadius: "2px",
    ":hover": {
      cursor: "pointer",
      backgroundColor: theme.colors.accent.primary.dark
    }
  };
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return color === "primary" && {
    border: "1px solid ".concat(theme.colors.accent.green.base),
    backgroundColor: theme.colors.accent.green.base,
    ":hover": {
      backgroundColor: theme.colors.accent.green.dark,
      border: "1px solid ".concat(theme.colors.accent.green.dark)
    }
  };
}, function (_ref4) {
  var theme = _ref4.theme,
      outline = _ref4.outline;
  return outline && {
    backgroundColor: "transparent",
    border: "1px solid ".concat(theme.colors.accent.primary.base),
    color: theme.colors.accent.primary.base,
    fontWeight: 500,
    ":hover": {
      backgroundColor: "transparent",
      border: "1px solid ".concat(theme.colors.accent.blue.base),
      color: theme.colors.accent.blue.base
    }
  };
});

var AtomButton = function AtomButton(_ref5) {
  var color = _ref5.color,
      children = _ref5.children,
      outline = _ref5.outline,
      link = _ref5.link,
      href = _ref5.href,
      type = _ref5.type;

  if (link) {
    return /*#__PURE__*/_react["default"].createElement(_link["default"], {
      href: link
    }, /*#__PURE__*/_react["default"].createElement(Button, {
      color: color,
      outline: outline
    }, children || "Some Text"));
  }

  if (href) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      target: "_blank",
      href: href
    }, /*#__PURE__*/_react["default"].createElement(Button, {
      color: color,
      outline: outline
    }, children || "Some Text"));
  }

  return /*#__PURE__*/_react["default"].createElement(Button, {
    type: type,
    color: color,
    outline: outline
  }, children || "Some Text");
};

var _default = AtomButton;
exports["default"] = _default;