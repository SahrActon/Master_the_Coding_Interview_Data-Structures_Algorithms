// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // 0(1)
    a = 50 + 3; // 0(1)

    for (let i = 0; i < input.length; i++) { // 0(n)
        anotherFunction(); // this runs how many times our loop runs so its 0(n)
        let stranger = true; // this runs how many times our loop runs so its 0(n)
        a++; // // this runs how many times our loop runs so its 0(n)
    }
    return a; // this is outside the loop so its 0(1)
}

// The worst case is // 0(n)