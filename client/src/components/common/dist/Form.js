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
exports.__esModule = true;
var refine_mui_1 = require("@pankod/refine-mui");
var CustomButton_1 = require("./CustomButton");
var Form = function (_a) {
    var type = _a.type, register = _a.register, handleSubmit = _a.handleSubmit, handleImageChange = _a.handleImageChange, formLoading = _a.formLoading, onFinishHandler = _a.onFinishHandler, propertyImage = _a.propertyImage;
    return (React.createElement(refine_mui_1.Box, null,
        React.createElement(refine_mui_1.Typography, { fontSize: 25, fontWeight: 700, color: "#11142d" },
            type,
            " a Property"),
        React.createElement(refine_mui_1.Box, { mt: 2.5, borderRadius: "15px", padding: "20px", bgcolor: "#fcfcfc" },
            React.createElement("form", { style: {
                    marginTop: "20px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }, onSubmit: handleSubmit(onFinishHandler) },
                React.createElement(refine_mui_1.FormControl, null,
                    React.createElement(refine_mui_1.FormHelperText, { sx: {
                            fontWeight: 500,
                            margin: "10px 0",
                            fontSize: 16,
                            color: "#11142d"
                        } }, "Enter property name"),
                    React.createElement(refine_mui_1.TextField, __assign({ fullWidth: true, required: true, id: "outlined-basic", color: "info", variant: "outlined" }, register("title", { required: true })))),
                React.createElement(refine_mui_1.FormControl, null,
                    React.createElement(refine_mui_1.FormHelperText, { sx: {
                            fontWeight: 500,
                            margin: "10px 0",
                            fontSize: 16,
                            color: "#11142d"
                        } }, "Enter Description"),
                    React.createElement(refine_mui_1.TextareaAutosize, __assign({ minRows: 5, required: true, placeholder: "Write description", color: "info", style: {
                            width: "100%",
                            background: "transparent",
                            fontSize: "16px",
                            borderColor: "rgba(0,0,0,0.23)",
                            borderRadius: 6,
                            padding: 10,
                            color: "#919191"
                        } }, register("description", { required: true })))),
                React.createElement(refine_mui_1.Stack, { direction: "row", gap: 4 },
                    React.createElement(refine_mui_1.FormControl, { sx: { flex: 1 } },
                        React.createElement(refine_mui_1.FormHelperText, { sx: {
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d"
                            } }, "Select Property Type"),
                        React.createElement(refine_mui_1.Select, __assign({ variant: "outlined", color: "info", displayEmpty: true, required: true, inputProps: { "aria-label": "Without label" }, defaultValue: "apartment" }, register("propertyType", {
                            required: true
                        })),
                            React.createElement(refine_mui_1.MenuItem, { value: "apartment" }, "Apartment"),
                            React.createElement(refine_mui_1.MenuItem, { value: "villa" }, "Villa"),
                            React.createElement(refine_mui_1.MenuItem, { value: "farmhouse" }, "farmhouse"),
                            React.createElement(refine_mui_1.MenuItem, { value: "condos" }, "Condos"),
                            React.createElement(refine_mui_1.MenuItem, { value: "townhouse" }, "Townhouse"),
                            React.createElement(refine_mui_1.MenuItem, { value: "duplex" }, "Duplex"),
                            React.createElement(refine_mui_1.MenuItem, { value: "studio" }, "Studio"),
                            React.createElement(refine_mui_1.MenuItem, { value: "chalet" }, "Chalet"))),
                    React.createElement(refine_mui_1.FormControl, null,
                        React.createElement(refine_mui_1.FormHelperText, { sx: {
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d"
                            } }, "Enter property price"),
                        React.createElement(refine_mui_1.TextField, __assign({ fullWidth: true, required: true, id: "outlined-basic", color: "info", type: "number", variant: "outlined" }, register("price", { required: true }))))),
                React.createElement(refine_mui_1.FormControl, null,
                    React.createElement(refine_mui_1.FormHelperText, { sx: {
                            fontWeight: 500,
                            margin: "10px 0",
                            fontSize: 16,
                            color: "#11142d"
                        } }, "Enter Location"),
                    React.createElement(refine_mui_1.TextField, __assign({ fullWidth: true, required: true, id: "outlined-basic", color: "info", variant: "outlined" }, register("location", { required: true })))),
                React.createElement(refine_mui_1.Stack, { direction: "column", gap: 1, justifyContent: "center", mb: 2 },
                    React.createElement(refine_mui_1.Stack, { direction: "row", gap: 2 },
                        React.createElement(refine_mui_1.Typography, { color: "#11142d", fontSize: 16, fontWeight: 500, my: "10px" }, "Property Photo"),
                        React.createElement(refine_mui_1.Button, { component: "label", sx: {
                                width: "fit-content",
                                color: "#2ed480",
                                textTransform: "capitalize",
                                fontSize: 16
                            } },
                            "Upload *",
                            React.createElement("input", { hidden: true, accept: "image/*", type: "file", onChange: function (e) {
                                    handleImageChange(e.target.files[0]);
                                } }))),
                    React.createElement(refine_mui_1.Typography, { fontSize: 14, color: "#808191", sx: { wordBreak: "break-all" } }, propertyImage === null || propertyImage === void 0 ? void 0 : propertyImage.name)),
                React.createElement(CustomButton_1["default"], { type: "submit", title: formLoading ? "Submitting..." : "Submit", backgroundColor: "#475be8", color: "#fcfcfc" })))));
};
exports["default"] = Form;
