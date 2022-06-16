class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    // because of the _(underscore) - we treat the _hash function as private
    // // 0(1)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // 0(1)
    set(key, value) {
        let address = this._hash(key);

        // if this address doesn't exit then
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    // 0(1)
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                // this here is checking for
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined
    }

    // get all keys

    getAllKeys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {

            // if we have data
            if (this.data[i]) {
                console.log(this.data[i])
                keysArray.push(this.data[i][0][0])

            }
        }
        return keysArray;
    }

    getAllKeyWithOutCollision() {
        if (!this.data.length) {
            return undefined
        }

        let result = [];
        // loop through all of the elements

        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 1000);
myHashTable.set('apples', 54);
myHashTable.set('mango', 1000);

console.log(myHashTable.get('grapes'));

console.log(myHashTable.getAllKeys());
