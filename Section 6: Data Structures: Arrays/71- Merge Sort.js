function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let array1item = arr1[0]; // we are grabbing the first element for our reference
    let array2item = arr2[0]; // we are grabbing the first element for our reference
    let pointer1 = 1; // we use this to point to a different index within our array
    let pointer2 = 1; // we use this to point to a different index within our array

    // check both arrays
    if (!(arr1 instanceof Array)) {
        console.log("The first input in not an array")
        return 0;
    }

    if (!(arr2 instanceof Array)) {
        console.log("The second input in not an array")
        return 0;
    }

    // if the first array is empty then simply return the second one
    if (arr1.length === 0) {
        return arr2;
    }

    // if the second array is empty then simply return the first one
    if (arr2.length === 0) {
        return arr1;
    }


    while (array1item || array2item) {

        console.log(array1item, array2item);

        if (!array2item || array1item < array2item) {
            mergedArray.push(array1item);
            array1item = arr1[pointer1];
            pointer1++;
        } else {
            mergedArray.push(array2item)
            array2item = arr2[pointer2];
            pointer2++;
        }
    }
    console.log(mergedArray)
    return mergedArray
}

mergeSortedArrays(1, [4, 6, 30])

mergeSortedArrays([0, 3, 4, 31], 4)

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])