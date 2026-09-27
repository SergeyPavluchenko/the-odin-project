const { caesarCipher } = require("../caesarCipher");

test("shifts letters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
