import React from "react";

export interface ConfigProviderProps {
    components?: {
        [key: string]: any;
    };

    tokens?: {
        [key: string]: string;
    };
}

const ConfigContext = React.createContext<ConfigProviderProps>({});
ConfigContext.displayName = "ConfigContext";

export const ConfigProvider = ConfigContext.Provider;
export const ConfigConsumer = ConfigContext.Consumer;

export default ConfigContext;