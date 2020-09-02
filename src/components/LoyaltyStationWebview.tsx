import React, {Component, createRef, FunctionComponentElement} from "react";
import WebView from "react-native-webview";
import {LoadingIndicator} from "./LoadingIndicator";
import {AuthMessage, TypedMessage, User, WebviewConfig} from "../types";
import {configMapper, getEnvironment, initScript, loginScript, logoutScript} from "../utils";
import {Environments, MessageTypes} from "../enum";

export interface Props {
    goToAuth?: (isSignUp: boolean) => void,
    isAuthPage?: () => boolean,
    environment?: Environments
    loadingIndicator?: FunctionComponentElement<any> | undefined
    initScript?: string
}

export class LoyaltyStationWebview extends Component<Props> {
    private webView = createRef<WebView>();

    logout = () => {
        this.injectScript(logoutScript())
    }

    login = (user: User) => {
        this.injectScript(loginScript(user))
    }

    init = (webviewConfig: WebviewConfig) => {
        this.injectScript(initScript(configMapper(webviewConfig)))
    }

    render() {
        return (
            <WebView
                ref={this.webView}
                source={{uri: getEnvironment(this.props.environment)}}
                renderLoading={() => <LoadingIndicator loadingIndicator={this.props.loadingIndicator}/>}
                startInLoadingState={true}
                javaScriptEnabled={true}
                onMessage={event => {
                    console.log("event.nativeEvent.data", event.nativeEvent.data)
                    this.onMessageHandler(JSON.parse(event.nativeEvent.data))
                }}
            />
        )
    }

    private onMessageHandler = (message: TypedMessage) => {
        switch (message.type) {
            case MessageTypes.authMessage:
                this.onAuthMessageHandler(message)
                break
            case MessageTypes.shareMessage:
                break
        }
    }

    private onAuthMessageHandler = (message: AuthMessage) => {
        this.props.goToAuth && this.props.goToAuth(message.data.isSignUp)
    }

    private injectScript = (script: string) => {
        this.webView.current?.injectJavaScript(script)
    }
}


