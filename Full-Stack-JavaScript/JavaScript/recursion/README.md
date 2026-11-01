# Recursion

This project is part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

The goal of this project is to practice recursion and understand how recursive algorithms work.

## Features

### Fibonacci Sequence

Two functions are implemented to generate a Fibonacci sequence:

- **`fibs(n)`** – generates a Fibonacci sequence using an iterative approach (a `for` loop).
- **`fibsRec(n)`** – generates a Fibonacci sequence using recursion.

Both functions return an array containing the first `n` numbers of the Fibonacci sequence.

Example:

```javascript
fibs(8);
// [0, 1, 1, 2, 3, 5, 8, 13]

fibsRec(8);
// [0, 1, 1, 2, 3, 5, 8, 13]
```

### Merge Sort

The project also includes:

- **`mergeSort(arr)`** – sorts an array of numbers using the recursive Merge Sort algorithm.

The algorithm divides the array into smaller parts, sorts them recursively, and then merges the sorted parts.

Example:

```javascript
mergeSort([5, 3, 1, 4, 2]);
// [1, 2, 3, 4, 5]
```

The original array is not modified.

## Input Validation

The Fibonacci functions accept only non-negative safe integers.

- Negative numbers are rejected.
- Decimal numbers are rejected.
- Non-numeric values are rejected.
- `NaN` and `Infinity` are rejected.

Invalid input causes an error to be thrown.

## Edge Cases

| Input            | Result                      |
| ---------------- | --------------------------- |
| `fibs(0)`        | `[]`                        |
| `fibs(1)`        | `[0]`                       |
| `fibs(2)`        | `[0, 1]`                    |
| `fibs(8)`        | `[0, 1, 1, 2, 3, 5, 8, 13]` |
| `mergeSort([])`  | `[]`                        |
| `mergeSort([1])` | `[1]`                       |

## Limitations

The recursive Fibonacci implementation may exceed the JavaScript call stack limit for large values of `n`.

JavaScript numbers also have limited integer precision. Fibonacci values beyond `Number.MAX_SAFE_INTEGER` may not be represented exactly.

## Technologies

- JavaScript
- Recursion
- Arrays
- Merge Sort
- Webpack

## Learning Objectives

- Understand recursion and base cases.
- Practice iterative and recursive solutions.
- Work with arrays and array methods.
- Understand the Divide and Conquer approach.
- Implement the Merge Sort algorithm.

Installation and Usage

Install dependencies:

npm install

Start the development server:

npm run dev

Build the project:

npm run build

Run tests:

npm test
