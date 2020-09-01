import React, {ReactNode,} from 'react';
import {StyleSheet} from 'react-native';
import LoyaltyStationWebview from "./sdk/webview/LoyaltyStationWebview";


const App: () => ReactNode = () => {
    return (
        <>
            <LoyaltyStationWebview/>
        </>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default App;
