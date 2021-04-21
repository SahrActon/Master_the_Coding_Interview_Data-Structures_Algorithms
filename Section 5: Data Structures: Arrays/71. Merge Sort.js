function mergeSortedArrays(arr1, arr2) {
    const result = [] // our result - we use const to state that we don't want to change it

    let arr1Item = arr1[0]; // we use let to state that we want to change it
    let arr2Item = arr2[0];
    let position_i = 1;
    let position_j = 1;

    // check the inputs

    // if the first array is empty then simply return the second one
    if (arr1.length === 0) {
        return arr2;
    }

    // if the second array is empty then simply return the first one
    if (arr2.length === 0) {
        return arr1;
    }

    while (arr1Item || arr2Item) { // if we have a values in both arrays then lets loop
        console.log(arr1Item, arr2Item)
        // if the first item in array 1 is less than the item in array 2 then push it to the stack
        if (!arr2Item || arr1Item < arr2Item) {
            result.push(arr1Item);
            // then shift the position
            arr1Item = arr1[position_i];
            position_i++; // increase the position by 1

        } else {
            // this condition means that array 1 item is greater than array 2 item
            result.push(arr2Item);
            // then shift the position
            arr2Item = arr2[position_j];
            position_j++; // increase the position by 1
        }
    }

    console.log(result)
    return result;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])