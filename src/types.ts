import {Languages, MessageTypes} from "./enum";

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

export type SDKConfig = {
    app: string,
    user?: User,
    openByDefault?: boolean,
    barHidden?: boolean
}

export type WebviewConfig = {
    app: string,
    user?: User,
    visible?: boolean
}

export type AuthMessage = {
    type: MessageTypes.authMessage
    data: {
        isSignUp: boolean
    }
}

export type ShareMessage = {
    type: MessageTypes.shareMessage
    data: {}
}

export type TypedMessage = AuthMessage | ShareMessage;
