class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.capacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let index = 0; index < key.length; index++) {
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(index)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (this.buckets[index] === undefined) {
            this.buckets[index] = new Node(key, value);

            if (this.length() > this.capacity * this.loadFactor) {
                this.resize();
            }

            return;
        }

        let current = this.buckets[index];

        while (current !== null) {
            if (current.key === key) {
                current.value = value;
                return;
            }

            if (current.next === null) {
                current.next = new Node(key, value);

                if (this.length() > this.capacity * this.loadFactor) {
                    this.resize();
                }
                return;
            }
            current = current.next;
        }
    }

    get(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let current = this.buckets[index];

        while (current !== null && current !== undefined) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }

        return undefined;
    }

    has(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let current = this.buckets[index];

        while (current !== null && current !== undefined) {
            if (current.key === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        let current = this.buckets[index];
        let previous = null;

        while (current !== null && current !== undefined) {
            if (current.key === key) {
                if (previous === null) {
                    this.buckets[index] = current.next;
                } else {
                    previous.next = current.next;
                }
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }

    length() {
        let count = 0;

        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];

            while (current !== null && current !== undefined) {
                count++;
                current = current.next;
            }
        }
        return count;
    }

    clear() {
        this.buckets = new Array(this.capacity);
    }

    keys() {
        const keysArray = [];

        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];

            while (current !== null && current !== undefined) {
                keysArray.push(current.key);
                current = current.next;
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];

        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];

            while (current !== null && current !== undefined) {
                valuesArray.push(current.value);
                current = current.next;
            }
        }
        return valuesArray;
    }

    entries() {
        const entriesArray = [];

        for (let i = 0; i < this.buckets.length; i++) {
            let current = this.buckets[i];

            while (current !== null && current !== undefined) {
                entriesArray.push([current.key, current.value]);
                current = current.next;
            }
        }
        return entriesArray;
    }

    resize() {
        this.capacity *= 2;

        const oldBuckets = this.buckets;
        this.buckets = new Array(this.capacity);

        for (let i = 0; i < oldBuckets.length; i++) {
            let current = oldBuckets[i];

            while (current !== null && current !== undefined) {
                this.set(current.key, current.value);
                current = current.next;
            }
        }
    }
}

export default HashMap;
