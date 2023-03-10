"use strict";
exports.__esModule = true;
var refine_core_1 = require("@pankod/refine-core");
var refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
var components_1 = require("components");
require("index.css");
var AgentProfile = function () {
    var _a;
    var id = refine_react_router_v6_1.useParams().id;
    var _b = refine_core_1.useOne({
        resource: "users",
        id: id
    }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    console.log(data);
    var myProfile = (_a = data === null || data === void 0 ? void 0 : data.data) !== null && _a !== void 0 ? _a : [];
    if (isLoading)
        return React.createElement("div", null, "loading...");
    if (isError)
        return React.createElement("div", null, "error...");
    return (React.createElement(components_1.Profile, { type: "Agent", name: myProfile.name, email: myProfile.email, avatar: myProfile.avatar, properties: myProfile.allProperties }));
};
exports["default"] = AgentProfile;
