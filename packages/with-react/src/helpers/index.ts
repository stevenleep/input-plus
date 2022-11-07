import React from "react";

export function safeRenderElement(element?:unknown) {
    return element && React.isValidElement(element) ? element : null;
}
