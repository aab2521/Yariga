"use strict";
exports.__esModule = true;
var refine_core_1 = require("@pankod/refine-core");
var refine_mui_1 = require("@pankod/refine-mui");
var components_1 = require("components");
var Agents = function () {
    var _a;
    var _b = refine_core_1.useList({ resource: "users" }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    var allAgents = (_a = data === null || data === void 0 ? void 0 : data.data) !== null && _a !== void 0 ? _a : [];
    if (isLoading)
        return React.createElement("div", null, "loading...");
    if (isError)
        return React.createElement("div", null, "error...");
    return (React.createElement(refine_mui_1.Box, null,
        React.createElement(refine_mui_1.Typography, { fontSize: 25, fontWeight: 700, color: "#11142d" }, "Agents List"),
        React.createElement(refine_mui_1.Box, { mt: "20px", sx: {
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                backgroundColor: "#fcfcfc"
            } }, allAgents.map(function (agent) { return (React.createElement(components_1.AgentCard, { key: agent._id, id: agent._id, name: agent.name, email: agent.email, avatar: agent.avatar, noOfProperties: agent.allProperties.length })); }))));
};
exports["default"] = Agents;
