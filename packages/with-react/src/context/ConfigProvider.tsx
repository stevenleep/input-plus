import React from "react";
import ConfigContext, { ConfigProviderProps } from "./ConfigContext";
import { safeRenderElement } from "../helpers";
import { ENABLED_CONFIG_PROVIDER, setConfigProvider } from "./ConfigFeatureFlags";

export const ConfigProvider: React.FC<React.PropsWithChildren<ConfigProviderProps>> = (props) => {
    React.useEffect(() => {
        if (!ENABLED_CONFIG_PROVIDER) {
            setConfigProvider(true);
        }
    }, []);

    const { children, components, ...rest } = props;
    // cache the components in a ref so that it doesn't trigger a re-render
    const { current: cachedConfigProviderComponents } = React.useRef<ConfigProviderProps['components']>(props.components);

    return (
        <ConfigContext.Provider
            value={{
                components: cachedConfigProviderComponents,
                ...rest,
            }}
        >
            {safeRenderElement(children)}
        </ConfigContext.Provider>
    );
}
