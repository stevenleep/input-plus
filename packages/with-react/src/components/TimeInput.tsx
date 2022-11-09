import React from "react";
import { types } from "../helpers";
import { TextInput } from "./TextInput";

function TimeInput(props: JSX.IntrinsicElements['input'] & { type: "time" }, ref: React.Ref<{
    updateCurrentValue: () => void;
    setTime: (time: string) => void;
    getTime: () => string;
}>) {
    const { type, ...rest } = props;

    const initialVal = props.value || props.defaultValue;

    // initial value is 00:00
    const [value, setValue] = React.useState(initialVal || "00:00");

    // exports api to parent component
    React.useImperativeHandle(ref, () => ({
        updateCurrentTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setValue(`${hours}:${minutes}`);
        },

        setTime(time: string | Date) {
            if (time instanceof Date) {
                const hours = time.getHours().toString().padStart(2, "0");
                const minutes = time.getMinutes().toString().padStart(2, "0");
                setValue(`${hours}:${minutes}`);
            } else {
                setValue(time || "00:00");
            }
        },

        getTime() {
            return value;
        }
    }));


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 2) {
            e.target.value += ":";
        }

        // only allow 00:00 to 23:59
        const regex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
        if (regex.test(e.target.value)) {
            setValue(e.target.value);
        }

        if (props.onChange) {
            props.onChange(e);
        }

    }

    return <TextInput {...rest} value={value} onChange={handleChange} />
}

export default React.forwardRef(TimeInput);