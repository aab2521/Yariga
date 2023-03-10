import React from "react";
//"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var refine_mui_1 = require("@pankod/refine-mui");
var index_1 = require("constants/index");
var ProgressBar = function (_a) {
    var title = _a.title, percentage = _a.percentage, color = _a.color;
    return (React.createElement(refine_mui_1.Box, { width: "100%" },
        React.createElement(refine_mui_1.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between" },
            React.createElement(refine_mui_1.Typography, { fontSize: 16, fontWeight: 500, color: "#11142d" }, title),
            React.createElement(refine_mui_1.Typography, { fontSize: 16, fontWeight: 500, color: "#11142d" },
                percentage,
                "%")),
        React.createElement(refine_mui_1.Box, { mt: 2, position: "relative", width: "100%", height: "8px", borderRadius: 1, bgcolor: "#e4e8ef" },
            React.createElement(refine_mui_1.Box, { width: percentage + "%", bgcolor: color, position: "absolute", height: "100%", borderRadius: 1 }))));
};
var PropertyReferrals = function () {
    return (React.createElement(refine_mui_1.Box, { p: 4, bgcolor: "#fcfcfc", id: "chart", minWidth: 490, display: "flex", flexDirection: "column", borderRadius: "15px" },
        React.createElement(refine_mui_1.Typography, { fontSize: 18, fontWeight: 600, color: "#11142d" }, "Property Referrals"),
        React.createElement(refine_mui_1.Stack, { my: "20px", direction: "column", gap: 4 }, index_1.propertyReferralsInfo.map(function (bar) { return (React.createElement(ProgressBar, __assign({ key: bar.title }, bar))); }))));
};
exports["default"] = PropertyReferrals;
