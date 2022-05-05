// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5;  // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)

    for (let i = 0; i < input; i++) { // 0(n)
        let x = i + 1; // this runs how many times our loop runs so its 0(n)
        let y = i + 2; // this runs how many times our loop runs so its 0(n)
        let z = i + 3; // this runs how many times our loop runs so its 0(n)

    }
    for (let j = 0; j < input; j++) { // 0(n)
        let p = j * 2; // this runs how many times our loop runs so its 0(n)
        let q = j * 2; // this runs how many times our loop runs so its 0(n)
    }
    let whoAmI = "I don't know"; // O(1)
}

// The big 0 of this code is O(n)
// 0(1) = 4
// 0(N) = 7