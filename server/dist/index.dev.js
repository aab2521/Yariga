"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _express = _interopRequireDefault(require("express"));

var dotenv = _interopRequireWildcard(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _connect = _interopRequireDefault(require("./mongodb/connect.js"));

var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));

var _propertyRoutes = _interopRequireDefault(require("./routes/property.routes.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

dotenv.config();
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json({
  limit: "50mb"
}));
app.get("/", function (req, res) {
  res.send({
    message: "Hello World!"
  });
});
app.use("/api/v1/users", _userRoutes["default"]);
app.use("/api/v1/properties", _propertyRoutes["default"]);

var startServer = function startServer() {
  return regeneratorRuntime.async(function startServer$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            (0, _connect["default"])(process.env.MONGODB_URL);
            app.listen(8080, function () {
              return console.log("Server started on port http://localhost:8080");
            });
          } catch (error) {
            console.log(error);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

startServer();