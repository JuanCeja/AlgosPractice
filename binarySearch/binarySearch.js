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
    // setting our variables
    let lo = 0;
    let high = nums.length - 1;
    let mid;

    // using while loop
    while (lo <= high){
        // finding the middle of the array for the binary search
        mid = Math.floor((lo + high) / 2);

        // if the middle is equals to the target return the target
        if(nums[mid] === target) return mid;

        // if the middle is less than the target then set the middle to the beginning of our search
        if(nums[mid] < target) {
            lo = mid + 1;

            // if the middle is higher than the target then set the middle to the end of our array
        } else {
            high = mid - 1;
        }
    }

    // if we never find our target then just return -1
    return -1;
};

console.log(search(nums, target));
// Output: 4

console.log(search(nums1, target1));
// Output: -1