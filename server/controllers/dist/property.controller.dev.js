"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProperty = exports.updateProperty = exports.createProperty = exports.getPropertyDetail = exports.getAllProperties = void 0;

var _property = _interopRequireDefault(require("../mongodb/models/property.js"));

var _user = _interopRequireDefault(require("../mongodb/models/user.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var dotenv = _interopRequireWildcard(require("dotenv"));

var _cloudinary = require("cloudinary");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

dotenv.config();

_cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

var getAllProperties = function getAllProperties(req, res) {
  var _req$query, _end, _order, _start, _sort, _req$query$title_like, title_like, _req$query$propertyTy, propertyType, query, count, properties;

  return regeneratorRuntime.async(function getAllProperties$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$query = req.query, _end = _req$query._end, _order = _req$query._order, _start = _req$query._start, _sort = _req$query._sort, _req$query$title_like = _req$query.title_like, title_like = _req$query$title_like === void 0 ? "" : _req$query$title_like, _req$query$propertyTy = _req$query.propertyType, propertyType = _req$query$propertyTy === void 0 ? "" : _req$query$propertyTy;
          query = {};

          if (propertyType !== "") {
            query.propertyType = propertyType;
          }

          if (title_like) {
            query.title = {
              $regex: title_like,
              $options: "i"
            };
          }

          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(_property["default"].countDocuments({
            query: query
          }));

        case 7:
          count = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(_property["default"].find(query).limit(_end).skip(_start).sort(_defineProperty({}, _sort, _order)));

        case 10:
          properties = _context.sent;
          res.header("x-total-count", count);
          res.header("Access-Control-Expose-Headers", "x-total-count");
          res.status(200).json(properties);
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](4);
          res.status(500).json({
            message: _context.t0.message
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 16]]);
};

exports.getAllProperties = getAllProperties;

var getPropertyDetail = function getPropertyDetail(req, res) {
  var id, propertyExists;
  return regeneratorRuntime.async(function getPropertyDetail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_property["default"].findOne({
            _id: id
          }).populate("creator"));

        case 3:
          propertyExists = _context2.sent;

          if (propertyExists) {
            res.status(200).json(propertyExists);
          } else {
            res.status(404).json({
              message: "Property not found"
            });
          }

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getPropertyDetail = getPropertyDetail;

var createProperty = function createProperty(req, res) {
  var _req$body, title, description, propertyType, location, price, photo, email, session, user, photoUrl, newProperty;

  return regeneratorRuntime.async(function createProperty$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, title = _req$body.title, description = _req$body.description, propertyType = _req$body.propertyType, location = _req$body.location, price = _req$body.price, photo = _req$body.photo, email = _req$body.email;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_mongoose["default"].startSession());

        case 4:
          session = _context3.sent;
          session.startTransaction();
          _context3.next = 8;
          return regeneratorRuntime.awrap(_user["default"].findOne({
            email: email
          }).session(session));

        case 8:
          user = _context3.sent;

          if (user) {
            _context3.next = 11;
            break;
          }

          throw new Error("User not found");

        case 11:
          _context3.next = 13;
          return regeneratorRuntime.awrap(_cloudinary.v2.uploader.upload(photo));

        case 13:
          photoUrl = _context3.sent;
          _context3.next = 16;
          return regeneratorRuntime.awrap(_property["default"].create({
            title: title,
            description: description,
            propertyType: propertyType,
            location: location,
            price: price,
            photo: photoUrl.url,
            creator: user._id
          }));

        case 16:
          newProperty = _context3.sent;
          user.allProperties.push(newProperty._id);
          _context3.next = 20;
          return regeneratorRuntime.awrap(user.save({
            session: session
          }));

        case 20:
          _context3.next = 22;
          return regeneratorRuntime.awrap(session.commitTransaction());

        case 22:
          res.status(200).json({
            message: "Property created successfully"
          });
          _context3.next = 28;
          break;

        case 25:
          _context3.prev = 25;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 28:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 25]]);
};

exports.createProperty = createProperty;

var updateProperty = function updateProperty(req, res) {
  var id, _req$body2, title, description, propertyType, location, price, photo, photoUrl;

  return regeneratorRuntime.async(function updateProperty$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, propertyType = _req$body2.propertyType, location = _req$body2.location, price = _req$body2.price, photo = _req$body2.photo;
          _context4.next = 5;
          return regeneratorRuntime.awrap(_cloudinary.v2.uploader.upload(photo));

        case 5:
          photoUrl = _context4.sent;
          _context4.next = 8;
          return regeneratorRuntime.awrap(_property["default"].findByIdAndUpdate({
            _id: id
          }, {
            title: title,
            description: description,
            propertyType: propertyType,
            location: location,
            price: price,
            photo: photoUrl.url || photo
          }));

        case 8:
          res.status(200).json({
            message: "Property updated successfully"
          });
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: _context4.t0.message
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.updateProperty = updateProperty;

var deleteProperty = function deleteProperty(req, res) {
  var id, propertyToDelete, session;
  return regeneratorRuntime.async(function deleteProperty$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_property["default"].findById({
            _id: id
          }).populate("creator"));

        case 4:
          propertyToDelete = _context5.sent;

          if (propertyToDelete) {
            _context5.next = 7;
            break;
          }

          throw new Error("Property not found");

        case 7:
          _context5.next = 9;
          return regeneratorRuntime.awrap(_mongoose["default"].startSession());

        case 9:
          session = _context5.sent;
          session.startTransaction();
          propertyToDelete.remove({
            session: session
          });
          propertyToDelete.creator.allProperties.pull(propertyToDelete);
          _context5.next = 15;
          return regeneratorRuntime.awrap(propertyToDelete.creator.save({
            session: session
          }));

        case 15:
          _context5.next = 17;
          return regeneratorRuntime.awrap(session.commitTransaction());

        case 17:
          res.status(200).json({
            message: "Property deleted successfully"
          });
          _context5.next = 23;
          break;

        case 20:
          _context5.prev = 20;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: _context5.t0.message
          });

        case 23:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 20]]);
};

exports.deleteProperty = deleteProperty;