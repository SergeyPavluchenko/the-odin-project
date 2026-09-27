function caesarCipher(text, shift) {

    const result = []


    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char >= 'A' && char <= 'Z') {
            const code = char.charCodeAt(0)
            const position = code - 65
            const newPosition = (position + shift) % 26 + 65
            const newBigSymbol = String.fromCharCode(newPosition)
            result.push(newBigSymbol)
        } else if (char >= 'a' && char <= 'z') {
            const code = char.charCodeAt(0)
            const position = code - 97
            const newPosition = (position + shift) % 26 + 97
            const newSymbol = String.fromCharCode(newPosition)
            result.push(newSymbol)
        } else {
            result.push(char)
        }
    }
    return result.join('')

}

module.exports = { caesarCipher }