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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  /* StyleComponent Style with Theme*/\n  width: 250px;\n  height: 130px;\n  border-radius: 4px;\n  ", "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    border-radius: 4px;\n    ", "\n    object-fit: cover;\n  }\n  transition: all 0.5s ease;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Image = _styled["default"].div(_templateObject(), function (_ref) {
  var background = _ref.background,
      theme = _ref.theme,
      getColor = _ref.getColor;
  return background && {
    width: "480px",
    height: "280px",
    backgroundColor: getColor || theme.colors.white
  };
}, function (_ref2) {
  var background = _ref2.background;
  return background && {
    width: "80%",
    height: "80%",
    filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.5))",
    borderRadius: "0px"
  };
});

var AtomImage = function AtomImage(_ref3) {
  var background = _ref3.background,
      image = _ref3.image;
  return __jsx(Image, {
    background: background,
    getColor: "#fff"
  }, __jsx("img", {
    src: image || "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png",
    width: "100%",
    height: "100%",
    alt: "",
    loading: "lazy"
  }));
};

var _default = AtomImage;
exports["default"] = _default;