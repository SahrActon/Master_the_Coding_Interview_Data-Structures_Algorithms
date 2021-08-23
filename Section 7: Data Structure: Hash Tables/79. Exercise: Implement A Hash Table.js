class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    set(key, value) {
        let address = this._hashFunction(key);

        // if this address doesn't exist in memory then create it
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        console.log(this.data)
        return this.data;
    }


    get(key) {
        let address = this._hashFunction(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }

            }
        } // O(1) - with no collision
        return undefined;
    }


    // This is looping through the entire set
    getAllKeys() {

        if (!this.data.length) {
            return undefined;
        }

        const keysArray = [];
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if its not an empty memory cell
            if (this.data[i] && this.data[i].length) {

                // but also loop through all the potential collision e.g. [0:"sdfds" , [[2:"dfd",3: "dsf"]]]
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0])
                    }
                } else {
                    // we don't have a guaranteed order
                    keysArray.push(this.data[i][0][0])
                }
            }
        }
        return keysArray;
    }

    getAllValues() {
        const valuesArray = []
        for (let index = 0; index < this.data.length; index++) {
            if (this.data[index])
                valuesArray.push(this.data[index][0][1])
        }
        return valuesArray
    }
}

// we are only creating 2 spaces in memory
const myHashTable = new HashTable(50)
myHashTable.set('grapes', 1000)
myHashTable.set('apples', 54);
myHashTable.set('mango', 2);
// console.log(myHashTable.get('grapes'));
// console.log(myHashTable.get('apples'));
console.log('\n------- get all keys -------');
console.log(myHashTable.getAllKeys());
console.log('\n------- get all values -------');
console.log(myHashTable.getAllValues());
