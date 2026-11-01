import { test } from "node:test";
import assert from "node:assert/strict";
import LinkedList from "../src/LinkedList.js";

test("at() returns the node at a valid index", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");
    list.append("C");

    assert.equal(list.at(0).value, "A");
    assert.equal(list.at(1).value, "B");
    assert.equal(list.at(2).value, "C");
});

test("at() returns null for invalid indexes", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");

    assert.equal(list.at(-1), null);
    assert.equal(list.at(1.5), null);
    assert.equal(list.at("1"), null);
    assert.equal(list.at(2), null);
});

test("at() returns null for an empty list", () => {
    const list = new LinkedList();

    assert.equal(list.at(0), null);
});