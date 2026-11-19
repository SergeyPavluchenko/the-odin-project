import Node from "./Node.js";

class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }

    buildTree(array) {

        if (array.length === 0) {
            return null
        }

        const mid = Math.floor(array.length / 2)
        const root = new Node(array[mid])
        const left = array.slice(0, mid)
        const right = array.slice(mid + 1)

        root.left = this.buildTree(left)
        root.right = this.buildTree(right)

        return root

    }

}




export default Tree