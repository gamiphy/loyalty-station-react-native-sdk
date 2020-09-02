import {FunctionComponentElement} from "react";

export interface Types {
    goToAuth?: (isSignUp: boolean) => void,
    isAuthPage?: () => boolean,
    environment?: ENVIRONMENT
    loadingIndicator?: FunctionComponentElement<any> | undefined
    initScript?: string
}

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

export enum Languages {
    en = 'en',
    es = 'es',
    ar = 'ar'
}


export enum ENVIRONMENT {
    DEV
}

export type Config = {
    app: string,
    user?: User,
    openByDefault?: boolean | undefined,
    barHidden?: boolean | undefined
}


export type WebviewConfig = {
    app: string,
    user?: User | undefined,
    visible?: boolean | undefined,
}


export type AuthMessage = {
    type: MessageType.authMessage
    data: {
        isSignUp: boolean
    }
}


export type ShareMessage = {
    type: MessageType.shareMessage
    data: {}
}

export enum MessageType {
    authMessage = "authMessage",
    shareMessage = "shareMessage",
}


export type TypedStory = AuthMessage | ShareMessage;







