import Tree from "./Tree.js";


const tree = new Tree([1, 3, 5, 7, 9])

console.log(tree.includes(7))
console.log(tree.includes(100))
console.log(tree.includes(5))