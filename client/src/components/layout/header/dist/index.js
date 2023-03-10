"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var refine_core_1 = require("@pankod/refine-core");
var refine_mui_1 = require("@pankod/refine-mui");
var contexts_1 = require("contexts");
exports.Header = function () {
    var _a = react_1.useContext(contexts_1.ColorModeContext), mode = _a.mode, setMode = _a.setMode;
    var user = refine_core_1.useGetIdentity().data;
    var shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.
    return shouldRenderHeader ? (react_1["default"].createElement(refine_mui_1.AppBar, { color: "default", position: "sticky", elevation: 0, sx: { background: '#fcfcfc' } },
        react_1["default"].createElement(refine_mui_1.Toolbar, null,
            react_1["default"].createElement(refine_mui_1.Stack, { direction: "row", width: "100%", justifyContent: "flex-end", alignItems: "center" },
                react_1["default"].createElement(refine_mui_1.Stack, { direction: "row", gap: "16px", alignItems: "center", justifyContent: "center" },
                    (user === null || user === void 0 ? void 0 : user.name) ? (react_1["default"].createElement(refine_mui_1.Typography, { variant: "subtitle2" }, user === null || user === void 0 ? void 0 : user.name)) : null,
                    (user === null || user === void 0 ? void 0 : user.avatar) ? (react_1["default"].createElement(refine_mui_1.Avatar, { src: user === null || user === void 0 ? void 0 : user.avatar, alt: user === null || user === void 0 ? void 0 : user.name })) : null))))) : null;
};
