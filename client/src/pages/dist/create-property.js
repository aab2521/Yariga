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
var refine_react_hook_form_1 = require("@pankod/refine-react-hook-form");
var refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
var Form_1 = require("components/common/Form");
var CreateProperty = function () {
    var navigate = refine_react_router_v6_1.useNavigate();
    var user = refine_core_1.useGetIdentity().data;
    var _a = react_1.useState({ name: "", url: "" }), propertyImage = _a[0], setPropertyImage = _a[1];
    var _b = refine_react_hook_form_1.useForm(), _c = _b.refineCore, onFinish = _c.onFinish, formLoading = _c.formLoading, register = _b.register, handleSubmit = _b.handleSubmit;
    var handleImageChange = function (file) {
        var reader = function (readFile) {
            return new Promise(function (resolve, reject) {
                var fileReader = new FileReader();
                fileReader.onload = function () { return resolve(fileReader.result); };
                fileReader.readAsDataURL(readFile);
            });
        };
        reader(file).then(function (result) {
            return setPropertyImage({ name: file === null || file === void 0 ? void 0 : file.name, url: result });
        });
    };
    var onFinishHandler = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!propertyImage.name)
                        return [2 /*return*/, alert("Please select an image")];
                    return [4 /*yield*/, onFinish(__assign(__assign({}, data), { photo: propertyImage.url, email: user.email }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(Form_1["default"], { type: "Create", register: register, onFinish: onFinish, formLoading: formLoading, handleSubmit: handleSubmit, handleImageChange: handleImageChange, onFinishHandler: onFinishHandler, propertyImage: propertyImage }));
};
exports["default"] = CreateProperty;
