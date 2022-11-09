function createTypeOfFactory<T>(type: string) {
    return (value: unknown): value is T => typeof value === type;
}

function createObjectOfFactory<T>(type: string): (value: unknown) => value is T {
    return (value: unknown): value is T => Object.prototype.toString.call(value) === `[object ${type}]`;
}

export const types = {
    isFunction: createTypeOfFactory<Function>("function"),
    isBoolean: createTypeOfFactory<boolean>("boolean"),
    isNumber: createTypeOfFactory<number>("number"),
    isString: createTypeOfFactory<string>("string"),

    isRelaxedObject: createTypeOfFactory<object>("object"),
    isStructuredObject: createObjectOfFactory<object>("Object"),
    isDate: createObjectOfFactory<Date>("Date"),
    isRegExp: createObjectOfFactory<RegExp>("RegExp"),
    isMap: createObjectOfFactory<Map<any, any>>("Map"),
    isSet: createObjectOfFactory<Set<any>>("Set"),
    isWeakMap: createObjectOfFactory<WeakMap<any, any>>("WeakMap"),
    isWeakSet: createObjectOfFactory<WeakSet<any>>("WeakSet"),

    isArray: Array.isArray,
    
    isSymbol: createTypeOfFactory<symbol>("symbol"),
    isUndefined: createTypeOfFactory<undefined>("undefined"),
    isNull: (value: unknown): value is null => value === null,
    isNullOrUndefined: (value: unknown): value is null | undefined => value === null || value === undefined,
    isPrimitive: (value: unknown): value is string | number | boolean | symbol | null | undefined => {
        return types.isString(value) || types.isNumber(value) || types.isBoolean(value) || types.isSymbol(value) || types.isNull(value) || types.isUndefined(value);
    },

    notEmptyString,

    isMeaningful,
    isConstructor,
}

function notEmptyString(value: unknown): value is string {
    return types.isString(value) && value.length > 0;
}
function isMeaningful(value: unknown) {
    return value !== null && value !== undefined && value !== "" && value !== false;
}

function isConstructor(value: unknown): value is Function {
    return types.isFunction(value) && types.isString(value.name);
}
