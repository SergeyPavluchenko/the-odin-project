import Tree from "./Tree.js";


const tree = new Tree([1, 3, 5, 7, 10, 15, 9])

console.log("inOrder:", tree.inOrder());
console.log("preOrder:", tree.preOrder());
console.log("postOrder:", tree.postOrder());