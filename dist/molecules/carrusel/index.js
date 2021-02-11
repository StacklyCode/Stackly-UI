"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("swiper/react");

var _tagprojects = _interopRequireDefault(require("../tagprojects"));

var __jsx = _react["default"].createElement;
var ProjectsData = [{
  id: "0",
  title: "Landing page for COMFECO",
  type: "Web Landing",
  description: "project-desc-1",
  urlImage: "https://res.cloudinary.com/stacklycode/image/upload/v1611712445/StacklyCodeImages/comfeco_yzsm7k.png",
  link: "https://www.comfeco.com/"
}, {
  id: "1",
  title: "Landing page for CreaApps",
  type: "Web | UI/UX",
  description: "project-desc-2",
  urlImage: "https://res.cloudinary.com/stacklycode/image/upload/v1604710707/StacklyCodeImages/project2_stlr9u.png",
  link: "https://creaapps.com.do/"
}, {
  id: "2",
  title: "Control Vehicular del Estado de Oaxaca",
  type: "Web | CRM/Dashboard",
  description: "project-desc-3",
  urlImage: "https://res.cloudinary.com/stacklycode/image/upload/v1604981586/StacklyCodeImages/Project7_jyrxur.png",
  link: "http://fgeo-control-vehicular.herokuapp.com/"
}, {
  id: "3",
  title: "Gaceta Ucayalina",
  type: "Web News Site",
  description: "project-desc-4",
  urlImage: "https://res.cloudinary.com/stacklycode/image/upload/v1604710669/StacklyCodeImages/project1_b4wzaz.png",
  link: "https://www.gacetaucayalina.com/"
}, {
  id: "4",
  title: "Landing page for Fazt Community",
  type: "Web | UI/UX",
  description: "project-desc-5",
  urlImage: "https://res.cloudinary.com/stacklycode/image/upload/v1611715008/StacklyCodeImages/faztc_armkzj.png",
  link: "https://faztcommunity.dev/"
}, {
  id: "5",
  title: "Design MoveTv",
  type: "Design | Redesign Web",
  description: "project-desc-6",
  urlImage: "https://res.cloudinary.com/stacklycode/image/upload/v1611715275/StacklyCodeImages/movetv_fd1xbv.png",
  link: "https://www.figma.com/file/ALiyl4IfPtj9gRu15gfhqm/Untitled?node-id=0%3A1"
}, {
  id: "6",
  title: "Design App Hotel",
  type: "Design | Redesign Web",
  description: "project-desc-7",
  urlImage: "https://res.cloudinary.com/stacklycode/image/upload/v1611715791/StacklyCodeImages/app_hotel_design_uuyuoi.png",
  link: "https://www.figma.com/file/IHaZUiMzMDtz0yTsCZWKaQGx/Untitled?node-id=92%3A2"
}];

var MoleculeCarrusel = function MoleculeCarrusel(_ref) {
  var data = _ref.data,
      t = _ref.t;
  return /*#__PURE__*/_react["default"].createElement(_react2.Swiper, {
    slidesPerView: 4,
    pagination: {
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 500
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
  }, data && (data === null || data === void 0 ? void 0 : data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement(_tagprojects["default"], {
      t: t,
      key: item.id,
      title: item.title,
      img: item.urlImage,
      description: item.description,
      type: item.type,
      link: item.link
    }));
  })) || ProjectsData.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_react2.SwiperSlide, {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/_react["default"].createElement(_tagprojects["default"], {
      t: t,
      key: item.id,
      title: item.title,
      img: item.urlImage,
      description: item.description,
      type: item.type,
      link: item.link
    }));
  }));
};

var _default = MoleculeCarrusel;
exports["default"] = _default;