// Play around with different types of arrays
/**
 Different Kinds of Loops
 JavaScript supports different kinds of loops:

 for - loops through a block of code a number of times
 for/in - loops through the properties of an object
 for/of - loops through the values of an iterable object
 while - loops through a block of code while a specified condition is true
 do/while - also loops through a block of code while a specified condition is true


 The for loop has the following syntax:

 for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
 Statement 1 is executed (one time) before the execution of the code block.

 Statement 2 defines the condition for executing the code block.

 Statement 3 is executed (every time) after the code block has been executed.
 * */


/*
Exercise 1)
Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.


// Example output:
// 276 + 351 = 627
* */

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

function sumUp1Array(arr1) {
    if (typeof arr1 === 'array') {
        console.log("This is not a array")
    }

    let sum = 0;
    for (let x = 0; x < arr1.length; x++) {
        sum += arr1[x]
    }
    console.log(sum);
    return sum;
}

let totalOfTwoArray = sumUp1Array(arr_1) + sumUp1Array(arr_2);
console.log(totalOfTwoArray);


let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
for (let i = 0; i < letters.length; i++) {

}


let str = "hello"
let reversedArray = [];
let totalNumOfElement = str - 1;

for (let index = totalNumOfElement; index >= 0; index--) {
    console.log("This is the current value of index", index)

    reversedArray.push(str[index]);
    console.log(str[index]);
}

console.log(reversedArray)