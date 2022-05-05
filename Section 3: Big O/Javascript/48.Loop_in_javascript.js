const nemo = ['nemo']
const everyone = ['dory', 'frank', 'tommy', 'nemo', 'nigel', 'squirt', 'hank', 'bob', 'jack']

// Tradition for loop

function findNemoTraditional(items) {

    for (let i = 0; i < items.length; i++) {
        if (items[i] === 'dory') {
            console.log("Found nemo");
            break;
        }
        console.log(items[i]);
    }
}


function findNemoTraditional2(items) {
    let i = 0;
    while (items[i] !== 'dory') {
        console.log("Found nemo");
    }
    i++
    console.log(items[i]);

}


// ES6
const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === "nigel") {
            console.log("We found nigel")
            return 0;
        }
    })
}

// ES6
const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'hank') {
            console.log("hank ");
            // break;
        }
        console.log(fish)
    }
}

findNemoTraditional(everyone)
// findNemo2(everyone)
//findNemo3(everyone)


console.log(everyone.find(material => material.length));
