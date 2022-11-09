import React from "react";
import BaseInput from "../BaseInput";

export function TextInput(props: JSX.IntrinsicElements['input']) {
    return <BaseInput inputElement={
        <input type="text" {...props} />}
    />
}
