const { calculator } = require('../calculator')

test('add numbers', () => {
    expect(calculator.add(2, 5)).toBe(7)
})

test('subtract numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3)
})

test('divide numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3)
})

test('multiply numbers', () => {
    expect(calculator.multiply(2, 5)).toBe(10)
})