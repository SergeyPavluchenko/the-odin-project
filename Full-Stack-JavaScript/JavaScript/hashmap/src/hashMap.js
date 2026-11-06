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
        const index = this.hash(key)

        return this.buckets[index][1]
    }
}



export default HashMap;
