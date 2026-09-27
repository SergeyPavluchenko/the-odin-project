function reverseString(word) {
    const reverseWord = word.split('').reverse().join('')
    return reverseWord
}

module.exports = { reverseString }