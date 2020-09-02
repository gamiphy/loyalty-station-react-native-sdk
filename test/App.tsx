import React, {ReactNode, useEffect, useRef,} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {LoyaltyStationWebview, User, WebviewConfig} from "../src";


const App: () => ReactNode = () => {
    const loyaltyWebview = useRef<LoyaltyStationWebview>(null)

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

    useEffect(() => {
        loyaltyWebview.current?.init(config) // take user and
    }, [])

    return (
        <>
            <SafeAreaView style={{flexDirection: "row", justifyContent: "center"}}>
                <Button title='Init' onPress={() => {
                    loyaltyWebview.current?.init(config) // take user and
                }}/>
                <Button title='Logout' onPress={() => {
                    loyaltyWebview.current?.logout()
                }}/>
                <Button title='login' onPress={() => {
                    loyaltyWebview.current?.login(user)
                }}/>
            </SafeAreaView>

            <LoyaltyStationWebview ref={loyaltyWebview} goToAuth={(isSignUp: boolean) => goToAuth(isSignUp)}/>

        </>
    );
};


export default App;
