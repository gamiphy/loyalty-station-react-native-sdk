import { Languages, MessageTypes } from "./enum";
export declare type User = {
    id?: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    language?: Languages;
    country?: string;
    hash: string;
};
export declare type SDKConfig = {
    app: string;
    user?: User;
    openByDefault?: boolean | undefined;
    barHidden?: boolean | undefined;
};
export declare type WebviewConfig = {
    app: string;
    user?: User | undefined;
    visible?: boolean | undefined;
};
export declare type AuthMessage = {
    type: MessageTypes.authMessage;
    data: {
        isSignUp: boolean;
    };
};
export declare type ShareMessage = {
    type: MessageTypes.shareMessage;
    data: {};
};
export declare type TypedMessage = AuthMessage | ShareMessage;
