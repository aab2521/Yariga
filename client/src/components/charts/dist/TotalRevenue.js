"use strict";
exports.__esModule = true;
var react_apexcharts_1 = require("react-apexcharts");
var refine_mui_1 = require("@pankod/refine-mui");
var icons_material_1 = require("@mui/icons-material");
var chart_config_1 = require("./chart.config");
var TotalRevenue = function () {
    return (React.createElement(refine_mui_1.Box, { p: 4, flex: 1, bgcolor: "#fcfcfc", id: "chart", display: "flex", flexDirection: "column", borderRadius: "15px" },
        React.createElement(refine_mui_1.Typography, { fontSize: 18, fontWeight: 600, color: "#11142d" }, "Total Revenue"),
        React.createElement(refine_mui_1.Stack, { my: "20px", direction: "row", gap: 4, flexWrap: "wrap" },
            React.createElement(refine_mui_1.Typography, { fontSize: 28, fontWeight: 700, color: "#11142d" }, "\u20B9 236,535"),
            React.createElement(refine_mui_1.Stack, { direction: "row", alignItems: "center", gap: 1 },
                React.createElement(icons_material_1.ArrowCircleUpRounded, { sx: { fontSize: 25, color: "#475be8" } }),
                React.createElement(refine_mui_1.Stack, null,
                    React.createElement(refine_mui_1.Typography, { fontSize: 15, color: "#475be8" }, "0.8%"),
                    React.createElement(refine_mui_1.Typography, { fontSize: 12, color: "#808191" }, "Than Last Month")))),
        React.createElement(react_apexcharts_1["default"], { series: chart_config_1.TotalRevenueSeries, type: "bar", height: 310, options: chart_config_1.TotalRevenueOptions })));
};
exports["default"] = TotalRevenue;
