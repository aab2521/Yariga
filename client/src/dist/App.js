"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var refine_core_1 = require("@pankod/refine-core");
var refine_mui_1 = require("@pankod/refine-mui");
var icons_material_1 = require("@mui/icons-material");
var refine_simple_rest_1 = require("@pankod/refine-simple-rest");
var refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
var axios_1 = require("axios");
var layout_1 = require("components/layout");
var contexts_1 = require("contexts");
var parse_jwt_1 = require("utils/parse-jwt");
var pages_1 = require("pages");
var axiosInstance = axios_1["default"].create();
axiosInstance.interceptors.request.use(function (request) {
    var token = localStorage.getItem("token");
    if (request.headers) {
        request.headers["Authorization"] = "Bearer " + token;
    }
    else {
        request.headers = {
            Authorization: "Bearer " + token
        };
    }
    return request;
});
function App() {
    var _this = this;
    var authProvider = {
        login: function (_a) {
            var credential = _a.credential;
            return __awaiter(_this, void 0, void 0, function () {
                var profileObj, response, data;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            profileObj = credential ? parse_jwt_1.parseJwt(credential) : null;
                            if (!profileObj) return [3 /*break*/, 3];
                            return [4 /*yield*/, fetch("http://localhost:8080/api/v1/users", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                        name: profileObj.name,
                                        email: profileObj.email,
                                        avatar: profileObj.picture
                                    })
                                })];
                        case 1:
                            response = _b.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _b.sent();
                            if (response.status === 200) {
                                localStorage.setItem("user", JSON.stringify(__assign(__assign({}, profileObj), { avatar: profileObj.picture, userid: data._id })));
                            }
                            else {
                                return [2 /*return*/, Promise.reject()];
                            }
                            _b.label = 3;
                        case 3:
                            localStorage.setItem("token", "" + credential);
                            return [2 /*return*/, Promise.resolve()];
                    }
                });
            });
        },
        logout: function () {
            var _a;
            var token = localStorage.getItem("token");
            if (token && typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                axios_1["default"].defaults.headers.common = {};
                (_a = window.google) === null || _a === void 0 ? void 0 : _a.accounts.id.revoke(token, function () {
                    return Promise.resolve();
                });
            }
            return Promise.resolve();
        },
        checkError: function () { return Promise.resolve(); },
        checkAuth: function () { return __awaiter(_this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                token = localStorage.getItem("token");
                if (token) {
                    return [2 /*return*/, Promise.resolve()];
                }
                return [2 /*return*/, Promise.reject()];
            });
        }); },
        getPermissions: function () { return Promise.resolve(); },
        getUserIdentity: function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                user = localStorage.getItem("user");
                if (user) {
                    return [2 /*return*/, Promise.resolve(JSON.parse(user))];
                }
                return [2 /*return*/];
            });
        }); }
    };
    return (react_1["default"].createElement(contexts_1.ColorModeContextProvider, null,
        react_1["default"].createElement(refine_mui_1.CssBaseline, null),
        react_1["default"].createElement(refine_mui_1.GlobalStyles, { styles: { html: { WebkitFontSmoothing: "auto" } } }),
        react_1["default"].createElement(refine_mui_1.RefineSnackbarProvider, null,
            react_1["default"].createElement(refine_core_1.Refine, { dataProvider: refine_simple_rest_1["default"]("http://localhost:8080/api/v1"), notificationProvider: refine_mui_1.notificationProvider, ReadyPage: refine_mui_1.ReadyPage, catchAll: react_1["default"].createElement(refine_mui_1.ErrorComponent, null), resources: [
                    {
                        name: "properties",
                        list: pages_1.AllProperties,
                        show: pages_1.PropertyDetails,
                        create: pages_1.CreateProperty,
                        edit: pages_1.EditProperty,
                        icon: react_1["default"].createElement(icons_material_1.VillaOutlined, null)
                    },
                    {
                        name: "agents",
                        list: pages_1.Agents,
                        show: pages_1.AgentProfile,
                        icon: react_1["default"].createElement(icons_material_1.PeopleAltOutlined, null)
                    },
                    {
                        name: "reviews",
                        list: pages_1.Home,
                        icon: react_1["default"].createElement(icons_material_1.StarOutlineRounded, null)
                    },
                    {
                        name: "messages",
                        list: pages_1.Home,
                        icon: react_1["default"].createElement(icons_material_1.ChatBubbleOutline, null)
                    },
                    {
                        name: "my-profile",
                        options: { label: "My Profile " },
                        list: pages_1.MyProfile,
                        icon: react_1["default"].createElement(icons_material_1.AccountCircleOutlined, null)
                    },
                ], Title: layout_1.Title, Sider: layout_1.Sider, Layout: layout_1.Layout, Header: layout_1.Header, routerProvider: refine_react_router_v6_1["default"], authProvider: authProvider, LoginPage: pages_1.Login, DashboardPage: pages_1.Home }))));
}
exports["default"] = App;
