# HashMap

A JavaScript implementation of a HashMap data structure using arrays and linked lists.

## Features

- Hash function using a prime number (31).
- Initial capacity of 16 buckets.
- Load factor of 0.75.
- Automatic resizing when the load factor is exceeded.
- Collision handling using linked lists.
- Methods for adding, retrieving, updating, and removing entries.

## Available Methods

| Method            | Description                             |
| ----------------- | --------------------------------------- |
| `hash(key)`       | Generates an index for a key            |
| `set(key, value)` | Adds or updates a key-value pair        |
| `get(key)`        | Returns the value associated with a key |
| `has(key)`        | Checks if a key exists                  |
| `remove(key)`     | Removes an entry                        |
| `length()`        | Returns the number of entries           |
| `clear()`         | Removes all entries                     |
| `keys()`          | Returns an array of keys                |
| `values()`        | Returns an array of values              |
| `entries()`       | Returns an array of key-value pairs     |

## Installation

Clone the repository:

```bash
git clone https://github.com/SergeyPavluchenko/the-odin-project.git
```

Navigate to the project directory:

```bash
cd the-odin-project/Full-Stack-JavaScript/JavaScript/hashmap
```

Install dependencies:

```bash
npm install
```

## Running
