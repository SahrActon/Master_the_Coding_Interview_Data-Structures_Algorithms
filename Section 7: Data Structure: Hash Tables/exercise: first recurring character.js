// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2


// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,3,4,5]
// it should return undefined 

function findFirstRecurring_1(array1) {
    // O(n^2) - because of the nested loop
    let state = false;

    for (let i = 0; i < array1.length; i++) {
        for (let j = i + 1; j < array1.length; j++) {
            if (array1[i] === array1[j]) {
                state = true;
                console.log("Algorithm 1:", state, array1[i])
                return;
            }
        }
    }
    console.log("We didnt find any matching char")
    return state;
}

let finalMap = {};

function findFirstRecurring_2(input) {

    let map = {}; // this map will store the values as keys
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            console.log("Algorithm 2:", input[i])
            return input[i];
        } else {
            map[input[i]] = i;
        }
        // console.log(map)
    }
    console.log("Nothing was found");
    finalMap = map;
    return undefined;
}

function findFirstRecurring_3(array1) {
    // O(n^2) - because of the nested loop
    let state = false;

    for (let i = 0; i < array1.length; i++) {
        let j = 1;
        if (array1[i] === array1[j]) {
            state = true;
            console.log("Algorithm 3:", state, array1[i])
            return;
        }

    }
    console.log("We didnt find any matching char")
    return state;
}

let arrayX = [2, 5, 5, 2, 3, 5, 1, 2, 4];
let arrayY = [0, 1, 1, 2, 3, 0, 1, 2, 4];
let arrayZ = [2, 3, 4, 'bob'];

// findFirstRecurring_1(arrayX);
// console.log("---");
// findFirstRecurring_1(arrayY);
// console.log("---");
// findFirstRecurring_1(arrayZ);
// console.log("v2\n\n");

findFirstRecurring_1(arrayX);
console.log("---");


findFirstRecurring_2(arrayX);
console.log("---");

findFirstRecurring_3(arrayX);
console.log("---\n\n");


findFirstRecurring_1(arrayY);
console.log("---");


findFirstRecurring_2(arrayY);
console.log("---");

findFirstRecurring_3(arrayY);
console.log("---\n\n");


findFirstRecurring_2(arrayY);
console.log("---");
findFirstRecurring_2(arrayZ);
console.log("---");

/* Printing out the keys*/
console.log(finalMap)