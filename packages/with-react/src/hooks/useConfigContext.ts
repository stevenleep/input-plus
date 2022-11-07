import React from "react";
import ConfigContext, { ConfigProviderProps } from "../context/ConfigContext";
import { useAlreadyExtended } from "./useAlreadyExtended";

export function useConfigContext(): ConfigProviderProps {
    return React.useContext<ConfigProviderProps>(ConfigContext);
}

export function useSafeConfigContext(): ConfigProviderProps {
    const alreadyExtended = useAlreadyExtended();
    if (!alreadyExtended) {
        console.error("You must wrap your app in <ConfigProvider> to use this hook.");
        return {
            components: {},
            tokens: {},
        };
    }

    return useConfigContext();
}