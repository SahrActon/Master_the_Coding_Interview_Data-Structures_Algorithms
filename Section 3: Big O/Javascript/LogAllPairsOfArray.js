const boxes = [1, 2, 3, 4, 5]

function logAllPairs(input) {
    let a;
    let b;
    let i;
    let j;

    for (i = 0; i < boxes.length; i++) {
        for (j = 0; j < boxes.length; j++) {
            console.log(boxes[i] + "-" + boxes[j])
        }
    }
}

logAllPairs(boxes)

// This is a nested loop so the big(o) is = 0n * 0n = 0(n^2) - Quadratic time