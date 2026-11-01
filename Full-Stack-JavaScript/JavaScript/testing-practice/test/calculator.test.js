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

test("adds zero", () => {
    expect(calculator.add(5, 0)).toBe(5);
});

test("works with negative numbers", () => {
    expect(calculator.add(-5, -3)).toBe(-8);
    expect(calculator.subtract(-5, -3)).toBe(-2);
    expect(calculator.multiply(-5, 3)).toBe(-15);
});

test("works with decimal numbers", () => {
    expect(calculator.add(1.5, 2.5)).toBe(4);
    expect(calculator.multiply(2.5, 2)).toBe(5);
    expect(calculator.divide(7.5, 2.5)).toBe(3);
});


test('throws an error when dividing by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
});

