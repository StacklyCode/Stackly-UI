"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _body = _interopRequireDefault(require("./atoms/body"));

var _button = _interopRequireDefault(require("./atoms/button"));

var _container = _interopRequireDefault(require("./atoms/container"));

var _icon = _interopRequireDefault(require("./atoms/icon"));

var _image = _interopRequireDefault(require("./atoms/image"));

var _input = _interopRequireDefault(require("./atoms/input"));

var _switch = _interopRequireDefault(require("./atoms/switch"));

var _title = _interopRequireDefault(require("./atoms/title"));

var _togglelist = _interopRequireDefault(require("./atoms/togglelist"));

var _carrusel = _interopRequireDefault(require("./molecules/carrusel"));

var _projectinfo = _interopRequireDefault(require("./molecules/projectinfo"));

var _tagprojects = _interopRequireDefault(require("./molecules/tagprojects"));

var _tags = _interopRequireDefault(require("./molecules/tags"));

var _tagservices = _interopRequireDefault(require("./molecules/tagservices"));

var _tagteam = _interopRequireDefault(require("./molecules/tagteam"));

var _footer = _interopRequireDefault(require("./organisms/footer"));

var _navegation = _interopRequireDefault(require("./organisms/navegation"));

var _templates = _interopRequireDefault(require("./templates"));

var _default = {
  AtomBody: _body["default"],
  AtomButton: _button["default"],
  AtomContainer: _container["default"],
  AtomImage: _image["default"],
  AtomIcon: _icon["default"],
  AtomInput: _input["default"],
  AtomSwitch: _switch["default"],
  AtomTitle: _title["default"],
  AtomToggleList: _togglelist["default"],
  MoleculeCarrusel: _carrusel["default"],
  MoleculeProjectInfo: _projectinfo["default"],
  MoleculesTagProject: _tagprojects["default"],
  MoleculesTags: _tags["default"],
  MoleculesTagServices: _tagservices["default"],
  MoleculesTagTeam: _tagteam["default"],
  OrganismFooter: _footer["default"],
  OrganismNavigation: _navegation["default"],
  TemplateMain: _templates["default"]
};
exports["default"] = _default;