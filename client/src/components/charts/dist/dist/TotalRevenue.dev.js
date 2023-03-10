"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//"use strict";
exports.__esModule = true;

var react_apexcharts_1 = require("react-apexcharts");

var refine_mui_1 = require("@pankod/refine-mui");

var icons_material_1 = require("@mui/icons-material");

var chart_config_1 = require("./chart.config");

var TotalRevenue = function TotalRevenue() {
  return _react["default"].createElement(refine_mui_1.Box, {
    p: 4,
    flex: 1,
    bgcolor: "#fcfcfc",
    id: "chart",
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px"
  }, _react["default"].createElement(refine_mui_1.Typography, {
    fontSize: 18,
    fontWeight: 600,
    color: "#11142d"
  }, "Total Revenue"), _react["default"].createElement(refine_mui_1.Stack, {
    my: "20px",
    direction: "row",
    gap: 4,
    flexWrap: "wrap"
  }, _react["default"].createElement(refine_mui_1.Typography, {
    fontSize: 28,
    fontWeight: 700,
    color: "#11142d"
  }, "$236,535"), _react["default"].createElement(refine_mui_1.Stack, {
    direction: "row",
    alignItems: "center",
    gap: 1
  }, _react["default"].createElement(icons_material_1.ArrowCircleUpRounded, {
    sx: {
      fontSize: 25,
      color: "#475be8"
    }
  }), _react["default"].createElement(refine_mui_1.Stack, null, _react["default"].createElement(refine_mui_1.Typography, {
    fontSize: 15,
    color: "#475be8"
  }, "0.8%"), _react["default"].createElement(refine_mui_1.Typography, {
    fontSize: 12,
    color: "#808191"
  }, "Than Last Month")))), _react["default"].createElement(react_apexcharts_1["default"], {
    series: chart_config_1.TotalRevenueSeries,
    type: "bar",
    height: 310,
    options: chart_config_1.TotalRevenueOptions
  }));
};

exports["default"] = TotalRevenue;