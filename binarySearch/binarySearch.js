// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// ==============================================================================

let nums = [-1, 0, 3, 5, 9, 12]
let target = 9;

let nums1 = [-1, 0, 3, 5, 9, 12]
let target1 = 2;


var search = function(nums, target) {
    
};

console.log(search(nums, target));
// Output: 4

console.log(search(nums1, target1));
// Output: -1