const { capitalize } = require("../capitalize");

test("capitalized first letter", () => {
    expect(capitalize('hallo')).toBe("Hallo");
});
test("handles an empty string", () => {
    expect(capitalize("")).toBe("");
});

test("does not change an already capitalized word", () => {
    expect(capitalize("Hello")).toBe("Hello");
});

test("preserves the case of the remaining letters", () => {
    expect(capitalize("hELLo")).toBe("HELLo");
});








































