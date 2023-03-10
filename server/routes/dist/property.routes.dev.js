"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _propertyController = require("../controllers/property.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route("/").get(_propertyController.getAllProperties);
router.route("/:id").get(_propertyController.getPropertyDetail);
router.route("/").post(_propertyController.createProperty);
router.route("/:id").patch(_propertyController.updateProperty);
router.route("/:id")["delete"](_propertyController.deleteProperty);
var _default = router;
exports["default"] = _default;