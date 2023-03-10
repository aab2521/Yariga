"use strict";
exports.__esModule = true;
var refine_core_1 = require("@pankod/refine-core");
var components_1 = require("components");
var MyProfile = function () {
    var _a;
    var user = refine_core_1.useGetIdentity().data;
    var _b = refine_core_1.useOne({
        resource: "users",
        id: user === null || user === void 0 ? void 0 : user.userid
    }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    var myProfile = (_a = data === null || data === void 0 ? void 0 : data.data) !== null && _a !== void 0 ? _a : [];
    if (isLoading)
        return React.createElement("div", null, "loading...");
    if (isError)
        return React.createElement("div", null, "error...");
    return (React.createElement(components_1.Profile, { type: "My", name: myProfile.name, email: myProfile.email, avatar: myProfile.avatar, properties: myProfile.allProperties }));
};
exports["default"] = MyProfile;
