import { test } from "node:test";
import assert from "node:assert/strict";
import HashMap from "../src/hashMap.js";

test("HashMap створюється з початковою місткістю 16", () => {
    const map = new HashMap();

    assert.equal(map.capacity, 16);
    assert.equal(map.length(), 0);
});

test("set() додає ключ і значення ", () => {
    const map = new HashMap();

    map.set("apple", "red");

    assert.equal(map.length(), 1);
    assert.equal(map.get("apple"), "red");
});

test("set() оновлює значення існуючого ключа ", () => {
    const map = new HashMap();

    map.set("apple", "red");
    map.set("apple", "green");

    assert.equal(map.get("apple"), "green");
    assert.equal(map.length(), 1);
});

test("get() повертає undefined для відсутнього ключа", () => {
    const map = new HashMap();

    assert.equal(map.get("banana"), undefined);
});

test("has() перевіряє наявність ключа ", () => {
    const map = new HashMap();

    map.set("apple", "red");

    assert.equal(map.has("apple"), true);
    assert.equal(map.has("banana"), false);
});
test("remove() видаляє існуючий ключ ", () => {
    const map = new HashMap();

    map.set("apple", "red");

    assert.equal(map.remove("apple"), true);
    assert.equal(map.has("apple"), false);
    assert.equal(map.length(), 0);
});

test("remove() повертає false для відсутнього ключа", () => {
    const map = new HashMap();

    map.set("apple", "red");

    assert.equal(map.remove("banana"), false);
    assert.equal(map.length(), 1);
    assert.equal(map.has("apple"), true);
});

test("length() повертає правильну кількість елементів", () => {
    const map = new HashMap();

    map.set("apple", "red");
    map.set("banana", "yellow");
    map.set("carrot", "orange");

    assert.equal(map.length(), 3);
});

test("clear() видаляє всі елементи", () => {
    const map = new HashMap();

    map.set("apple", "red");
    map.set("banana", "yellow");
    map.set("carrot", "orange");

    map.clear();

    assert.equal(map.length(), 0);
    assert.equal(map.has("apple"), false);
    assert.equal(map.has("banana"), false);
    assert.equal(map.has("carrot"), false);
});

test("keys() повертає масив усіх ключів", () => {
    const map = new HashMap();

    map.set("apple", "red");
    map.set("banana", "yellow");
    map.set("carrot", "orange");

    assert.deepEqual(map.keys().sort(), ["apple", "banana", "carrot"]);
});

test("values() повертає масив усіх значень", () => {
    const map = new HashMap();

    map.set("apple", "red");
    map.set("banana", "yellow");
    map.set("carrot", "orange");

    assert.deepEqual(map.values().sort(), ["orange", "red", "yellow"]);
});

test("entries() повертає масив пар ключ-значення", () => {
    const map = new HashMap();

    map.set("apple", "red");
    map.set("banana", "yellow");
    map.set("carrot", "orange");

    const expected = [
        ["apple", "red"],
        ["banana", "yellow"],
        ["carrot", "orange"],
    ];

    const actual = map.entries();

    assert.deepEqual(
        actual.map((entry) => entry.join(":")).sort(),
        expected.map((entry) => entry.join(":")).sort(),
    );
});

test("HashMap збільшує місткість після перевищення loadFactor", () => {
    const map = new HashMap();

    for (let i = 1; i <= 13; i++) {
        map.set(`key${i}`, `value${i}`);
    }

    assert.equal(map.capacity, 32);
    assert.equal(map.length(), 13);

    assert.equal(map.get("key1"), "value1");
    assert.equal(map.get("key13"), "value13");
});

test("set() правильно обробляє колізії", () => {
    const map = new HashMap();

    map.set("a", "first");
    map.set("q", "second");

    assert.equal(map.length(), 2);
    assert.equal(map.get("a"), "first");
    assert.equal(map.get("q"), "second");
});

test("remove() видаляє елемент зі зв’язаного списку", () => {
    const map = new HashMap();

    map.set("a", "first");
    map.set("q", "second");

    assert.equal(map.remove("a"), true);

    assert.equal(map.get("a"), undefined);
    assert.equal(map.get("q"), "second");
    assert.equal(map.length(), 1);
});

test("set() оновлює значення ключа при колізії", () => {
    const map = new HashMap();

    map.set("a", "first");
    map.set("q", "second");

    map.set("q", "updated");

    assert.equal(map.get("a"), "first");
    assert.equal(map.get("q"), "updated");
    assert.equal(map.length(), 2);
});

test("clear() очищає HashMap, зберігаючи поточну місткість", () => {
    const map = new HashMap();

    for (let i = 1; i <= 13; i++) {
        map.set(`key${i}`, `value${i}`);
    }

    assert.equal(map.capacity, 32);

    map.clear();

    assert.equal(map.length(), 0);
    assert.equal(map.capacity, 32);
});

test("resize() зберігає елементи, які мали колізії", () => {
    const map = new HashMap();

    map.set("a", "first");
    map.set("q", "second");

    for (let i = 1; i <= 11; i++) {
        map.set(`key${i}`, `value${i}`);
    }

    assert.equal(map.capacity, 32);
    assert.equal(map.length(), 13);

    assert.equal(map.get("a"), "first");
    assert.equal(map.get("q"), "second");
});
