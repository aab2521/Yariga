"use strict";
exports.__esModule = true;
var icons_material_1 = require("@mui/icons-material");
var refine_core_1 = require("@pankod/refine-core");
var refine_mui_1 = require("@pankod/refine-mui");
var refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
var react_1 = require("react");
var components_1 = require("components");
var AllProperties = function () {
    var _a, _b;
    var navigate = refine_react_router_v6_1.useNavigate();
    var _c = refine_core_1.useTable(), _d = _c.tableQueryResult, data = _d.data, isLoading = _d.isLoading, isError = _d.isError, current = _c.current, setCurrent = _c.setCurrent, setPageSize = _c.setPageSize, pageCount = _c.pageCount, sorter = _c.sorter, setSorter = _c.setSorter, filters = _c.filters, setFilters = _c.setFilters;
    var allProperties = (_a = data === null || data === void 0 ? void 0 : data.data) !== null && _a !== void 0 ? _a : [];
    var currentPrice = (_b = sorter.find(function (item) { return item.field === "price"; })) === null || _b === void 0 ? void 0 : _b.order;
    var toggleSort = function (field) {
        setSorter([{ field: field, order: currentPrice === "asc" ? "desc" : "asc" }]);
    };
    var currentFilterValues = react_1.useMemo(function () {
        var _a, _b;
        var logicalFilters = filters.flatMap(function (item) {
            return "field" in item ? item : [];
        });
        return {
            title: ((_a = logicalFilters.find(function (item) { return item.field === "title"; })) === null || _a === void 0 ? void 0 : _a.value) ||
                "",
            propertyType: ((_b = logicalFilters.find(function (item) { return item.field === "propertyType"; })) === null || _b === void 0 ? void 0 : _b.value) || ""
        };
    }, [filters]);
    if (isLoading)
        return React.createElement(refine_mui_1.Typography, null, "Loading...");
    if (isError)
        return React.createElement(refine_mui_1.Typography, null, "Error...");
    return (React.createElement(refine_mui_1.Box, null,
        React.createElement(refine_mui_1.Box, { mt: "20px", sx: { display: "flex", flexWrap: "wrap", gap: 3 } },
            React.createElement(refine_mui_1.Stack, { direction: "column", width: "100%" },
                React.createElement(refine_mui_1.Typography, { fontSize: 25, fontWeight: 700, color: "#11142d" }, !allProperties.length
                    ? "There are no properties"
                    : "All Properties"),
                React.createElement(refine_mui_1.Box, { mb: 2, mt: 3, display: "flex", width: "84%", justifyContent: "space-between", flexWrap: "wrap" },
                    React.createElement(refine_mui_1.Box, { display: "flex", gap: 2, flexWrap: "wrap", mb: { xs: "20px", sm: 0 } },
                        React.createElement(components_1.CustomButton, { title: "Sort price " + (currentPrice === "asc" ? "↑" : "↓"), handleClick: function () { return toggleSort("price"); }, backgroundColor: "#475be8", color: "#fcfcfc" }),
                        React.createElement(refine_mui_1.TextField, { variant: "outlined", color: "info", placeholder: "Search by title", value: currentFilterValues.title, onChange: function (e) {
                                setFilters([
                                    {
                                        field: "title",
                                        operator: "contains",
                                        value: e.currentTarget.value
                                            ? e.currentTarget.value
                                            : undefined
                                    },
                                ]);
                            } }),
                        React.createElement(refine_mui_1.Select, { variant: "outlined", color: "info", displayEmpty: true, required: true, inputProps: { "aria-label": "Without label" }, defaultValue: "", value: currentFilterValues.propertyType, onChange: function (e) {
                                setFilters([
                                    {
                                        field: "propertyType",
                                        operator: "eq",
                                        value: e.target.value
                                    },
                                ], "replace");
                            } },
                            React.createElement(refine_mui_1.MenuItem, { value: "" }, "All"),
                            [
                                "Apartment",
                                "Villa",
                                "Farmhouse",
                                "Condos",
                                "Townhouse",
                                "Duplex",
                                "Studio",
                                "Chalet",
                            ].map(function (type) { return (React.createElement(refine_mui_1.MenuItem, { key: type, value: type.toLowerCase() }, type)); })))))),
        React.createElement(refine_mui_1.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center" },
            React.createElement(components_1.CustomButton, { title: "Add Property", handleClick: function () { return navigate("/properties/create"); }, backgroundColor: "#475be8", color: "#fcfcfc", icon: React.createElement(icons_material_1.Add, null) })),
        React.createElement(refine_mui_1.Box, { mt: "20px", sx: { display: "flex", flexWrap: "wrap", gap: 3 } }, allProperties === null || allProperties === void 0 ? void 0 : allProperties.map(function (property) { return (React.createElement(components_1.PropertyCard, { key: property._id, id: property._id, title: property.title, location: property.location, price: property.price, photo: property.photo })); })),
        allProperties.length > 0 && (React.createElement(refine_mui_1.Box, { display: "flex", gap: 2, mt: 3, flexWrap: "wrap" },
            React.createElement(components_1.CustomButton, { title: "Previous", handleClick: function () { return setCurrent(function (prev) { return prev - 1; }); }, backgroundColor: "#475be8", color: "#fcfcfc", disabled: !(current > 1) }),
            React.createElement(refine_mui_1.Box, { display: { xs: "hidden", sm: "flex" }, alignItems: "center", gap: "5px" },
                "Page",
                " ",
                React.createElement("strong", null,
                    current,
                    " of ",
                    pageCount)),
            React.createElement(components_1.CustomButton, { title: "Next", handleClick: function () { return setCurrent(function (prev) { return prev + 1; }); }, backgroundColor: "#475be8", color: "#fcfcfc", disabled: current === pageCount }),
            React.createElement(refine_mui_1.Select, { variant: "outlined", color: "info", displayEmpty: true, required: true, inputProps: { "aria-label": "Without label" }, defaultValue: 10, onChange: function (e) {
                    return setPageSize(e.target.value ? Number(e.target.value) : 10);
                } }, [10, 20, 30, 40, 50].map(function (size) { return (React.createElement(refine_mui_1.MenuItem, { key: size, value: size },
                "Show ",
                size)); }))))));
};
exports["default"] = AllProperties;
