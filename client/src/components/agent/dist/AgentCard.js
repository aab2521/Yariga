"use strict";
exports.__esModule = true;
var icons_material_1 = require("@mui/icons-material");
var refine_core_1 = require("@pankod/refine-core");
var refine_mui_1 = require("@pankod/refine-mui");
var refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
function checkImage(url) {
    var img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}
var InfoBar = function (_a) {
    var icon = _a.icon, name = _a.name;
    return (React.createElement(refine_mui_1.Stack, { flex: 1, minWidth: { xs: "100%", sm: 300 }, gap: 1.5, direction: "row" },
        icon,
        React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#808191" }, name)));
};
var AgentCard = function (_a) {
    var id = _a.id, name = _a.name, email = _a.email, avatar = _a.avatar, noOfProperties = _a.noOfProperties;
    var currentUser = refine_core_1.useGetIdentity().data;
    var generateLink = function () {
        if (currentUser.email === email)
            return "/my-profile";
        return "/agents/show/" + id;
    };
    return (React.createElement(refine_mui_1.Box, { component: refine_react_router_v6_1.Link, to: generateLink(), width: "100%", sx: {
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "20px",
            padding: "20px",
            "&:hover": {
                boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)"
            }
        } },
        React.createElement("img", { src: checkImage(avatar)
                ? avatar
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png", alt: "user", width: 90, height: 90, style: { borderRadius: 8, objectFit: "cover" } }),
        React.createElement(refine_mui_1.Stack, { direction: "column", justifyContent: "space-between", flex: 1, gap: { xs: 4, sm: 2 } },
            React.createElement(refine_mui_1.Stack, { gap: 2, direction: "row", flexWrap: "wrap", alignItems: "center" },
                React.createElement(refine_mui_1.Typography, { fontSize: 22, fontWeight: 600, color: "#11142d" }, name),
                React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#808191" }, "Real-Estate Agent")),
            React.createElement(refine_mui_1.Stack, { direction: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 2 },
                React.createElement(InfoBar, { icon: React.createElement(icons_material_1.EmailOutlined, { sx: { color: "#808191" } }), name: email }),
                React.createElement(InfoBar, { icon: React.createElement(icons_material_1.Place, { sx: { color: "#808191" } }), name: "India" }),
                React.createElement(InfoBar, { icon: React.createElement(icons_material_1.Phone, { sx: { color: "#808191" } }), name: "+9188-3231-4141" }),
                React.createElement(InfoBar, { icon: React.createElement(icons_material_1.LocationCity, { sx: { color: "#808191" } }), name: noOfProperties + " Properties" })))));
};
exports["default"] = AgentCard;
