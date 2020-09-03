import * as React from "react";
import { WebviewConfig } from "../types";
import { Environments } from "../enum";
export interface Props {
    config: WebviewConfig;
    goToAuth?: (isSignUp: boolean) => void;
    isAuthPage?: () => boolean;
    environment?: Environments;
    loadingIndicator?: React.ReactNode;
    initScript?: string;
}
export declare const LoyaltyStationWebview: React.FC<Props>;
