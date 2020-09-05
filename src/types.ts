import {Languages, MessageTypes} from "./enum";

/**
 * User data type
 */
export type User = {
    id?: string,
    email: string,
    firstName?: string,
    lastName?: string,
    avatar?: string,
    language?: Languages,
    country?: string,
    hash: string,
}
/**
 * SDK configuration will send to the backend.
 */
export type SDKConfig = {
    app: string,
    user?: User,
    openByDefault?: boolean,
    barHidden?: boolean
}
/**
 * config available for the app.
 */
export type WebviewConfig = {
    app: string,
    user?: User,
    visible?: boolean
}

/**
 * Auth Message represented as a data type to indicate for the catch auth message from the webview
 */
export type AuthMessage = {
    type: MessageTypes.authMessage
    data: {
        isSignUp: boolean
    }
}
/**
 * share Message represented as a scheme to indicate for the catch share message from the webview
 */
export type ShareMessage = {
    type: MessageTypes.shareMessage
    data: {}
}


/**
 * TypedMessage is one of the following types:
 *  1. AuthMessage
 *  2. ShareMessage
 */
export type TypedMessage = AuthMessage | ShareMessage;
