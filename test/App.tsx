import React, {ReactNode,} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {LoyaltyStationProvider, User, WebviewConfig} from "../src";


const App: () => ReactNode = () => {
    const goToAuth = (isSignUp: boolean) => {
        console.log("goToAuth", isSignUp)
    }

    const user: User = {
        firstName: "Riyad",
        lastName: "Yahya",
        email: "riyad@gamiphy.co",
        hash: "93b2844c18a8804dee394ee73efde8294ad263c1488ab8522d93dfd55dcb65fb"
    }

    const config: WebviewConfig = {
        app: "5f040d7cdbd59b001804c401",
        user: {
            firstName: "Riyad",
            lastName: "Yahya",
            email: "riyad@gamiphy.co",
            hash: "93b2844c18a8804dee394ee73efde8294ad263c1488ab8522d93dfd55dcb65fb"
        }
    }
    return (
        <LoyaltyStationProvider config={config}>
            <SafeAreaView style={{flexDirection: "row", justifyContent: "center"}}>
                <Button title='Init' onPress={() => {
                }}/>
                <Button title='Logout' onPress={() => {
                }}/>
                <Button title='login' onPress={() => {
                }}/>
            </SafeAreaView>
        </LoyaltyStationProvider>
    );
};


export default App;
