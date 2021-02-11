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

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  ", " {\n    ", "\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var getColor = function getColor(theme, color) {
  switch (color) {
    case "black":
      return theme.colors.primary.base;

    case "gray":
      return theme.colors.gray[500];

    case "green":
      return theme.colors.accent.cyan.light;

    case "light":
      return theme.colors.primary.light;

    case "accent":
      return theme.colors.accent.primary.base;

    default:
      return theme.colors.primary.base;
  }
};

var getMobileSize = function getMobileSize(size) {
  switch (size) {
    case "BodyExtraSmall":
      return "BodyExtraSmall";

    case "BodySmall":
      return "BodyExtraSmall";

    case "BodyMedium":
      return "BodySmall";

    case "BodyLarge":
      return "BodyMedium";

    default:
      return "BodyLarge";
  }
};

var Body = _styled["default"].p(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      color = _ref.color,
      bold = _ref.bold;
  return {
    fontFamily: theme.texts.BodyExtraLarge.FontFamily,
    fontWeight: bold ? 700 : 400,
    fontsize: "normal",
    textAlign: "center",
    fontSize: theme.texts[getMobileSize(size)].FontSize,
    lineHeight: theme.texts[getMobileSize(size)].LineHeight,
    color: getColor(theme, color)
  };
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.mediaquery.small;
}, function (_ref3) {
  var theme = _ref3.theme,
      size = _ref3.size,
      align = _ref3.align;
  return {
    textAlign: align || "center",
    fontSize: theme.texts[size || "BodyExtraLarge"].FontSize,
    lineHeight: theme.texts[size || "BodyExtraLarge"].LineHeight
  };
}, function (_ref4) {
  var color = _ref4.color;
  return color === "green" && {
    cursor: "pointer"
  };
});

var AtomBody = function AtomBody(_ref5) {
  var children = _ref5.children,
      size = _ref5.size,
      color = _ref5.color,
      align = _ref5.align,
      bold = _ref5.bold;
  return /*#__PURE__*/_react["default"].createElement(Body, {
    size: size,
    color: color,
    align: align,
    bold: bold
  }, children || "Some Text");
};

var _default = AtomBody;
exports["default"] = _default;