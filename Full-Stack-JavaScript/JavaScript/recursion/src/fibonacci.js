export function fibs(n) {
    const result = []
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(0)
        } else if (i === 1) {
            result.push(1)
        } else {
            result.push(result[i - 1] + result[i - 2])
        }
    }
    return result
}

export function fibsRec(n) {

    const result = []

    function build() {

        if (result.length >= n) {
            return result
        }

        if (result.length === 0) {
            result.push(0)
        } else if (result.length === 1) {
            result.push(1)
        } else {
            result.push(result[result.length - 2] + result[result.length - 1])
        }
        return build()
    }
    return build()
}

