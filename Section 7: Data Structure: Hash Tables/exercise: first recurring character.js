// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2


// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,3,4,5]
// it should return undefined 


function findFirstRecurring(array1) {
    let indexPointer = 0;
    for (let i = 1; i <= array1.length; i++) {
        let currentIndex = array1[indexPointer];
        if (currentIndex === array1[i]) {
            console.log("Found it", array1[i])
            return array1[i];
        } else {
            indexPointer++;
            currentIndex = array1[indexPointer];
        }
    }

}

let arrayX = [2, 7, 1, 2, 3, 5, 1, 2, 4];
findFirstRecurring(arrayX);
console.log("---");

let arrayY = [0, 1, 1, 2, 3, 5, 1, 2, 4];
findFirstRecurring(arrayY);
console.log("---");

let arrayZ = [2, 3, 4, 5];
findFirstRecurring(arrayZ);