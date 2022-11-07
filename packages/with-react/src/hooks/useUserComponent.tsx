import React from "react";
import { InputPlusTypeAttribute } from "../InputPlus";
import { useSafeConfigContext } from "./useConfigContext";

export function useUserComponent(type?: InputPlusTypeAttribute | string) {
    const { components } = useSafeConfigContext();
    if (!components || !type) {
        return null;
    }
    return React.useMemo(() => components[type], [components, type]);
}