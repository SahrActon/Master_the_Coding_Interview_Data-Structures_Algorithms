let user = {
    age: 54,
    name: 'Sahr Thomas Acton',
    magic: true,
    scream: function () {
        console.log("ahhhh!")
    }
}

console.log(user.age); // O(1)
user.sport = "basketball"; // O(1)
user.scream(); // access this memory in - 0(1)


// When you have a collisions within a hash table  it slows down reading and writing
// O(n/k) = where k is the size of the size of your hash table
// O(n) = simplified (where k is the size of the size of your hash table)


let obj1 = {
    key1: function () {
        for (let i = 0; i < 5; i++) {
            console.log("HELLO")
        }
    }
}

let obj2 = {
    key1: "hello"
}

let obj3 = {
    key1: 1
}


let obj4 = {
    key1: [1, 2, 3, 4, 5, 6]
}


let obj5 = {
    key1: true
}


let obj5 = {
    key1: {
        name: "hello"
    }
}

// a map variable allows you to set any data type as the key - e.g. we can have function as keys
// using the map it allows us o have/maintain insertion order
const a = new Map;


// this allows us to store keys
const b = new Set();
