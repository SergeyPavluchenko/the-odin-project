import Node from "./Node.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.nextNode !== null) {
                current = current.nextNode;
            }

            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count = count + 1;
            current = current.nextNode;
        }
        return count;
    }

    tail() {
        if (this.head === null) {
            return null;
        }

        let current = this.head;

        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    at(idx) {
        if (!Number.isInteger(idx) || idx < 0) {
            return null;
        }
        let current = this.head;


        for (let i = 0; i < idx && current; i++) {
            current = current.nextNode;

        }
        return current;
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        if (this.head.nextNode === null) {
            this.head = null;
            return null;
        }
        let current = this.head;

        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head
        let count = 0

        while (current !== null) {
            if (current.value === value) {
                return count
            }
            current = current.nextNode
            count = count + 1
        }
        return null
    }

    toString() {
        let current = this.head
        let result = ''

        while (current !== null) {
            result = result + `(${current.value}) -> `;
            current = current.nextNode

        }
        return result + 'null'
    }

    insertAt(idx, value) {
        const newNode = new Node(value)
        const current = this.at(idx - 1)

        if (idx === 0) {
            this.prepend(value)
            return
        }
        if (current === null) {
            return
        }
        newNode.nextNode = current.nextNode
        current.nextNode = newNode
    }

    removeAt(idx) {
        if (idx < 0 || this.head === null) {
            return
        }

        if (idx === 0) {
            this.head = this.head.nextNode
            return
        }

        const current = this.at(idx - 1)

        if (current === null || current.nextNode === null) {
            return
        }

        current.nextNode = current.nextNode.nextNode

    }


}

export default LinkedList;
