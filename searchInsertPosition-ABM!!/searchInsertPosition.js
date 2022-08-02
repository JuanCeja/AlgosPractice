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
    let left = 0
    let right = nums.length;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        console.log(left)
        console.log(right)
        console.log('mid',mid)
        console.log('target',target)
        console.log('----------------------')

        if(nums[mid] === target){
            return mid
        } else if (nums[mid] < target){
            left += 1;
        } else {
            right -= 1;
        }
    }

    return left;
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