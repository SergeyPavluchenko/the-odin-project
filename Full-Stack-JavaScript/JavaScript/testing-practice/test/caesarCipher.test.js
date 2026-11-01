const { caesarCipher } = require("../caesarCipher");

test("shifts letters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles negative shift", () => {
  expect(caesarCipher("ABC xyz", -1)).toBe("ZAB wxy");
});

test("wraps around the alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("handles zero shift", () => {
  expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!");
});

test("handles shifts greater than 26", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});

test("preserves punctuation and letter case", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});