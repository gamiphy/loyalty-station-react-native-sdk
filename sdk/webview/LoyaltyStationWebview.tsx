import React, {useRef, useState} from "react";
import {ActivityIndicator, Button, SafeAreaView, StyleSheet, View} from "react-native";
import WebView from "react-native-webview";
import {WebViewNavigation} from "react-native-webview/lib/WebViewTypes";

interface Props {

}

export const LoyaltyStationWebview: React.FC<Props> = () => {
    const webView = useRef<WebView>(null);
    const [script, setScript] = useState<string>()

    const loadingIndicatorView = () => {
        return (
            <View style={styles.root}>
                <ActivityIndicator color='#009b88' size='large'/>
            </View>
        )
    }


    const myHtmlFile = require("./gamix.html");

    const handleWebViewNavigationStateChange = (newNavState: WebViewNavigation) => {
        console.log("newNavState", newNavState)
    }


    const runFirst = `
        window.Gamiphy.init({
            app: "5f040d7cdbd59b001804c401",
        })
      true; // note: this is required, or you'll sometimes get silent failures
    `;


    const html = `
      <html>
      <head>
      <script src='https://sdk.dev.gamiphy.co' async></script>
       <script>
        
    </script>
      </head>
      </html>
    `;


    // TODO this not working for android.
    return (
        <>
            <SafeAreaView>
                <Button title='Riyad' onPress={() => {
                    //@ts-ignore
                    webView.current.injectJavaScript('window.Gamiphy.init({\n                app: "5f040d7cdbd59b001804c401",openByDefault: true })')
                }}/>
            </SafeAreaView>

            <WebView
                ref={webView}
                style={{marginTop: 40}}
                source={{html: html, baseUrl: 'https://sdk.dev.gamiphy.co'}}
                // injectedJavaScript={script}
                // injectedJavaScript={script}
                // for loading
                renderLoading={loadingIndicatorView}
                startInLoadingState={true}
            />
        </>

    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});


export default LoyaltyStationWebview;


