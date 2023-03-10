"use strict";
exports.__esModule = true;
var icons_material_1 = require("@mui/icons-material");
var refine_mui_1 = require("@pankod/refine-mui");
var PropertyCard_1 = require("./PropertyCard");
function checkImage(url) {
    var img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}
var Profile = function (_a) {
    var type = _a.type, name = _a.name, avatar = _a.avatar, email = _a.email, properties = _a.properties;
    return (React.createElement(refine_mui_1.Box, null,
        React.createElement(refine_mui_1.Typography, { fontSize: 25, fontWeight: 700, color: "#11142D" },
            type,
            " Profile"),
        React.createElement(refine_mui_1.Box, { mt: "20px", borderRadius: "15px", padding: "20px", bgcolor: "#FCFCFC" },
            React.createElement(refine_mui_1.Box, { sx: {
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2.5
                } },
                React.createElement("img", { src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", width: 340, height: 320, alt: "abstract", className: "my_profile-bg" }),
                React.createElement(refine_mui_1.Box, { flex: 1, sx: {
                        marginTop: { md: "58px" },
                        marginLeft: { xs: "20px", md: "0px" }
                    } },
                    React.createElement(refine_mui_1.Box, { flex: 1, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px" },
                        React.createElement("img", { src: checkImage(avatar)
                                ? avatar
                                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png", width: 78, height: 78, alt: "user_profile", className: "my_profile_user-img" }),
                        React.createElement(refine_mui_1.Box, { flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "30px" },
                            React.createElement(refine_mui_1.Stack, { direction: "column" },
                                React.createElement(refine_mui_1.Typography, { fontSize: 22, fontWeight: 600, color: "#11142D" }, name),
                                React.createElement(refine_mui_1.Typography, { fontSize: 16, color: "#808191" }, "Realestate Agent")),
                            React.createElement(refine_mui_1.Stack, { direction: "column", gap: "30px" },
                                React.createElement(refine_mui_1.Stack, { gap: "15px" },
                                    React.createElement(refine_mui_1.Typography, { fontSize: 14, fontWeight: 500, color: "#808191" }, "Address"),
                                    React.createElement(refine_mui_1.Box, { display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" },
                                        React.createElement(icons_material_1.Place, { sx: { color: "#11142D" } }),
                                        React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#11142D" }, "4517 Jamshedpur IN 831013."))),
                                React.createElement(refine_mui_1.Stack, { direction: "row", flexWrap: "wrap", gap: "20px", pb: 4 },
                                    React.createElement(refine_mui_1.Stack, { flex: 1, gap: "15px" },
                                        React.createElement(refine_mui_1.Typography, { fontSize: 14, fontWeight: 500, color: "#808191" }, "Phone Number"),
                                        React.createElement(refine_mui_1.Box, { display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" },
                                            React.createElement(icons_material_1.Phone, { sx: { color: "#11142D" } }),
                                            React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#11142D", noWrap: true }, "+0123 456 7890"))),
                                    React.createElement(refine_mui_1.Stack, { flex: 1, gap: "15px" },
                                        React.createElement(refine_mui_1.Typography, { fontSize: 14, fontWeight: 500, color: "#808191" }, "Email"),
                                        React.createElement(refine_mui_1.Box, { display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" },
                                            React.createElement(icons_material_1.Email, { sx: { color: "#11142D" } }),
                                            React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#11142D" }, email)))))))))),
        properties.length > 0 && (React.createElement(refine_mui_1.Box, { mt: 2.5, borderRadius: "15px", padding: "20px", bgcolor: "#FCFCFC" },
            React.createElement(refine_mui_1.Typography, { fontSize: 18, fontWeight: 600, color: "#11142D" },
                type,
                " Properties"),
            React.createElement(refine_mui_1.Box, { mt: 2.5, sx: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2.5
                } }, properties === null || properties === void 0 ? void 0 : properties.map(function (property) { return (React.createElement(PropertyCard_1["default"], { key: property._id, id: property._id, title: property.title, location: property.location, price: property.price, photo: property.photo })); }))))));
};
exports["default"] = Profile;
