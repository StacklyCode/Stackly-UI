"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _body = _interopRequireDefault(require("../../atoms/body"));

var _icon = _interopRequireDefault(require("../../atoms/icon"));

var _title = _interopRequireDefault(require("../../atoms/title"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _react2 = require("@emotion/react");

var __jsx = _react["default"].createElement;

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  width: fit-content;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n\n    ", "\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: calc(100% - 13px);\n  min-width: 249px;\n  height: 100%;\n  background-color: ", ";\n  border-radius: 0px 4px 4px 0px;\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  img {\n    width: 65px;\n    height: 65px;\n    object-fit: cover;\n    border-radius: 50%;\n    margin-right: 20px;\n  }\n  div {\n    span {\n      text-align: left;\n    }\n    p {\n      text-align: left;\n      font-size: 14px;\n      line-height: 20px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      -webkit-line-clamp: 2;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 13px;\n  height: 100%;\n  background-color: ", ";\n  border-radius: 4px 0px 0px 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 310px;\n  min-height: 88px;\n  display: flex;\n  border-radius: 4px;\n  box-shadow: 0px 4px 20px rgba(105, 115, 124, 0.15);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Tags = _styled["default"].article(_templateObject());

var TagColor = _styled["default"].div(_templateObject2(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return (0, _react2.css)(_templateObject3(), theme.colors.accent[color || "blue"].base);
});

var TagContariner = _styled["default"].div(_templateObject4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
});

var InfoTag = _styled["default"].div(_templateObject5());

var SocialNetworkContainer = _styled["default"].div(_templateObject6(), function (_ref3) {
  var stars = _ref3.stars,
      theme = _ref3.theme;
  return !stars && {
    width: "18px",
    height: "18px",
    marginRight: "15px",
    svg: {
      width: "100%",
      height: "100%",
      path: {
        fill: theme.colors.gray[300]
      }
    }
  };
});

var StarContainer = _styled["default"].div(_templateObject7());

var MoleculesTags = function MoleculesTags(_ref4) {
  var color = _ref4.color,
      img = _ref4.img,
      title = _ref4.title,
      description = _ref4.description,
      socialnetwork = _ref4.socialnetwork,
      stars = _ref4.stars;
  return /*#__PURE__*/_react["default"].createElement(Tags, null, /*#__PURE__*/_react["default"].createElement(TagColor, {
    color: color
  }), /*#__PURE__*/_react["default"].createElement(TagContariner, null, img && /*#__PURE__*/_react["default"].createElement("img", {
    loading: "lazy",
    src: img,
    width: "100%",
    height: "100%",
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_title["default"], {
    as: "span",
    size: "SubTitleSmall",
    color: "black",
    bold: true
  }, title || "Some Title"), /*#__PURE__*/_react["default"].createElement(_body["default"], {
    size: "BodySmall",
    color: "light"
  }, description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), (socialnetwork || stars) && /*#__PURE__*/_react["default"].createElement(InfoTag, {
    socialnetwork: socialnetwork
  }, socialnetwork && /*#__PURE__*/_react["default"].createElement(SocialNetworkContainer, {
    stars: stars
  }, socialnetwork.map(function (social) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: social.name,
      href: social.url
    }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
      icon: social.name,
      color: "dark",
      size: "12px"
    }));
  })), stars && /*#__PURE__*/_react["default"].createElement(StarContainer, null, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: "star"
  }), /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: "star"
  }), /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: "star"
  }), /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: "star"
  }), /*#__PURE__*/_react["default"].createElement(_icon["default"], {
    icon: "star"
  }))))));
};

var _default = MoleculesTags;
exports["default"] = _default;