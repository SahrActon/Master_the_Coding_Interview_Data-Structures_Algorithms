array1 = ["a", "b", "c", "x"]
array2 = ["x", "y", "a"]


def containsCommonItem2(arr1, arr2):
    mapped = {}
    arr1Length = len(arr1)

    for i in range(arr1Length):
        if not mapped.get(i):
            item = arr1[i]
            mapped.update({item: True})

    # // loop through second array and check if item in second array exist on created object
    arr2Length = len(arr2)
    for j in range(arr2Length):
        if mapped.get(arr2[j]):
            commonFound = True
            return commonFound


# // O(a + b)
# // 0(a)  space complexity
print(containsCommonItem2(array1, array2))
