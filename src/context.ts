import {createContext, useContext} from 'react'
import {User} from "./types";

export type LoyaltyStationContext = {
    open: () => void,
    close: () => void,
    logout: () => void,
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
