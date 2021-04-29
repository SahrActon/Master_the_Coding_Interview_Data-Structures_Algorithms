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
user.scream();

