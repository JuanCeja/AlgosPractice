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
    // using variables to have multiple pointers and new array
    let left = 0;
    let right = nums.length - 1;
    let position = nums.length - 1;
    let result = [];

    // using while loop to go through array with pointers
    while (left <= right) {
        if (nums[left] * nums[left] > nums[right] * nums[right]) {
            result[position] = nums[left] * nums[left];
            position--;
            left++;
        } else {
            result[position] = nums[right] * nums[right];
            position--;
            right--;
        }

    }
    return result;
}

console.log(sortedSquares(nums));
// Output: [0,1,9,16,100]

console.log(sortedSquares(nums2));
// Output: [4,9,9,49,121]