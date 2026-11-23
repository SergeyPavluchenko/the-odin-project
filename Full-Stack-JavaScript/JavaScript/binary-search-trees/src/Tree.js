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

    includes(value) {
        let current = this.root

        if (current === null) {
            return false
        }

        while (current !== null) {
            if (current.data === value) {
                return true
            } else if (current.data < value) {
                current = current.right
            } else if (current.data > value) {
                current = current.left
            }
        }
        return false
    }

    deleteItem(value) {
        let current = this.root
        let parent = null

        while (current !== null && current.data !== value) {
            parent = current
            if (current.data > value) {
                current = current.left
            } else {
                current = current.right
            }
        }
        if (current === null) {
            return
        }

        if (current.left === null && current.right === null) {
            if (parent === null) {
                this.root = null
            } else if (current === parent.left) {
                parent.left = null
            } else {
                parent.right = null
            }
        } else if (current.left === null || current.right === null) {
            const child = current.left || current.right

            if (parent === null) {
                this.root = child
            } else if (current === parent.left) {
                parent.left = child
            } else {
                parent.right = child
            }
        } else {
            let successor = current.right
            let successorParent = current

            while (successor.left !== null) {
                successorParent = successor
                successor = successor.left
            }

            current.data = successor.data

            if (successorParent === current) {
                current.right = successor.right
            } else {
                successorParent.left = successor.right
            }
        }
    }

    levelOrder(callback) {
        const queue = [this.root]
        const result = []

        if (this.root === null) {
            return result;
        }

        while (queue.length > 0) {
            const node = queue.shift()
            result.push(node.data);

            if (callback) {
                callback(node)
            }

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return result
    }

    inOrder(callback) {
        const result = []

        function visit(node) {
            if (node === null) return

            visit(node.left)

            result.push(node.data)

            if (callback) {
                callback(node)
            }

            visit(node.right)
        }

        visit(this.root)
        return result

    }

    preOrder(callback) {
        const result = []
        function visit(node) {

            if (node === null) return

            result.push(node.data)

            if (callback) {
                callback(node)
            }

            visit(node.left)
            visit(node.right)
        }
        visit(this.root)
        return result
    }

    postOrder(callback) {
        const result = []
        function visit(node) {

            if (node === null) return

            visit(node.left)
            visit(node.right)

            result.push(node.data)

            if (callback) {
                callback(node)
            }
        }
        visit(this.root)
        return result
    }
}




export default Tree