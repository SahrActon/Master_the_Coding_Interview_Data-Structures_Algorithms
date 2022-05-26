/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

* */

// Attempt 1
let twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {

            // if they are not the same value
            if (nums[i] !== nums[j]) {
                if ((nums[i] + nums[j]) === target) {
                    console.log("results " + i, j);
                    return [i, j];
                }
            }
        }
    }
}

let twoSum2 = function (arr1, target) {
    // first number from array
    let map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        let num1 = arr1[i];
        let num2 = target - num1; // this is the number that we are looking for

        if (map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i);
        console.log(map)


    }
}

// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 2, 4], 6)
// twoSum([3, 3], 6)

console.log(twoSum2([1, 2, 3, 5, 7, 6], 10))