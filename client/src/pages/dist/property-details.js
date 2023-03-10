"use strict";
exports.__esModule = true;
/* eslint-disable no-restricted-globals */
var refine_mui_1 = require("@pankod/refine-mui");
var refine_core_1 = require("@pankod/refine-core");
var refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
var icons_material_1 = require("@mui/icons-material");
var components_1 = require("components");
function checkImage(url) {
    var img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}
var PropertyDetails = function () {
    var _a;
    var navigate = refine_react_router_v6_1.useNavigate();
    var user = refine_core_1.useGetIdentity().data;
    var queryResult = refine_core_1.useShow().queryResult;
    var mutate = refine_core_1.useDelete().mutate;
    var id = refine_react_router_v6_1.useParams().id;
    var data = queryResult.data, isLoading = queryResult.isLoading, isError = queryResult.isError;
    var propertyDetails = (_a = data === null || data === void 0 ? void 0 : data.data) !== null && _a !== void 0 ? _a : {};
    if (isLoading) {
        return React.createElement("div", null, "Loading...");
    }
    if (isError) {
        return React.createElement("div", null, "Something went wrong!");
    }
    var isCurrentUser = user.email === propertyDetails.creator.email;
    var handleDeleteProperty = function () {
        var response = confirm("Are you sure you want to delete this property?");
        if (response) {
            mutate({
                resource: "properties",
                id: id
            }, {
                onSuccess: function () {
                    navigate("/properties");
                }
            });
        }
    };
    return (React.createElement(refine_mui_1.Box, { borderRadius: "15px", padding: "20px", bgcolor: "#FCFCFC", width: "fit-content" },
        React.createElement(refine_mui_1.Typography, { fontSize: 25, fontWeight: 700, color: "#11142D" }, "Details"),
        React.createElement(refine_mui_1.Box, { mt: "20px", display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 4 },
            React.createElement(refine_mui_1.Box, { flex: 1, maxWidth: 764 },
                React.createElement("img", { src: propertyDetails.photo, alt: "property_details-img", height: 546, style: { objectFit: "cover", borderRadius: "10px" }, className: "property_details-img" }),
                React.createElement(refine_mui_1.Box, { mt: "15px" },
                    React.createElement(refine_mui_1.Stack, { direction: "row", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" },
                        React.createElement(refine_mui_1.Typography, { fontSize: 18, fontWeight: 500, color: "#11142D", textTransform: "capitalize" }, propertyDetails.propertyType),
                        React.createElement(refine_mui_1.Box, null, [1, 2, 3, 4, 5].map(function (item) { return (React.createElement(icons_material_1.Star, { key: "star-" + item, sx: { color: "#F2C94C" } })); }))),
                    React.createElement(refine_mui_1.Stack, { direction: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 2 },
                        React.createElement(refine_mui_1.Box, null,
                            React.createElement(refine_mui_1.Typography, { fontSize: 22, fontWeight: 600, mt: "10px", color: "#11142D" }, propertyDetails.title),
                            React.createElement(refine_mui_1.Stack, { mt: 0.5, direction: "row", alignItems: "center", gap: 0.5 },
                                React.createElement(icons_material_1.Place, { sx: { color: "#808191" } }),
                                React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#808191" }, propertyDetails.location))),
                        React.createElement(refine_mui_1.Box, null,
                            React.createElement(refine_mui_1.Typography, { fontSize: 16, fontWeight: 600, mt: "10px", color: "#11142D" }, "Price"),
                            React.createElement(refine_mui_1.Stack, { direction: "row", alignItems: "flex-end", gap: 1 },
                                React.createElement(refine_mui_1.Typography, { fontSize: 25, fontWeight: 700, color: "#475BE8" },
                                    "\u20B9",
                                    propertyDetails.price),
                                React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#808191", mb: 0.5 }, "for one day")))),
                    React.createElement(refine_mui_1.Stack, { mt: "25px", direction: "column", gap: "10px" },
                        React.createElement(refine_mui_1.Typography, { fontSize: 18, color: "#11142D" }, "Description"),
                        React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#808191" }, propertyDetails.description)))),
            React.createElement(refine_mui_1.Box, { width: "100%", flex: 1, maxWidth: 326, display: "flex", flexDirection: "column", gap: "20px" },
                React.createElement(refine_mui_1.Stack, { width: "100%", p: 2, direction: "column", justifyContent: "center", alignItems: "center", border: "1px solid #E4E4E4", borderRadius: 2 },
                    React.createElement(refine_mui_1.Stack, { mt: 2, justifyContent: "center", alignItems: "center", textAlign: "center" },
                        React.createElement("img", { src: checkImage(propertyDetails.creator.avatar)
                                ? propertyDetails.creator.avatar
                                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png", alt: "avatar", width: 90, height: 90, style: {
                                borderRadius: "100%",
                                objectFit: "cover"
                            } }),
                        React.createElement(refine_mui_1.Box, { mt: "15px" },
                            React.createElement(refine_mui_1.Typography, { fontSize: 18, fontWeight: 600, color: "#11142D" }, propertyDetails.creator.name),
                            React.createElement(refine_mui_1.Typography, { mt: "5px", fontSize: 14, fontWeight: 400, color: "#808191" }, "Agent")),
                        React.createElement(refine_mui_1.Stack, { mt: "15px", direction: "row", alignItems: "center", gap: 1 },
                            React.createElement(icons_material_1.Place, { sx: { color: "#808191" } }),
                            React.createElement(refine_mui_1.Typography, { fontSize: 14, fontWeight: 400, color: "#808191" }, "Jamshedpur,IN")),
                        React.createElement(refine_mui_1.Typography, { mt: 1, fontSize: 16, fontWeight: 600, color: "#11142D" },
                            propertyDetails.creator.allProperties.length,
                            " ",
                            "Properties")),
                    React.createElement(refine_mui_1.Stack, { width: "100%", mt: "25px", direction: "row", flexWrap: "wrap", gap: 2 },
                        React.createElement(components_1.CustomButton, { title: !isCurrentUser ? "Message" : "Edit", backgroundColor: "#475BE8", color: "#FCFCFC", fullWidth: true, icon: !isCurrentUser ? React.createElement(icons_material_1.ChatBubble, null) : React.createElement(icons_material_1.Edit, null), handleClick: function () {
                                if (isCurrentUser) {
                                    navigate("/properties/edit/ " + propertyDetails._id);
                                }
                            } }),
                        React.createElement(components_1.CustomButton, { title: !isCurrentUser ? "Call" : "Delete", backgroundColor: !isCurrentUser ? "#2ED480" : "#d42e2e", color: "#FCFCFC", fullWidth: true, icon: !isCurrentUser ? React.createElement(icons_material_1.Phone, null) : React.createElement(icons_material_1.Delete, null), handleClick: function () {
                                if (isCurrentUser)
                                    handleDeleteProperty();
                            } }))),
                React.createElement(refine_mui_1.Box, null,
                    React.createElement(components_1.CustomButton, { title: "Book Now", backgroundColor: "#475BE8", color: "#FCFCFC", fullWidth: true }))))));
};
exports["default"] = PropertyDetails;
