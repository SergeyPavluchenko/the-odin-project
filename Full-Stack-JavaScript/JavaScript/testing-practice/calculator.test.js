const subtract = require('./calculator')


test('відняти два числа', () => {
    expect(subtract(10, 4)).toBe(6)
})