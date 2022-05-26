// "hi my name is" should be
// si eman ym ih

function reverse(str) {
    // let's check that what data type we are passing in.

    if (typeof str !== "string" || str.length < 2 || str.length <= 0 || !str) {
        return "Hey bro/girl, this is not a string";
    }

    // This is a string question, so we know that we will be using an array

    // Reversed array
    let reversedArray = []

    // get the last element index from the array
    let totalNumOfElement = str.length - 1;
    console.log(totalNumOfElement)

    // index = 0 - this means that we will keep on going until index is = 0
    // Now starting from the last element we want to move backwards


    for (let index = totalNumOfElement; index >= 0; index--) {
        console.log("This is the current value of index", index)

        reversedArray.push(str[index]);
        console.log(str[index]);
    }
    console.log(reversedArray);

    // this join method will join all elements within the array
    return reversedArray.join('');
}

reverse("name");

// Build in js methods

function reverse2(str) {
    return str.split('').reverse().join();
}


// es 6 function

const reverse3 = str => [...str].reverse().join('');
reverse3()

console.log(reverse2("name"))