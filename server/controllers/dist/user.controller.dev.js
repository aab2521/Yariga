"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfoByID = exports.createUser = exports.getAllUsers = void 0;

var _user = _interopRequireDefault(require("../mongodb/models/user.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllUsers = function getAllUsers(req, res) {
  var users;
  return regeneratorRuntime.async(function getAllUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_user["default"].find({}).limit(req.query._end));

        case 3:
          users = _context.sent;
          res.status(200).json(users);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllUsers = getAllUsers;

var createUser = function createUser(req, res) {
  var _req$body, name, email, avatar, userExists, newUser;

  return regeneratorRuntime.async(function createUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, avatar = _req$body.avatar;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: email
          }));

        case 4:
          userExists = _context2.sent;

          if (!userExists) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(200).json(userExists));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(_user["default"].create({
            name: name,
            email: email,
            avatar: avatar
          }));

        case 9:
          newUser = _context2.sent;
          res.status(200).json(newUser);
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.createUser = createUser;

var getUserInfoByID = function getUserInfoByID(req, res) {
  var id, user;
  return regeneratorRuntime.async(function getUserInfoByID$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            _id: id
          }).populate("allProperties"));

        case 4:
          user = _context3.sent;

          if (user) {
            res.status(200).json(user);
          } else {
            res.status(404).json({
              message: "User not found"
            });
          }

          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getUserInfoByID = getUserInfoByID;