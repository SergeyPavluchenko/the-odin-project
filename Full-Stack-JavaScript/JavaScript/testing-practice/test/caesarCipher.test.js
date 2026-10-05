const { caesarCipher } = require("../caesarCipher");

test("shifts letters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles negative shift", () => {
  expect(caesarCipher("ABC xyz", -1)).toBe("ZAB wxy");
});
