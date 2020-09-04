import * as React from 'react'
import {LoyaltyStationWebview} from './components'
import {User, WebviewConfig} from "./types";
import {SafeAreaView, StyleSheet} from "react-native";
import {LoyaltyStation} from './context'

type Props = {
    config: WebviewConfig,
    goToAuthHandler?: (isSignUp: boolean) => void
}

export const LoyaltyStationProvider: React.FC<Props> = ({children, config, goToAuthHandler}) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const webviewRef = React.useRef<LoyaltyStationWebview>(null);

    return (
        <LoyaltyStation
            value={{
                open: () => setOpen(true),
                close: () => setOpen(false),
                logout: () => {
                    webviewRef.current?.logout()
                },
                login: (user: User) => {
                    webviewRef.current?.login(user)
                }
            }}
        >
            {children}
            <SafeAreaView style={open ? [styles.webviewContainer, styles.opened] : [styles.webviewContainer]}>
                <LoyaltyStationWebview ref={webviewRef} config={config} goToAuth={goToAuthHandler}/>
            </SafeAreaView>
        </LoyaltyStation>
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
