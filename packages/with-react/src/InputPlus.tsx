import { HTMLInputTypeAttribute, useMemo } from "react";
import { ConfigProvider } from "./context/ConfigProvider";
import { InputPlusPropProvider } from "./context/InputPlusPropContext";
import { useAlreadyExtended } from "./hooks";
import InjectedBaseInput from "./Inject";

export type InputPlusTypeAttribute = HTMLInputTypeAttribute
    | "card" // bank card number
    | "currency" // currency amount
    | "url" // url address
    | "search"; // search input

const defaultConfigProviderComponents = {};
const defaultConfigProviderTokens = {};

export interface InputPlusProps {
    id?: string | number | symbol;
    value?: string;
    onChange?: (value: string) => void;
    type?: InputPlusTypeAttribute;
}

export const InputPlus = (props: InputPlusProps) => {
    const alreadyExtended = useAlreadyExtended();
    if (!alreadyExtended) {
        return (
            <ConfigProvider components={defaultConfigProviderComponents} tokens={defaultConfigProviderTokens}>
                <InputPlusPropProvider value={props}>
                    <InjectedBaseInput />
                </InputPlusPropProvider>
            </ConfigProvider>
        );
    }

    return (
        <InputPlusPropProvider value={props}>
            <InjectedBaseInput type={props.type} />
        </InputPlusPropProvider>
    );
};