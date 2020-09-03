import * as React from 'react'
import {LoyaltyStationWebview} from './components'
import {WebviewConfig} from "./types";
import {SafeAreaView, StyleSheet} from "react-native";
import {LoyaltyStationProvider} from './context'

type Props = {
    config: WebviewConfig,
    goToAuthHandler?: (isSignUp: boolean) => void
}

export const LoyaltyStation: React.FC<Props> = ({children, config, goToAuthHandler}) => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <LoyaltyStationProvider
            value={{
                open: () => setOpen(true),
                close: () => setOpen(false),
            }}
        >
            {children}
            <SafeAreaView style={open ? [styles.webviewContainer, styles.opened] : [styles.webviewContainer]}>
                <LoyaltyStationWebview config={config} goToAuth={goToAuthHandler}/>
            </SafeAreaView>
        </LoyaltyStationProvider>
    )
};

const styles = StyleSheet.create({
    webviewContainer: {
        position: "absolute",
        top: '100%',
        left: 0,
        width: '100%',
        height: '100%'
    },
    opened: {
        top: 0
    },
})
