import {SDKConfig, User, WebviewConfig} from "./types";
import {constants} from "./constants";
import {Environments, MessageTypes} from "./enum";

/**
 *
 * @param user: User
 * returns the script of user's login
 */
export const loginScript = (user: User): string => {
    return (`
      window.Gamiphy.login(${JSON.stringify(user)})
      true;
    `)
}
/**
 *
 * @param config: SDKConfig
 * returns script of initial of the webview
 */
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
/**
 * returns script of user's logout
 */
export const logoutScript = (): string => {
    return (`
      window.Gamiphy.logout()
      true; 
    `)
}

/**
 *
 * @param env: Environments
 * return: string, of the development environment.
 */
export const getEnvironment = (env?: Environments): string => {
    switch (env) {
        case Environments.DEV:
            return constants.devURL
        default:
            return constants.devURL
    }
}

/**
 *
 * @param webviewConfig: WebviewConfig
 * the mapper needed to map from WebviewConfig to SDKConfig data type,
 *
 */
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
