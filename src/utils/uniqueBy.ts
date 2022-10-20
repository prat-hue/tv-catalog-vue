export const uniqueBy = (array: Record<string, any>, key: string) => {
    return [...new Set([].concat(...array.map((item: any) => item[key])))].filter(item => !!item)
}
