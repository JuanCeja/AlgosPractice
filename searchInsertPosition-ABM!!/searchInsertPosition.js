// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// ====================================================================================================

let nums = [1,3,5,6];
let target = 5;

let nums1 = [1,3,5,6];
let target1 = 2;

let nums2 = [1,3,5,6];
let target2 = 7;

var searchInsert = function(nums, target) {
    
};

console.log(searchInsert(nums, target));
// Input: nums = [1,3,5,6], target = 5
// Output: 2

console.log(searchInsert(nums1, target1));
// Input: nums = [1,3,5,6], target = 2
// Output: 1

console.log(searchInsert(nums2, target2));
// Input: nums = [1,3,5,6], target = 7
// Output: 4






























// for ( let i = 0; i < nums.length; i++){
//     if(nums[i] === target) return i;
//     if(nums[0] > target) return 0;
//     if(nums[i] < target && nums[i+1] > target) return i + 1;
//     if(nums[nums.length - 1] < target) return nums.length;
// }