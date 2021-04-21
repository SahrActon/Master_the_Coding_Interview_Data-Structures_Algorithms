const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "c"];


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

    // loop through second array and check if item in second array exist on created object
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
