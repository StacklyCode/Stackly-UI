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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  ", " {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var tag = "h1";
var mobileSize = "TitleMedium";

var getColor = function getColor(theme, color) {
  switch (color) {
    case "black":
      return theme.colors.primary.dark;

    case "gray":
      return theme.colors.gray[300];

    case "light":
      return theme.colors.primary.light;

    case "accent":
      return theme.colors.accent.primary.base;

    default:
      return theme.colors.primary.base;
  }
};

var setValues = function setValues(size) {
  switch (size) {
    case "SubTitleSmall":
      tag = "h6";
      mobileSize = "SubTitleSmall";
      break;

    case "SubTitleMedium":
      tag = "h5";
      mobileSize = "SubTitleSmall";
      break;

    case "SubTitleLarge":
      tag = "h4";
      mobileSize = "SubTitleMedium";
      break;

    case "TitleSmall":
      tag = "h3";
      mobileSize = "TitleSmall";
      break;

    case "TitleMedium":
      tag = "h2";
      mobileSize = "TitleSmall";
      break;

    default:
      tag = "h1";
      mobileSize = "TitleMedium";
      break;
  }
};

var Title = _styled["default"].h1(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      bold = _ref.bold;
  return {
    fontFamily: theme.texts.TitleLarge.FontFamily,
    fontWeight: bold ? 700 : 500,
    textAlign: "center",
    fontSize: theme.texts[mobileSize].FontSize,
    lineHeight: theme.texts[mobileSize].LineHeight,
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
    fontSize: theme.texts[size || "TitleLarge"].FontSize,
    lineHeight: theme.texts[size || "TitleLarge"].LineHeight
  };
});

var AtomTitle = function AtomTitle(_ref4) {
  var children = _ref4.children,
      size = _ref4.size,
      color = _ref4.color,
      align = _ref4.align,
      bold = _ref4.bold,
      as = _ref4.as;
  setValues(size);
  return __jsx(Title, {
    as: as || tag,
    size: size,
    color: color,
    align: align,
    bold: bold
  }, children || "Some Text");
};

var _default = AtomTitle;
exports["default"] = _default;