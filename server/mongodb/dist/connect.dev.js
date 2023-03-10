"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectDB = function connectDB(url) {
  _mongoose["default"].set("strictQuery", true);

  _mongoose["default"].connect(url).then(function () {
    return console.log("MongoDB connected");
  })["catch"](function (error) {
    return console.log(error);
  });
};

var _default = connectDB;
exports["default"] = _default;