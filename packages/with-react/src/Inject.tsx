import React from "react";
import { InputPlusTypeAttribute } from "./InputPlus";
import BaseInput from "./BaseInput";
import { useUserComponent } from "./hooks/useUserComponent";

interface InjectProps {
    type?: InputPlusTypeAttribute
}

const InjectedBaseInput: React.FC<React.PropsWithChildren<InjectProps>> = (props) => {
    // user custom component
    const schema = useUserComponent(props.type);

    // TODO: use schema to render
    // if no custom component, use built-in components

    return (
        <React.Fragment>
            <BaseInput {...schema} />
        </React.Fragment>
    );
};

export default InjectedBaseInput;