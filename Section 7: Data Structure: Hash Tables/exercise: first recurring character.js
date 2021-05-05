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
                console.log(state, array1[i])
                return;
            }
        }
    }
    console.log("We didnt find any matching char")
    return state;
}

function findFirstRecurring_2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== 0) {
            console.log(input[i])
            return input[i];
        } else {
            map[input[i]] = i;
        }
        console.log(map)
    }
    return undefined;
}

let arrayX = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let arrayY = [0, 1, 1, 2, 3, 5, 1, 2, 4];
let arrayZ = [2, 3, 4, 5];

// findFirstRecurring_1(arrayX);
// console.log("---");
// findFirstRecurring_1(arrayY);
// console.log("---");
// findFirstRecurring_1(arrayZ);
// console.log("v2\n\n");

findFirstRecurring_2(arrayX);
console.log("---");
findFirstRecurring_2(arrayY);
console.log("---");
findFirstRecurring_2(arrayZ);
console.log("---");