//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {

    // We want to loop through the array
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
    // TIME - O (n)
    // Space - O (1)
    return undefined;
}


console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([1, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([1, 1]));
console.log(firstRecurringCharacter([1, 2]));
console.log(firstRecurringCharacter([]));


//------------------------V2

// We will be adding all of the elements to a hash table,
// if the hash table array has a hash for an existing value it will give us
// a warning
function firstRecurringCharacter2(input) {
    // all of our keys will be unique
    let map = {};
    for (let i = 0; i < input.length; i++) {
        // if the key already exist we want to return the key
        if (map[input[i]] !== undefined) { // we are handling falsy statement
            return input[i]
        } else {
            // we are setting the keys to equal to the value
            map[input[i]] = i;
        }
    }
    // if we dont have anything
    return undefined;

    // TIME - O (n)
    // Space - O (n)
}

function firstRecurringCharacter3(input) {
    // all of our keys will be unique
    let map = {};
    for (let i = 0; i < input.length; i++) {
        // if the key already exist we want to return the key
        if (map[input[i]] === map[input[i + 1]]) { // we are handling falsy statement
            return input[i]
        } else {
            // we are setting the keys to equal to the value
            map[input[i]] = i;
        }
    }
    // if we dont have anything
    return undefined;

    // TIME - O (n)
    // Space - O (n)
}

// console.log("---------------")
// console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter2([1, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter2([1, 1]));
// console.log(firstRecurringCharacter2([1, 2]));
// console.log(firstRecurringCharacter2([]));
//
//
// console.log("---------")
// console.log(firstRecurringCharacter([1, 5, 5, 1, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter2([1, 5, 5, 1, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter3([1, 5, 5, 1, 3, 5, 1, 2, 4]));
//
// console.log("---------")
// console.log(firstRecurringCharacter2([1, 2, 2, 1]));
// console.log(firstRecurringCharacter3([1, 2, 2, 1]));
// console.log("---------")
// console.log(firstRecurringCharacter2([2, 1, 2, 1]));
// console.log(firstRecurringCharacter3([2, 1, 2, 1]));
//
// //Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// this is bad because it's 0(n^2)
function firstRecurringCharacter2(input) {

    // We want to loop through the array
    for (let i = 0; i < input.length; i++) {
        // we always go one to the right of where i is
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
}

function firstRecurringCharacter4(input) {
    let object = {}


// We want to loop through the array
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            return input[i];
        } else {
            object[input[i]] = i
        }
    }
    console.log(object)
    return undefined;
}

console.log(firstRecurringCharacter4([2, 1, 5, 5, 2, 1]));