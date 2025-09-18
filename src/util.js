export default class Util {
    // ananeri => [0] => a
    // first = a, rest = naneri
    static #transform({ str: [first, ...rest], upperCase = true }) {
        if(!first) return ''
        
        const firstLetter = upperCase ?
            first.toUpperCase() :
            first.toLowerCase()

        return [firstLetter, ...rest].join('')
    }

    // i do not save item in memory, cause of this its static
    static upperCaseFirstLetter(str) {
        return Util.#transform({ str })
    }
    static lowerCaseFirstLetter(str) {
        return Util.#transform({ str, upperCase: false })

    }
}