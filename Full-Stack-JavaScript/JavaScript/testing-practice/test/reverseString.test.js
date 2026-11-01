const { reverseString } = require("../reverseString")


test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test("handles an empty string", () => {
    expect(reverseString("")).toBe("");
});

test("preserves spaces", () => {
    expect(reverseString("a b")).toBe("b a");
});

test("reverses punctuation", () => {
    expect(reverseString("hello!")).toBe("!olleh");
});

test("handles repeated characters", () => {
    expect(reverseString("aabb")).toBe("bbaa");
});