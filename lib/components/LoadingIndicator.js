"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingIndicator = void 0;
const React = require("react");
const react_native_1 = require("react-native");
exports.LoadingIndicator = ({ loadingIndicator }) => {
    return (React.createElement(react_native_1.View, { style: styles.root },
        loadingIndicator && (loadingIndicator),
        !loadingIndicator && (React.createElement(react_native_1.ActivityIndicator, { size: 'large' }))));
};
const styles = react_native_1.StyleSheet.create({
    root: {
        flex: 1,
    },
});
