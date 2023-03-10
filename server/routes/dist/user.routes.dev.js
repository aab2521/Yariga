"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/user.controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.route("/").get(_userController.getAllUsers);
router.route("/").post(_userController.createUser);
router.route("/:id").get(_userController.getUserInfoByID);
var _default = router;
exports["default"] = _default;