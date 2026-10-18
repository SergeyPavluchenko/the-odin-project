function mergeSort(arr) {


    if (arr.length <= 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    const margeLeft = mergeSort(left)
    const margeRight = mergeSort(right)
    return marge(margeLeft, margeRight)

    function marge(left, right) {
        const result = []
        let i = 0
        let j = 0

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i])
                i++
            } else {
                result.push(right[j])
                j++
            }
        }

        while (i < left.length) {
            result.push(left[i])
            i++
        }
        while (j < right.length) {
            result.push(right[j])
            j++
        }
        return result
    }

}

export default mergeSort