import React from "react";
import { safeRenderElement, types } from "./helpers";

export type BaseInputProps = {
    id?: string | number | symbol;
    addonBefore?: React.ReactElement;
    addonAfter?: React.ReactElement;
    inputElement?: React.ReactElement;
    style?: React.CSSProperties;
    wrapperClassName?: string;
    customRender?: (baseInputProps: BaseInputProps) => React.ReactElement;
}

const BaseInput: React.FC<BaseInputProps> = (props: BaseInputProps) => {
    const { addonBefore, addonAfter, inputElement, customRender } = props;

    // If a custom render function is provided, use it to render the component
    if (types.isMeaningful(customRender) && types.isFunction(customRender)) {
        return customRender(props);
    }

    // Otherwise, render the component using the default render function
    return (
        <div className={`input-plus ${props.wrapperClassName}`} style={props.style}>
            {addonBefore && <div className="input-plus-addon-before"> {safeRenderElement(addonBefore)}</div>}
            <div className="input-plus-input-element">{safeRenderElement(inputElement)}</div>
            {addonAfter && <div className="input-plus-addon-after">{safeRenderElement(addonAfter)}</div>}
        </div>
    );
};

export default BaseInput;