"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _icon = _interopRequireDefault(require("../icon"));

var _i18n = require("../../../i18n");

var _nextI18next = require("next-i18next");

var __jsx = _react["default"].createElement;

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 33px;\n  left: -1px;\n  border: solid 1px ", ";\n  display: flex;\n  flex-direction: column;\n  width: 70px;\n  height: max-content;\n  button {\n    padding: 8px 0px;\n    display: flex;\n    border: none;\n    align-items: center;\n    justify-content: center;\n    color: ", ";\n    background-color: ", ";\n    font-family: Inter;\n    font-style: normal;\n    font-weight: 500;\n    text-transform: uppercase;\n    font-size: 12px;\n    line-height: 15px;\n    :hover {\n      cursor: pointer;\n      background-color: #414e6a;\n      ", "\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding: 0px 10px;\n  align-items: center;\n  justify-content: space-evenly;\n  ", "\n  span {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    color: ", ";\n    font-family: Inter;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 15px;\n    text-transform: uppercase;\n  }\n  div {\n    svg {\n      margin-right: 5px;\n      height: 9px;\n      width: 9px;\n      path {\n        fill: ", ";\n        stroke: ", ";\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 70px;\n  height: 35px;\n  border-radius: 3px;\n  align-self: baseline;\n  cursor: pointer;\n  ", "\n  ", "\n  transition: all .5s ease;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ToggleListStyled = _styled["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme && {
    backgroundColor: theme.colors.primary.base,
    border: "solid 1px ".concat(theme.colors.primary.base)
  };
}, function (_ref2) {
  var theme = _ref2.theme,
      outline = _ref2.outline;
  return outline && {
    backgroundColor: "transparent",
    border: "solid 1px ".concat(theme.colors.primary.base)
  };
});

var ContainerTitleStyled = _styled["default"].div(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme,
      outline = _ref3.outline,
      toggle = _ref3.toggle;
  return outline && toggle && {
    backgroundColor: "transparent",
    borderBottom: "solid 2px ".concat(theme.colors.white)
  };
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary.base;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary.base;
});

var ContainerOptionsStyled = _styled["default"].div(_templateObject3(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primary.base;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.primary.base;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.secondary.base;
}, function (_ref10) {
  var theme = _ref10.theme,
      outline = _ref10.outline;
  return outline && {
    backgroundColor: theme.colors.secondary.base,
    color: theme.colors.primary.base
  };
});

var AtomToggleList = function AtomToggleList(_ref11) {
  var outline = _ref11.outline,
      object = _ref11.object;

  var _useState = (0, _react.useState)(false),
      toggle = _useState[0],
      settoggle = _useState[1];

  var _useState2 = (0, _react.useState)(""),
      option = _useState2[0],
      setoption = _useState2[1];

  var _useContext = (0, _react.useContext)(_nextI18next.I18nContext),
      language = _useContext.i18n.language;

  function clickOption(e) {
    var eGet = e.target;
    var optionGet = eGet.innerText.toLowerCase();
    localStorage.setItem("language", optionGet);

    _i18n.i18n.changeLanguage(optionGet);

    setoption(optionGet);
    /*  Function to Do */
  }

  (0, _react.useEffect)(function () {
    setoption(language);
  });
  return __jsx(ToggleListStyled, {
    outline: outline,
    onClick: function onClick() {
      return settoggle(!toggle);
    }
  }, __jsx(ContainerTitleStyled, {
    outline: outline,
    toggle: toggle
  }, __jsx("span", null, option || (object === null || object === void 0 ? void 0 : object.options[0])), __jsx(_icon["default"], {
    icon: "arrow"
  })), toggle && __jsx(ContainerOptionsStyled, {
    outline: outline
  }, object === null || object === void 0 ? void 0 : object.options.map(function (e) {
    return __jsx("button", {
      type: "button",
      onClick: clickOption,
      key: e
    }, e);
  })));
};

var _default = AtomToggleList;
exports["default"] = _default;