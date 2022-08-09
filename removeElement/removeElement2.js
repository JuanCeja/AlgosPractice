// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// =======================================================================================================

let nums = [3,2,2,3] 
//let nums = [3,2,2,3] => i=0 p=0 [3,2,2,3] =>i=1 p=0  [2,2,2,3] => i=2 p=1 [2,2,2,3] => [2,2,2,3] 
let val = 3

let nums1 = [0,1,2,2,3,0,4,2]
let val1 = 2

var removeElement = function(nums, val) {
    
};

console.log(removeElement(nums, val));
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

console.log(removeElement(nums1, val1));
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]