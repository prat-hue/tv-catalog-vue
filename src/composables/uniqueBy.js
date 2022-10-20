export function useUniqueBy(array, key) {
    return array.map(entity => entity[key])
        .reduce((a, b) => {
            return a.concat(b);
        })
        .filter((value, index, self) => self.indexOf(value) === index)
}
