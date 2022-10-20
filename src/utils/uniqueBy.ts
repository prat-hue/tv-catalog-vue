export const uniqueBy = (array: any, key: string) => {
    return array.map((entity: any) => entity[key])
        .reduce((a: any, b: any) => {
            return a.concat(b);
        })
        .filter((value: any, index: any, self: any) => self.indexOf(value) === index)
}
