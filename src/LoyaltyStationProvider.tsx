import * as React from 'react'
import {LoyaltyStationWebview} from './components'
import {WebviewConfig} from "./types";

type Props = {
    config: WebviewConfig,
    goToAuthHandler?: (isSignUp: boolean) => void
}

export const LoyaltyStationProvider: React.FC<Props> = ({children, config, goToAuthHandler}) => {
    return (
        <>
            {children}
            <LoyaltyStationWebview config={config} goToAuth={goToAuthHandler}/>
        </>
    )
}