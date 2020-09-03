/// <reference types="react" />
export declare type LoyaltyStationContext = {
    open: () => void;
    close: () => void;
};
export declare const loyaltyStation: import("react").Context<LoyaltyStationContext>;
export declare const LoyaltyStationProvider: import("react").Provider<LoyaltyStationContext>;
export declare const useLoyaltyStation: () => LoyaltyStationContext;
