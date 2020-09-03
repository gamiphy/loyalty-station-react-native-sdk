import * as React from 'react';
import { WebviewConfig } from "./types";
declare type Props = {
    config: WebviewConfig;
    goToAuthHandler?: (isSignUp: boolean) => void;
};
export declare const LoyaltyStation: React.FC<Props>;
export {};
