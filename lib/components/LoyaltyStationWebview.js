"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyStationWebview = void 0;
const React = require("react");
const react_native_webview_1 = require("react-native-webview");
const LoadingIndicator_1 = require("./LoadingIndicator");
const utils_1 = require("../utils");
const enum_1 = require("../enum");
exports.LoyaltyStationWebview = ({ config, environment, loadingIndicator, goToAuth }) => {
    const webviewRef = React.useRef(null);
    const onMessageHandler = (message) => {
        switch (message.type) {
            case enum_1.MessageTypes.authMessage:
                onAuthMessageHandler(message);
                break;
            case enum_1.MessageTypes.shareMessage:
                break;
        }
    };
    const onAuthMessageHandler = (message) => {
        goToAuth && goToAuth(message.data.isSignUp);
    };
    return (React.createElement(react_native_webview_1.WebView, { ref: webviewRef, source: { uri: utils_1.getEnvironment(environment) }, renderLoading: () => React.createElement(LoadingIndicator_1.LoadingIndicator, { loadingIndicator: loadingIndicator }), startInLoadingState: true, javaScriptEnabled: true, onLoad: () => {
            if (webviewRef.current) {
                webviewRef.current.injectJavaScript(utils_1.initScript(utils_1.configMapper(config)));
            }
        }, onMessage: event => {
            onMessageHandler(JSON.parse(event.nativeEvent.data));
        } }));
};
