"use strict";
exports.__esModule = true;
var refine_core_1 = require("@pankod/refine-core");
var refine_mui_1 = require("@pankod/refine-mui");
var components_1 = require("components");
var Home = function () {
    var _a;
    var _b = refine_core_1.useList({
        resource: "properties",
        config: {
            pagination: {
                pageSize: 4
            }
        }
    }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    var latestProperties = (_a = data === null || data === void 0 ? void 0 : data.data) !== null && _a !== void 0 ? _a : [];
    if (isLoading)
        return React.createElement(refine_mui_1.Typography, null, "Loading...");
    if (isError)
        return React.createElement(refine_mui_1.Typography, null, "Something went wrong!");
    return (React.createElement(refine_mui_1.Box, null,
        React.createElement(refine_mui_1.Typography, { fontSize: 25, fontWeight: 700, color: "#11142D" }, "Dashboard"),
        React.createElement(refine_mui_1.Box, { mt: "20px", display: "flex", flexWrap: "wrap", gap: 4 },
            React.createElement(components_1.PieChart, { title: "Properties for Sale", value: 684, series: [75, 25], colors: ["#275be8", "#c4e8ef"] }),
            React.createElement(components_1.PieChart, { title: "Properties for Rent", value: 550, series: [60, 40], colors: ["#275be8", "#c4e8ef"] }),
            React.createElement(components_1.PieChart, { title: "Total customers", value: 5684, series: [75, 25], colors: ["#275be8", "#c4e8ef"] }),
            React.createElement(components_1.PieChart, { title: "Properties for Cities", value: 555, series: [75, 25], colors: ["#275be8", "#c4e8ef"] })),
        React.createElement(refine_mui_1.Stack, { mt: "25px", width: "100%", direction: { xs: "column", lg: "row" }, gap: 4 },
            React.createElement(components_1.TotalRevenue, null),
            React.createElement(components_1.PropertyReferrals, null)),
        React.createElement(refine_mui_1.Box, { flex: 1, borderRadius: "15px", padding: "20px", bgcolor: "#fcfcfc", display: "flex", flexDirection: "column", minWidth: "100%", mt: "25px" },
            React.createElement(refine_mui_1.Typography, { fontSize: "18px", fontWeight: 600, color: "#11142d" }, "Latest Properties"),
            React.createElement(refine_mui_1.Box, { mt: 2.5, sx: { display: "flex", flexWrap: "wrap", gap: 4 } }, latestProperties.map(function (property) { return (React.createElement(components_1.PropertyCard, { key: property._id, id: property._id, title: property.title, location: property.location, price: property.price, photo: property.photo })); })))));
};
exports["default"] = Home;
