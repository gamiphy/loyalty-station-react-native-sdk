"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyStation = void 0;
const React = require("react");
const components_1 = require("./components");
const react_native_1 = require("react-native");
const context_1 = require("./context");
exports.LoyaltyStation = ({ children, config, goToAuthHandler }) => {
    const [open, setOpen] = React.useState(false);
    return (React.createElement(context_1.LoyaltyStationProvider, { value: {
            open: () => setOpen(true),
            close: () => setOpen(false),
        } },
        children,
        React.createElement(react_native_1.SafeAreaView, { style: open ? [styles.webviewContainer, styles.opened] : [styles.webviewContainer] },
            React.createElement(components_1.LoyaltyStationWebview, { config: config, goToAuth: goToAuthHandler }))));
};
const styles = react_native_1.StyleSheet.create({
    webviewContainer: {
        position: "absolute",
        top: '100%',
        left: 0,
        width: '100%',
        height: '100%'
    },
    opened: {
        top: 0
    },
});
