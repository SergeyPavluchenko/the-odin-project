class HashMap {
    constructor() {
        this.copacity = 16;
        this.loadFactor = 0.75;
        this.buckets = new Array(this.copacity);
    }

    hash(key) {
        let hashCode = 0;

        for (let index = 0; index < key.length; index++) {
            hashCode += key.charCodeAt(index);
        }
        return hashCode % this.copacity;
    }

    set(key, value) {
        const index = this.hash(key);

        this.buckets[index] = [key, value];
    }

    get(key) {
        const index = this.hash(key);

        return this.buckets[index][1];
    }

    has(key) {
        const index = this.hash(key);

        return this.buckets[index] !== undefined;
    }

    remove(key) {
        const index = this.hash(key);

        if (this.buckets[index] === undefined) {
            return false;
        }

        if (this.buckets[index][0] !== key) {
            return false;
        }

        this.buckets[index] = undefined;

        return true;
    }

    length() {
        let count = 0

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined) {
                count++
            }
        }
        return count
    }

    clear() {
        this.buckets = new Array(this.copacity);
    }

    keys() {
        const keysArray = []

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined) {
                keysArray.push(this.buckets[i][0])
            }
        }
        return keysArray
    }

    values() {
        const valuesArray = []

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined) {
                valuesArray.push(this.buckets[i][1])
            }
        }
        return valuesArray
    }

    entries() {
        const entriesArray = []

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined) {
                entriesArray.push(this.buckets[i])
            }
        }
        return entriesArray
    }
}

export default HashMap;
