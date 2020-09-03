"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configMapper = exports.getEnvironment = exports.logoutScript = exports.initScript = exports.loginScript = void 0;
const constants_1 = require("./constants");
const enum_1 = require("./enum");
exports.loginScript = (user) => {
    return (`
      window.Gamiphy.login(${JSON.stringify(user)})
      true;
    `);
};
exports.initScript = (config) => {
    const configString = JSON.stringify(config);
    const configJson = configString.substring(1, configString.length - 1);
    return (`
      window.Gamiphy.init({
          ${configJson},
          goToAuth: (isSignUp) => {
             window.ReactNativeWebView.postMessage(\`{"type": "${enum_1.MessageTypes.authMessage}", "data": {"isSignUp": \${isSignUp}}}\`)
          }
      })
      true;
    `);
};
exports.logoutScript = () => {
    return (`
      window.Gamiphy.logout()
      true; 
    `);
};
exports.getEnvironment = (env) => {
    switch (env) {
        case enum_1.Environments.DEV:
            return constants_1.constants.devURL;
        default:
            return constants_1.constants.devURL;
    }
};
exports.configMapper = (webviewConfig) => {
    return ({
        app: webviewConfig.app,
        user: webviewConfig.user,
        barHidden: true,
        openByDefault: true,
    });
};
