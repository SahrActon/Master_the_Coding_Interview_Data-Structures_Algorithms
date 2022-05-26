// Naive

// O(n^2)
function hasPairWithSum(arr, sum) {
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr.length[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}

// O(n) - Todo review this code
function hasPairWithSum(arr, sum) {
    const mySet = new Set();
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}