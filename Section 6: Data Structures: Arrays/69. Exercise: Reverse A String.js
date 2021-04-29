// Create a function that reverse a string

// "hi my name is is" should be
// si eman ym ih

function reverse(str) {

    // check the input
    if (str == null || !str || str.length < 2 || typeof str !== 'string') {
        return 'hm that is not a nice string'
    }

    const backwards = [];
    const totalItems = str.length - 1;

    console.log("testing the split command", str.split());

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('')// join all of the items in the array
}


reverse("Hello my name is")

// -------------------------------------------------------------------------------------------------------
console.log('\n')

function reverse2(str) {
    let output = str.split('').reverse().join();
    console.log(output)
    return output
}

reverse2("Hello my name is")

// -------------------------------------------------------------------------------------------------------

// using the arrow function
console.log('\n')
const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3("Hello my name is"));
// -------------------------------------------------------------------------------------------------------

// using the spread operator
console.log("\n")
const reverse4 = str => [...str].reverse().join('');
console.log(reverse4("Hello my name is"));
// -------------------------------------------------------------------------------------------------------