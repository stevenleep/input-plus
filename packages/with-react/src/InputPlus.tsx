import React from 'react';

export interface InputPlusProps {
    value: string;
    onChange: (value: string) => void;
}

export const InputPlus = (props: InputPlusProps) => {
    return (
        <div>
            <input value={props.value} onChange={(e) => {
                props.onChange(e.target.value);
            }} />
        </div>
    );
};