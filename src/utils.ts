import {Config, ENVIRONMENT, MessageType, User, WebviewConfig} from "./types";
import {constants} from "./constants";

export const loginScript = (user: User): string => {
    return (`
      window.Gamiphy.login(${JSON.stringify(user)})
      true;
    `)
}

export const initScript = (config: Config): string => {
    const configString = JSON.stringify(config)
    const configJson = configString.substring(1, configString.length - 1)
    return (`
      window.Gamiphy.init({
          ${configJson},
          goToAuth: (isSignUp) => {
             window.ReactNativeWebView.postMessage(\`{"type": "${MessageType.authMessage}", "data": {"isSignUp": \${isSignUp}}}\`)
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

export const getEnvironment = (env?: ENVIRONMENT): string => {
    switch (env) {
        case ENVIRONMENT.DEV:
            return constants.devURL
        default:
            return constants.devURL
    }
}

export const configMapper = (webviewConfig: WebviewConfig): Config => {
    return (
        {
            app: webviewConfig.app,
            user: webviewConfig.user,
            barHidden: true,
            openByDefault: true,
        }
    )
}
