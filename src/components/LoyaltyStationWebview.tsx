import * as React from "react";
import {Component, createRef} from "react";
import {LoadingIndicator} from "./LoadingIndicator";
import {AuthMessage, TypedMessage, User, WebviewConfig} from "../types";
import {configMapper, getEnvironment, initScript, loginScript, logoutScript} from "../utils";
import {Environments, MessageTypes} from "../enum";
import {WebView} from "react-native-webview";

export interface Props {
    config: WebviewConfig,
    goToAuth?: (isSignUp: boolean) => void,
    isAuthPage?: () => boolean,
    environment?: Environments
    loadingIndicator?: React.ReactNode
    initScript?: string
}

/**
 *  this is the main component of the SDK, this is holding the Webview of the Loyalty Station
 *
 */
export class LoyaltyStationWebview extends Component<Props> {

    private webviewRef = createRef<WebView>();

    onMessageHandler = (message: TypedMessage) => {
        switch (message.type) {
            case MessageTypes.authMessage:
                this.onAuthMessageHandler(message)
                break
            case MessageTypes.shareMessage:
                break
        }
    }

    logout = () => {
        this.injectScript(logoutScript())
    }

    login = (user: User) => {
        this.injectScript(loginScript(user))
    }

    render() {
        return (
            <WebView
                ref={this.webviewRef}
                source={{uri: getEnvironment(this.props.environment)}}
                renderLoading={() => <LoadingIndicator loadingIndicator={this.props.loadingIndicator}/>}
                startInLoadingState={true}
                javaScriptEnabled={true}
                onLoad={() => {
                    if (this.webviewRef.current) {
                        this.webviewRef.current.injectJavaScript(initScript(configMapper(this.props.config)))
                    }
                }}
                onMessage={event => {
                    this.onMessageHandler(JSON.parse(event.nativeEvent.data))
                }}
            />
        )
    }

    injectScript = (script: string) => {
        this.webviewRef.current?.injectJavaScript(script)
    }

    private onAuthMessageHandler = (message: AuthMessage) => {
        this.props.goToAuth && this.props.goToAuth(message.data.isSignUp)
    }
}
