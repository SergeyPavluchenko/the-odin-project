import Tree from "./Tree.js";


const tree = new Tree([1, 3, 5, 7, 9])

tree.insert(8)


tree.insert(9)
console.log(tree.root.right.data)