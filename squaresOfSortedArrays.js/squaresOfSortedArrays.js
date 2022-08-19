// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// ==============================================================================

let nums = [-4, -1, 0, 3, 10];
// Output: [0,1,9,16,100]

let nums2 = [-7, -3, 2, 3, 11]
// Output: [4,9,9,49,121]


var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let position = nums.length - 1;
    let result = [];

    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[position] = nums[left] ** 2;
            left++;
            position--;
        } else {
            result[position] = nums[right] ** 2;
            right--;
            position--;
        }
    }
    return result;
}

console.log(sortedSquares(nums));
// Output: [0,1,9,16,100]

console.log(sortedSquares(nums2));
// Output: [4,9,9,49,121]