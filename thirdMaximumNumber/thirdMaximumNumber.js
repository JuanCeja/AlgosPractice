// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.


// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

// ========================================================================================

let nums = [3, 2, 1]
let nums2 = [1, 2]
let nums3 = [2, 2, 3, 1]


var thirdMax = function (nums) {
    let max = nums[0];
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (num > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            thirdMax = secondMax;
            secondMax = num;
        } else if (num > thirdMax && num < secondMax) {
            thirdMax = num;
        }
    }
    return thirdMax === -Infinity ? max : thirdMax;
};

console.log(thirdMax(nums));
// Output: 1

console.log(thirdMax(nums2));
// Output: 2

console.log(thirdMax(nums3));
// Output: 1