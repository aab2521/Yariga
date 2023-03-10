import React from "react";
//"use strict";
exports.__esModule = true;
var react_apexcharts_1 = require("react-apexcharts");
var refine_mui_1 = require("@pankod/refine-mui");
var PieChart = function (_a) {
    var title = _a.title, value = _a.value, series = _a.series, colors = _a.colors;
    return (React.createElement(refine_mui_1.Box, { id: "chart", flex: 1, display: "flex", bgcolor: "#fcfcfc", flexDirection: "row", justifyContent: "space-between", alignItems: "center", pl: 3.5, py: 2, gap: 2, borderRadius: "15px", minHeight: "110px", width: "fit-content" },
        React.createElement(refine_mui_1.Stack, { direction: "column" },
            React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#808191" }, title),
            React.createElement(refine_mui_1.Typography, { fontSize: 24, color: "#11142d", fontWeight: 700, mt: 1 }, value)),
        React.createElement(react_apexcharts_1["default"], { options: {
                chart: { type: "donut" },
                colors: colors,
                legend: { show: false },
                dataLabels: { enabled: false }
            }, series: series, type: "donut", width: "120px" })));
};
exports["default"] = PieChart;
