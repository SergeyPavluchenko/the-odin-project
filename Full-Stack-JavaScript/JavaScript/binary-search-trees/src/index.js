import Tree from "./Tree.js";


const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 31, 67, 6345, 324, 53, 54, 55, 56])


tree.insert(10000);
tree.insert(20000);
tree.insert(30000);
tree.insert(40000);

console.log("Before:", tree.isBalanced());

tree.rebalance();

console.log("After:", tree.isBalanced());