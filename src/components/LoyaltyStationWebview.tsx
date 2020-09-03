import * as React from "react";
import {WebView} from "react-native-webview";
import {LoadingIndicator} from "./LoadingIndicator";
import {AuthMessage, TypedMessage, WebviewConfig} from "../types";
import {configMapper, getEnvironment, initScript} from "../utils";
import {Environments, MessageTypes} from "../enum";

export interface Props {
    config: WebviewConfig,
    goToAuth?: (isSignUp: boolean) => void,
    isAuthPage?: () => boolean,
    environment?: Environments
    loadingIndicator?: React.ReactNode
    initScript?: string
}

export const LoyaltyStationWebview: React.FC<Props> = ({
                                                           config,
                                                           environment,
                                                           loadingIndicator,
                                                           goToAuth
                                                       }) => {
    const webviewRef = React.useRef<WebView>(null);

    const onMessageHandler = (message: TypedMessage) => {
        switch (message.type) {
            case MessageTypes.authMessage:
                onAuthMessageHandler(message)
                break
            case MessageTypes.shareMessage:
                break
        }
    }

    const onAuthMessageHandler = (message: AuthMessage) => {
        goToAuth && goToAuth(message.data.isSignUp)
    }

    return (
        <WebView
            ref={webviewRef}
            source={{uri: getEnvironment(environment)}}
            renderLoading={() => <LoadingIndicator loadingIndicator={loadingIndicator}/>}
            startInLoadingState={true}
            javaScriptEnabled={true}
            onLoad={() => {
                if (webviewRef.current) {
                    webviewRef.current.injectJavaScript(initScript(configMapper(config)))
                }
            }}
            onMessage={event => {
                onMessageHandler(JSON.parse(event.nativeEvent.data))
            }}
        />
    )
}
