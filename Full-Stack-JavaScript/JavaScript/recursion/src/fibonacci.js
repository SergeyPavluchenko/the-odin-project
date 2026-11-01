function validateInput(n) {
    if (typeof n !== "number") {
        throw new TypeError("n must be a number");
    }

    if (!Number.isSafeInteger(n) || n < 0) {
        throw new RangeError("n must be a non-negative safe integer");

    }
}

export function fibs(n) {
    validateInput(n);
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
    validateInput(n);

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

