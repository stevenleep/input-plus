import React from "react";
import { InputPlusProps } from "..";

const InputPlusPropContext = React.createContext<InputPlusProps>({});
export default InputPlusPropContext;
export const InputPlusPropProvider = InputPlusPropContext.Provider;
export const InputPlusPropConsumer = InputPlusPropContext.Consumer;