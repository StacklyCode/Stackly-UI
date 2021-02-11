"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _container = _interopRequireDefault(require("../../atoms/container"));

var _icon = _interopRequireDefault(require("../../atoms/icon"));

var _togglelist = _interopRequireDefault(require("../../atoms/togglelist"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _reactScroll = require("react-scroll");

var _link = _interopRequireDefault(require("next/link"));

var _router = require("next/router");

var __jsx = _react["default"].createElement;

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: max-content;\n  width: max-content;\n  align-items: center;\n  display: none;\n  ", " {\n    display: flex;\n  }\n  button {\n    max-height: 35px;\n    margin: 0 10px;\n    padding: 10px 25px;\n    font-size: 14px;\n    font-weight: 500;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 45px;\n  width: max-content;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: max-content;\n  width: max-content;\n  margin-right: 40px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: max-content;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  div {\n    margin-bottom: 50px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 100vh;\n  width: 300px;\n  background-color: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  ", " {\n    display: none;\n  }\n  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.05);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 30px;\n  width: 30px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    svg {\n      path {\n        stroke: ", ";\n      }\n    }\n  }\n  ", " {\n    display: none;\n  }\n  cursor: pointer;\n  z-index: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Inter;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  position: relative;\n  div {\n    position: absolute;\n    right: -15px;\n    top: -8px;\n    width: 35px;\n  }\n\n  margin-right: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 100%;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  ", " {\n    display: flex;\n  }\n  a {\n    text-decoration: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  div {\n    width: 35px;\n    height: 35px;\n    margin-right: 40px;\n    cursor: pointer;\n    svg {\n      g {\n        display: none;\n      }\n    }\n  }\n\n  ", " {\n    div {\n      svg {\n        g {\n          display: block;\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100vw;\n  height: 110px;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  z-index: ", ";\n  box-shadow: 0px 5px 10px ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Navigation = _styled["default"].header(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary.base;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.zindex.zFixed;
}, function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.colors.primary.base, "0D");
});

var NavigationLogo = _styled["default"].div(_templateObject2(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.mediaquery.medium;
});

var NavigationLinks = _styled["default"].div(_templateObject3(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.mediaquery.medium;
});

var NavigationLink = _styled["default"].div(_templateObject4(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary.base;
});

var IconSideBar = _styled["default"].div(_templateObject5(), function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primary.base;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.mediaquery.medium;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.zindex.zModal;
});

var SideBar = _styled["default"].div(_templateObject6(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.secondary.base;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.mediaquery.medium;
});

var ContainerSideBar = _styled["default"].div(_templateObject7());

var NavigationLinksSidebar = _styled["default"].div(_templateObject8());

var ToggleContainer = _styled["default"].div(_templateObject9());

var NavigationContainer = _styled["default"].div(_templateObject10());

var NavigationContainerButtons = _styled["default"].div(_templateObject11(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.mediaquery.medium;
});

var ToggleDarkModeContainer = _styled["default"].div(_templateObject12());

var OrganismNavigation = function OrganismNavigation(_ref13) {
  var t = _ref13.t;

  var _useState = (0, _react.useState)(false),
      sidebar = _useState[0],
      setSidebar = _useState[1];

  var router = (0, _router.useRouter)();
  return __jsx(Navigation, null, __jsx(_container["default"], {
    fullwidth: true,
    alignItems: "center",
    justifyContent: "space-between"
  }, __jsx(NavigationContainer, null, __jsx(NavigationLogo, null, router.pathname !== "/" ? __jsx("a", {
    href: "/"
  }, __jsx(_icon["default"], {
    icon: "stacklycodelogo"
  })) : __jsx(_reactScroll.Link, {
    to: "HeroScroll",
    smooth: true,
    offset: -110
  }, __jsx(_icon["default"], {
    icon: "stacklycodelogo"
  }))), __jsx(ToggleContainer, null, __jsx(_togglelist["default"], {
    outline: true,
    object: {
      title: "Lenguajes",
      options: ["en", "es"]
    }
  })), __jsx(NavigationLinks, null, router.pathname !== "/" ? __jsx(_react["default"].Fragment, null, __jsx(_link["default"], {
    href: "/#ServicesScroll"
  }, __jsx(NavigationLink, null, t && t("nav-tag-3"))), __jsx(_link["default"], {
    href: "/#ProjectsScroll"
  }, __jsx(NavigationLink, null, t && t("nav-tag-5"))), __jsx(_link["default"], {
    href: "/#ClientsScroll"
  }, __jsx(NavigationLink, null, t && t("nav-tag-4"))), __jsx(_link["default"], {
    href: "/#ContactScroll"
  }, __jsx(NavigationLink, null, t && t("nav-tag-6")))) : __jsx(_react["default"].Fragment, null, __jsx(_reactScroll.Link, {
    to: "ServicesScroll",
    smooth: true,
    offset: -140
  }, __jsx(NavigationLink, null, t && t("nav-tag-3"))), __jsx(_reactScroll.Link, {
    to: "ProjectsScroll",
    smooth: true,
    offset: -140
  }, __jsx(NavigationLink, null, t && t("nav-tag-5"))), __jsx(_reactScroll.Link, {
    to: "ClientsScroll",
    smooth: true,
    offset: -140
  }, __jsx(NavigationLink, null, t && t("nav-tag-4"))), __jsx(_reactScroll.Link, {
    to: "ContactScroll",
    smooth: true,
    offset: -140
  }, __jsx(NavigationLink, null, t && t("nav-tag-6")))), __jsx(_link["default"], {
    href: "/about"
  }, __jsx(NavigationLink, null, t && t("nav-tag-1"))), __jsx(_link["default"], {
    href: "/community"
  }, __jsx(NavigationLink, null, t && t("nav-tag-2"), " ", __jsx(_icon["default"], {
    color: "white",
    icon: "new"
  }))))), __jsx(IconSideBar, {
    onClick: function onClick() {
      return setSidebar(!sidebar);
    }
  }, __jsx(_icon["default"], {
    icon: "menu"
  })), __jsx(NavigationContainerButtons, null)), sidebar && __jsx(SideBar, null, __jsx(NavigationLinksSidebar, null, __jsx(ContainerSideBar, null), __jsx(_link["default"], {
    href: "/about"
  }, __jsx(NavigationLink, null, t && t("nav-tag-1"))), __jsx(_link["default"], {
    href: "/community"
  }, __jsx(NavigationLink, null, t && t("nav-tag-2"), " ", __jsx(_icon["default"], {
    color: "white",
    icon: "new"
  }))), router.pathname !== "/" ? __jsx(_link["default"], {
    href: "/#ServicesScroll"
  }, __jsx(NavigationLink, null, t && t("nav-tag-3"))) : __jsx(_reactScroll.Link, {
    to: "ServicesScroll",
    smooth: true,
    offset: -60
  }, __jsx(NavigationLink, null, t && t("nav-tag-3"))), router.pathname !== "/" ? __jsx(_link["default"], {
    href: "/#ClientsScroll"
  }, __jsx(NavigationLink, null, t && t("nav-tag-4"))) : __jsx(_reactScroll.Link, {
    to: "ClientsScroll",
    smooth: true,
    offset: -60
  }, __jsx(NavigationLink, null, t && t("nav-tag-4"))), router.pathname !== "/" ? __jsx(_link["default"], {
    href: "/#ProjectsScroll"
  }, __jsx(NavigationLink, null, t && t("nav-tag-5"))) : __jsx(_reactScroll.Link, {
    to: "ProjectsScroll",
    smooth: true,
    offset: -30
  }, __jsx(NavigationLink, null, t && t("nav-tag-5"))), router.pathname !== "/" ? __jsx(_link["default"], {
    href: "/#ContactScroll"
  }, __jsx(NavigationLink, null, t && t("nav-tag-6"))) : __jsx(_reactScroll.Link, {
    to: "ContactScroll",
    smooth: true,
    offset: -40
  }, __jsx(NavigationLink, null, t && t("nav-tag-6"))))));
};

var _default = OrganismNavigation;
exports["default"] = _default;