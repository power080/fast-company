export function paginate(items, pageNumber, pageSize) {
    const sartIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(sartIndex, pageSize);
}
