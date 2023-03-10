"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  allProperties: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Property"
  }]
});

var userModel = _mongoose["default"].model("User", UserSchema);

var _default = userModel;
exports["default"] = _default;