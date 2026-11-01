const { analyzeArray } = require("../analyzeArray");

test("array elements", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("throws an error for an empty array", () => {
  expect(() => analyzeArray([])).toThrow("Array must not be empty");
});

test('works with an array containing one element)', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  })
});

test("works with negative numbers", () => {
  expect(analyzeArray([-5, -2, -10])).toEqual({
    average: (-5 - 2 - 10) / 3,
    min: -10,
    max: -2,
    length: 3,
  });
});

test("works with decimal numbers", () => {
  expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
    average: 2.5,
    min: 1.5,
    max: 3.5,
    length: 3,
  });
});