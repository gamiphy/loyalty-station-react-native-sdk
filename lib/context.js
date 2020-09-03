"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoyaltyStation = exports.LoyaltyStationProvider = exports.loyaltyStation = void 0;
const react_1 = require("react");
exports.loyaltyStation = react_1.createContext({
    open: () => {
    },
    close: () => {
    },
});
exports.LoyaltyStationProvider = exports.loyaltyStation.Provider;
exports.useLoyaltyStation = () => react_1.useContext(exports.loyaltyStation);
