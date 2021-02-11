"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _container = _interopRequireDefault(require("../../atoms/container"));

var _icon = _interopRequireDefault(require("../../atoms/icon"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _link = _interopRequireDefault(require("next/link"));

var __jsx = _react["default"].createElement;

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Inter;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: max-content;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  a {\n    width: 25px;\n    margin-right: 30px;\n  }\n  a:nth-last-of-type(1) {\n    margin-right: 0px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-width: 190px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", " {\n    justify-content: flex-start;\n  }\n  svg {\n    height: 35px;\n    width: 35px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  min-height: 110px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  margin: 20px 0px;\n  ", " {\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0px 30px;\n  }\n  span {\n    display: none;\n    width: 358.47px;\n    ", " {\n      display: flex;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100vw;\n  min-height: 110px;\n  display: flex;\n  justify-content: center;\n  background-color: ", ";\n  box-shadow: 0px -5px 10px ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Footer = _styled["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary.base;
}, function (_ref2) {
  var theme = _ref2.theme;
  return "".concat(theme.colors.primary.base, "0D");
});

var FooterContainer = _styled["default"].div(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.mediaquery.small;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mediaquery.large;
});

var FooterContainerLogo = _styled["default"].div(_templateObject3(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.mediaquery.small;
});

var FooterSocialContainer = _styled["default"].div(_templateObject4());

var FooterCopyrighted = _styled["default"].span(_templateObject5(), function (_ref6) {
  var theme = _ref6.theme;
  return theme && theme.colors.primary.base;
});

var OrganismFooter = function OrganismFooter(_ref7) {
  var t = _ref7.t;
  return __jsx(Footer, null, __jsx(_container["default"], {
    fullwidth: true,
    alignItems: "center",
    justifyContent: "center"
  }, __jsx(FooterContainer, null, __jsx(FooterContainerLogo, null, __jsx(_icon["default"], {
    icon: "stacklycodelogo"
  })), __jsx(_link["default"], {
    href: "/copyrighted"
  }, __jsx(FooterCopyrighted, null, t && t("footer-desc"))), __jsx(FooterSocialContainer, null, __jsx("a", {
    target: "_blank",
    href: "https://www.facebook.com/StacklyCodeOfficial",
    title: "Facebook Page"
  }, __jsx(_icon["default"], {
    icon: "facebook"
  })), __jsx("a", {
    target: "_blank",
    href: "https://www.linkedin.com/company/68642625/admin/",
    title: "Linkedin Page"
  }, __jsx(_icon["default"], {
    icon: "linkedin"
  })), __jsx("a", {
    target: "_blank",
    href: "https://github.com/StacklyCode",
    title: "Github Page"
  }, __jsx(_icon["default"], {
    icon: "github"
  })), __jsx("a", {
    target: "_blank",
    href: "https://twitter.com/StacklyCode",
    title: "Twitter Page"
  }, __jsx(_icon["default"], {
    icon: "twitter"
  }))))));
};

var _default = OrganismFooter;
exports["default"] = _default;