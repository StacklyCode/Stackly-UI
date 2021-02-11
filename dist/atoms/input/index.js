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

var __jsx = _react["default"].createElement;

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 20px;\n  font-family: ", ";\n  max-width: 312px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 18px;\n  color: #ff295f;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: 15px;\n  width: 20px;\n  border-radius: 2px;\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20px;\n    height: 20px;\n    svg {\n      width: 18px;\n      height: 18px;\n      path {\n        ", "\n        ", "\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  left: -40px;\n  display: flex;\n  padding: 3px;\n  border-radius: 2px;\n  cursor: pointer;\n  svg {\n    width: 16px;\n    path {\n      fill: white;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: fit-content;\n  margin: ", ";\n  display: flex;\n  align-items: center;\n  label:first-of-type {\n    margin-right: 40px;\n  }\n  label {\n    margin-bottom: 5px;\n    font-family: Roboto;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: bold;\n    color: ", ";\n    input {\n      border: none;\n      min-width: ", ";\n      font-family: Roboto;\n      font-style: normal;\n      font-weight: bold;\n      margin-top: 10px;\n      font-size: 13px;\n      line-height: 20px;\n      padding-left: ", ";\n\n      :hover {\n        cursor: pointer;\n        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n      }\n      ::placeholder {\n      }\n\n      ", "\n      transition: all 0.3s ease;\n    }\n    textarea {\n      border: none;\n      width: 100%;\n      min-height: 200px;\n      font-family: Roboto;\n      font-style: normal;\n      font-weight: bold;\n      margin-top: 10px;\n      font-size: 13px;\n      line-height: 20px;\n      padding-left: ", ";\n\n      :hover {\n        cursor: pointer;\n        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n      }\n      ::placeholder {\n      }\n\n      ", "\n      transition: all 0.3s ease;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var InputStyled = _styled["default"].div(_templateObject(), function (_ref) {
  var margin = _ref.margin;
  return margin ? "".concat(margin[0], " ").concat(margin[1]) : "0px";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary.base;
}, function (_ref3) {
  var type = _ref3.type;
  return type === "checkbox" ? "15px" : "180px";
}, function (_ref4) {
  var icon = _ref4.icon;
  return icon ? "43px" : "15px";
}, function (_ref5) {
  var color = _ref5.color,
      theme = _ref5.theme;
  return color === "dark" && {
    backgroundColor: theme.colors.primary.dark,
    color: theme.colors.white,
    height: "40px",
    borderRadius: "2px",
    border: "solid 2px ".concat(theme.colors.primary.dark),
    "::placeholder": {
      color: theme.colors.white
    },
    ":hover": {
      backgroundColor: theme.colors.primary.base
    }
  } || color === "light" && {
    backgroundColor: theme.colors.secondary.light,
    height: "40px",
    borderRadius: "2px",
    border: "solid 2px ".concat(theme.colors.gray[100]),
    "::placeholder": {
      color: theme.colors.primary.base
    },
    ":hover": {
      backgroundColor: theme.colors.gray[100],
      "::placeholder": {
        color: theme.colors.primary.base
      }
    },
    ":focus": {
      border: "solid 2px ".concat(theme.colors.primary.base),
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    }
  };
}, function (_ref6) {
  var icon = _ref6.icon;
  return icon ? "43px" : "15px";
}, function (_ref7) {
  var color = _ref7.color,
      theme = _ref7.theme;
  return color === "dark" && {
    backgroundColor: theme.colors.primary.dark,
    color: theme.colors.white,
    height: "40px",
    borderRadius: "2px",
    border: "solid 2px ".concat(theme.colors.primary.dark),
    "::placeholder": {
      color: theme.colors.white
    },
    ":hover": {
      backgroundColor: theme.colors.primary.base
    }
  } || color === "light" && {
    backgroundColor: theme.colors.secondary.light,
    height: "40px",
    borderRadius: "2px",
    border: "solid 2px ".concat(theme.colors.gray[100]),
    "::placeholder": {
      color: theme.colors.primary.base
    },
    ":hover": {
      backgroundColor: theme.colors.gray[100],
      "::placeholder": {
        color: theme.colors.primary.base
      }
    },
    ":focus": {
      border: "solid 2px ".concat(theme.colors.primary.base),
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    }
  };
});

var PasswordContainerStyled = _styled["default"].div(_templateObject2());

var IconContainerStyled = _styled["default"].div(_templateObject3(), function (_ref8) {
  var theme = _ref8.theme;
  return theme && {
    fill: theme.colors.gray[400]
  };
}, function (_ref9) {
  var color = _ref9.color,
      theme = _ref9.theme;
  return color === "dark" && {
    fill: theme.colors.white
  };
});

var StyledInputError = _styled["default"].span(_templateObject4(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.texts.BodyLarge.FontFamily;
});

var AtomInput = function AtomInput(_ref11) {
  var type = _ref11.type,
      color = _ref11.color,
      placeholder = _ref11.placeholder,
      id = _ref11.id,
      icon = _ref11.icon,
      margin = _ref11.margin,
      formik = _ref11.formik;

  var _useState = (0, _react.useState)(false),
      eye = _useState[0],
      seteye = _useState[1];

  return __jsx(InputStyled, {
    type: type || "text",
    color: color || "light",
    icon: icon,
    margin: margin
  }, icon && __jsx(IconContainerStyled, {
    color: color
  }, __jsx(_icon["default"], {
    icon: icon
  })), __jsx("label", {
    htmlFor: id
  }, placeholder || "Placeholder", type === "textbox" ? __jsx("textarea", {
    id: id,
    value: formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)],
    onChange: formik === null || formik === void 0 ? void 0 : formik.handleChange,
    onBlur: formik === null || formik === void 0 ? void 0 : formik.handleBlur
  }) : __jsx("input", {
    id: id,
    type: (eye ? "text" : type) || "text",
    value: formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)],
    onChange: formik === null || formik === void 0 ? void 0 : formik.handleChange,
    onBlur: formik === null || formik === void 0 ? void 0 : formik.handleBlur
  }), ((formik === null || formik === void 0 ? void 0 : formik.values["".concat(id)]) !== '' || formik !== null && formik !== void 0 && formik.touched["".concat(id)]) && formik !== null && formik !== void 0 && formik.errors["".concat(id)] ? __jsx(StyledInputError, null, formik.errors["".concat(id)]) : null), type === "password" && __jsx(PasswordContainerStyled, {
    onClick: function onClick() {
      seteye(!eye);
    }
  }, eye ? __jsx(_icon["default"], {
    icon: "eye-close"
  }) : __jsx(_icon["default"], {
    icon: "eye-open"
  })));
};

var _default = AtomInput;
exports["default"] = _default;