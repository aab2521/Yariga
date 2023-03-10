"use strict";
exports.__esModule = true;
var icons_material_1 = require("@mui/icons-material");
var refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
var refine_mui_1 = require("@pankod/refine-mui");
var PropertyCard = function (_a) {
    var id = _a.id, title = _a.title, location = _a.location, price = _a.price, photo = _a.photo;
    return (React.createElement(refine_mui_1.Card, { component: refine_react_router_v6_1.Link, to: "/properties/show/" + id, sx: {
            maxWidth: "330px",
            padding: "10px",
            "&:hover": {
                boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)"
            },
            cursor: "pointer"
        }, elevation: 0 },
        React.createElement(refine_mui_1.CardMedia, { component: "img", width: "100%", height: 210, image: photo, alt: "card image", sx: { borderRadius: "10px" } }),
        React.createElement(refine_mui_1.CardContent, { sx: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "10px",
                paddingX: "5px"
            } },
            React.createElement(refine_mui_1.Stack, { direction: "column", gap: 1 },
                React.createElement(refine_mui_1.Typography, { fontSize: 16, fontWeight: 500, color: "#11142d" }, title),
                React.createElement(refine_mui_1.Stack, { direction: "row", gap: 0.5, alignItems: "flex-start" },
                    React.createElement(icons_material_1.Place, { sx: {
                            fontSize: 18,
                            color: "#11142d",
                            marginTop: 0.5
                        } }),
                    React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#808191" }, location))),
            React.createElement(refine_mui_1.Box, { px: 1.5, py: 0.5, borderRadius: 1, bgcolor: "#dadefa", height: "fit-content" },
                React.createElement(refine_mui_1.Typography, { fontSize: 12, fontWeight: 600, color: "#475be8" },
                    "\u20B9 ",
                    price)))));
};
exports["default"] = PropertyCard;
