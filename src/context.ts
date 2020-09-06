import {createContext, useContext} from 'react'
import {User} from "./types";

/**
 * Loyalty Station Context provides the following functionality to use in your injected component.
 */
export type LoyaltyStationContext = {
    /**
     * To open the Loyalty Station Webview
     */
    open: () => void,

    /**
     *  To close the Loyalty Station Webview
     */
    close: () => void,

    /**
     *  To logout the User form the user's session
     */
    logout: () => void,

    /**
     *
     * @param user
     *
     * To Login the user.
     */
    login: (user: User) => void,
}

export const loyaltyStation = createContext<LoyaltyStationContext>({
    open: () => {
    },
    close: () => {
    },
    logout: () => {
    },
    login: (user: User) => {
    },
});

export const LoyaltyStation = loyaltyStation.Provider;
export const useLoyaltyStation = (): LoyaltyStationContext => useContext(loyaltyStation);
