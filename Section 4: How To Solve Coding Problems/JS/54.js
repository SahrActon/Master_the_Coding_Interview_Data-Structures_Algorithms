// Given 2 arrays, create a function that lets user know (true or false)
// whether the two arrays contain any common items

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "c"];

function brutForce(arr1, arr2) {
    console.log("Running brut force start")
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr2[j]);
                return true;
            }
        }
    }
    console.log("Running brut force end")
    return false;
}

brutForce(array1, array2)//
/** The big 0 for this O(a*b) - this is the because the array sizes are (can be) different **/
/** The big will be O(n^2) - if the array sizes were the same **/


function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties  == items in the array
    let commonFound = false
    let myMap = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!myMap[arr1[i]]) {
            const item = arr1[i];
            myMap[item] = true;
        }
    }

    console.log(myMap)

    // loop through second array and check if item in second array exist on the created object
    for (let j = 0; j < arr2.length; j++) {
        if (myMap[arr2[j]]) {
            commonFound = true;
            return commonFound;
        }
    }

    return commonFound;
}

// O(a + b)
// 0(a)  space complexity
console.log(containsCommonItem2(array1, array2));
