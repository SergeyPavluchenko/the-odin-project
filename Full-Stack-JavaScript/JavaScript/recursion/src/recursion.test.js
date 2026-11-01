import { test } from "node:test";
import assert from "node:assert";

import { fibs, fibsRec } from "./fibonacci.js";
import mergeSort from "./sort.js";

test('fibs and fibsRec return correct Fibonacci sequences', () => {
    const cases = [
        [0, []],
        [1, [0]],
        [2, [0, 1]],
        [8, [0, 1, 1, 2, 3, 5, 8, 13]]
    ];
    for (const [n, expected] of cases) {
        assert.deepEqual(fibs(n), expected)
        assert.deepEqual(fibsRec(n), expected)
    }
});

test("Fibonacci functions reject invalid input", () => {
    for (const n of [-1, 2.5, NaN, Infinity]) {
        assert.throws(() => fibs(n, RangeError));
        assert.throws(() => fibsRec(n, RangeError));
    }
    assert.throws(() => fibs("hello"), TypeError);
    assert.throws(() => fibsRec("hello"), TypeError);
});

test("mergeSort sorts different arrays correctly", () => {
    const cases = [
        [[], []],
        [[1], [1]],
        [[3, 1, 3, 2], [1, 2, 3, 3]],
        [[-5, 3, -1, 0], [-5, -1, 0, 3]],
        [[1, 2, 3], [1, 2, 3]],
        [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5]]
    ];

    for (const [input, expected] of cases) {
        assert.deepEqual(mergeSort(input), expected);
    }
});

test("mergeSort does not modify the original array", () => {
    const original = [5, 3, 1, 4, 2];
    const copy = [...original];

    mergeSort(original);

    assert.deepEqual(original, copy);
});