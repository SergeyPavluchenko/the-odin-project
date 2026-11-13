import HashMap from "./hashMap.js";

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(key, value) {
        const newNode = new Node(key, value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        if (this.head === null) {
            return null;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    at(index) {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) {
                return current;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    pop() {
        if (this.head === null) {
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let currnet = this.head;

        while (currnet.next.next !== null) {
            currnet = currnet.next;
        }
        currnet.next = null;
    }

    contains(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return null;
    }

    toString() {
        let result = "";
        let currnet = this.head;

        while (currnet !== null) {
            result += `(${currnet.value}) -> `;
            currnet = currnet.next;
        }
        return result + "null";
    }

    prepend(key, value) {
        const newNode = new Node(key, value);

        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(key, value, index) {
        if (index === 0) {
            this.prepend(key, value);
            return;
        }

        if (index < 0 || index > this.size()) {
            return;
        }

        const newNode = new Node(key, value);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        if (index < 0 || index > this.size()) {
            return;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }
}


const map = new HashMap();

map.set("name", "Serhii");
map.set("language", "JavaScript");
map.set("project", "HashMap");

console.log("Ключі:", map.keys());
console.log("Значення:", map.values());
console.log("Усі записи:", map.entries());
console.log("Кількість елементів:", map.length());