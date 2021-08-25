class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    // We are creating our own has function here.
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length // this is our formula
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);

        // if the address doesn't exist in memory then create it
        if (!this.data[address]) {
            this.data[address] = []; // create a new address space
        }
        this.data[address].push([key, value])
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        // O(1) - if we no collision - This can be O(n)
        // if we have nothing in the array then we return undefined if we find nothing
        return undefined;
    }

    // get all keys
    getAllKeys() {
        if (!this.data.length) {
            return undefined;
        }

        // This array will store all of your keys
        const keysArray = [];

        // now lets loop through all of our elements
        for (let i = 0; i < this.data.length; i++) {
            // if its not an empty cell
            if (this.data[i] && this.data[i].length) {


                // loop through all the potential collision
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0])
                    }
                } else {
                    keysArray.push(this.data[i][0][0])
                }
            }
        }

    }

}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 1000)
console.log(myHashTable.set('apples', 25));
console.log(myHashTable.set('orange', 25));
console.log(myHashTable.set('banana', 25));

console.log(myHashTable.get('grapes'))
