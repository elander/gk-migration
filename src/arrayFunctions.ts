export const moveItem = <AnyItem>(array: AnyItem[], from: number, to: number) => {
    const item = array[from];
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
}

export function insertItemAtIndex<AnyItem> (
    array: AnyItem[],
    item: AnyItem,
    index: number
) {
    return [...array.slice(0,index), item, ...array.slice(index)];
}

export function removeItemAtIndex<AnyItem>(array: AnyItem[], index: number) {
    return [...array.slice(0,index), ...array.slice(index+1)];
}