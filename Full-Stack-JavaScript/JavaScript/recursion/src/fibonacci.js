function fibs(n) {
    const result = []
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(i)
        } else if (i === 1) {
            result.push(1)
        } else {
            result.push(result[i - 1] + result[i - 2])
        }
    }
    return result
}


export default fibs