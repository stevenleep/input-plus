export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function decapitalize(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1)
}

export function pascalCase(str: string): string {
    return str.split('-').map(capitalize).join('')
}

export function camelCase(str: string): string {
    return str.split('-').map(capitalize).map(decapitalize).join('')
}