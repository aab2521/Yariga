"use strict";
exports.__esModule = true;
var refine_mui_1 = require("@pankod/refine-mui");
var CustomButton = function (_a) {
    var type = _a.type, title = _a.title, backgroundColor = _a.backgroundColor, color = _a.color, fullWidth = _a.fullWidth, icon = _a.icon, handleClick = _a.handleClick, disabled = _a.disabled;
    return (React.createElement(refine_mui_1.Button, { disabled: disabled, type: type === "submit" ? "submit" : "button", sx: {
            flex: fullWidth ? 1 : "unset",
            padding: "10px 15px",
            width: fullWidth ? "100%" : "fit-content",
            minWidth: 130,
            backgroundColor: backgroundColor,
            color: color,
            fontSize: 16,
            fontWeight: 600,
            gap: "10px",
            textTransform: "capitalize",
            "&:hover": {
                opacity: 0.9,
                backgroundColor: backgroundColor
            }
        }, onClick: handleClick },
        icon,
        title));
};
exports["default"] = CustomButton;
