import { SDKConfig, User, WebviewConfig } from "./types";
import { Environments } from "./enum";
export declare const loginScript: (user: User) => string;
export declare const initScript: (config: SDKConfig) => string;
export declare const logoutScript: () => string;
export declare const getEnvironment: (env?: Environments | undefined) => string;
export declare const configMapper: (webviewConfig: WebviewConfig) => SDKConfig;
