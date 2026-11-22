import Node from "./Node.js";

class Tree {
    constructor(array) {
        this.root = this.buildTree(array)
    }

    buildTree(array) {
        const sortedArray = [...new Set(array)].sort((a, b) => a - b)

        if (sortedArray.length === 0) {
            return null
        }

        const mid = Math.floor(sortedArray.length / 2)
        const root = new Node(sortedArray[mid])
        const left = sortedArray.slice(0, mid)
        const right = sortedArray.slice(mid + 1)

        root.left = this.buildTree(left)
        root.right = this.buildTree(right)

        return root

    }

    insert(value) {
        let current = this.root

        if (this.root === null) {
            this.root = new Node(value)
            return
        }

        while (current !== null) {
            if (current.data === value) {
                return
            }
            if (value < current.data) {
                if (current.left === null) {
                    current.left = new Node(value)
                    return
                }
                current = current.left
            } else if (value > current.data) {
                if (current.right === null) {
                    current.right = new Node(value)
                    return
                }
                current = current.right
            }
        }

    }

}




export default Tree