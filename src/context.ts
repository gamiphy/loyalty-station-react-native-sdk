import {createContext, useContext} from 'react'

export type LoyaltyStationContext = {
    open: () => void,
    close: () => void,
}

export const loyaltyStation = createContext<LoyaltyStationContext>({
    open: () => {
    },
    close: () => {
    },
});

export const LoyaltyStationProvider = loyaltyStation.Provider;
export const useLoyaltyStation = (): LoyaltyStationContext => useContext(loyaltyStation);
