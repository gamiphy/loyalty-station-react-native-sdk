import React, {Component, createRef} from "react";
import WebView from "react-native-webview";
import {LoadingIndicator} from "./LoadingIndicator";
import {AuthMessage, MessageType, TypedStory, Types, User, WebviewConfig} from "../types";
import {configMapper, getEnvironment, initScript, loginScript, logoutScript} from "../utils";


export class LoyaltyStationWebview extends Component<Types> {
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

    private onMessageHandler = (message: TypedStory) => {
        switch (message.type) {
            case MessageType.authMessage:
                this.onAuthMessageHandler(message)
                break
            case MessageType.shareMessage:
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


