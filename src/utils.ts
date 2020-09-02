import {SDKConfig, User, WebviewConfig} from "./types";
import {constants} from "./constants";
import {Environments, MessageTypes} from "./enum";

export const loginScript = (user: User): string => {
    return (`
      window.Gamiphy.login(${JSON.stringify(user)})
      true;
    `)
}

export const initScript = (config: SDKConfig): string => {
    const configString = JSON.stringify(config)
    const configJson = configString.substring(1, configString.length - 1)
    return (`
      window.Gamiphy.init({
          ${configJson},
          goToAuth: (isSignUp) => {
             window.ReactNativeWebView.postMessage(\`{"type": "${MessageTypes.authMessage}", "data": {"isSignUp": \${isSignUp}}}\`)
          }
      })
      true;
    `)
}

export const logoutScript = (): string => {
    return (`
      window.Gamiphy.logout()
      true; 
    `)
}

export const getEnvironment = (env?: Environments): string => {
    switch (env) {
        case Environments.DEV:
            return constants.devURL
        default:
            return constants.devURL
    }
}

export const configMapper = (webviewConfig: WebviewConfig): SDKConfig => {
    return (
        {
            app: webviewConfig.app,
            user: webviewConfig.user,
            barHidden: true,
            openByDefault: true,
        }
    )
}
