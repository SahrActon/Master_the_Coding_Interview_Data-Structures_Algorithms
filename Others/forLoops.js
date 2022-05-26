// Play around with different types of arrays

// e.g.

let str = "hello"
let reversedArray = [];
let totalNumOfElement = str - 1;

for (let index = totalNumOfElement; index >= 0; index--) {
    console.log("This is the current value of index", index)

    reversedArray.push(str[index]);
    console.log(str[index]);
}