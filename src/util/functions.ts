export function renameKey<T extends Record<string, any>>(
    obj: T,
    oldKey: keyof T,
    newKey: string
): Record<string, any> {
    const { [oldKey]: value, ...rest } = obj;
    return { ...rest, [newKey]: value };
}