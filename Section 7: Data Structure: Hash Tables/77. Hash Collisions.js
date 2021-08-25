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
// O(n/k) = where k is the size of the size of your hast table
// O(n) = simplified (where k is the size of the size of your hast table)
