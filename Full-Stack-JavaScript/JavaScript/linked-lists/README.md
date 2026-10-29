# Linked List

A JavaScript implementation of a singly linked list.

## Features

The Linked List provides methods to manage nodes:

- `append(value)` – adds a new node to the end of the list.
- `prepend(value)` – adds a new node to the beginning of the list.
- `size()` – returns the number of nodes.
- `head()` – returns the first node.
- `tail()` – returns the last node.
- `at(index)` – returns the node at the specified index.
- `pop()` – removes the last node.
- `contains(value)` – checks whether the list contains a value.
- `find(value)` – returns the index of a node containing the specified value.
- `toString()` – returns a string representation of the list.

## Indexing

The list uses zero-based indexing.

This means:

- Index `0` refers to the first node.
- Index `1` refers to the second node.
- Index `2` refers to the third node.

## Edge Cases

The following edge cases are handled:

- Negative index: `at(-1)` returns `null`.
- Non-integer index: `at(1.5)` returns `null`.
- Index greater than or equal to the list size: `at(10)` returns `null` if the list contains fewer than 11 nodes.
- Empty list: `at(0)` returns `null`.
- Index `0`: returns the first node.

## Usage

```javascript
const list = new LinkedList();

list.append("A");
list.append("B");
list.append("C");

console.log(list.at(0)); // First node
console.log(list.at(1)); // Second node
console.log(list.at(2)); // Third node
console.log(list.at(5)); // null
```
