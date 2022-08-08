// Given a binary array nums, return the maximum number of consecutive 1's in the array.


// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// ==============================================================================

let nums = [1, 1, 0, 1, 1, 1];
let nums2 = [1, 0, 1, 1, 0, 1];

var findMaxConsecutiveOnes = function (nums) {
    // using variables to keep track of consecutive ones
    let maxCount = 0;
    let currentCounter = 0;
    
    // loop through the given array
    for (let i = 0; i < nums.length; i++) {

        // if i is equal to 1 increase currentCounter by 1 or reset to 0
        if (nums[i] === 1) {
            currentCounter++;
        } else {
            currentCounter = 0;
        }
        // if currentCounter is greater than maxCount. set maxCount to currentCounter
        if (currentCounter > maxCount) {
            maxCount = currentCounter;
        }
    }
    return maxCount;
};

console.log(findMaxConsecutiveOnes(nums));
// Output: 3

console.log(findMaxConsecutiveOnes(nums2));
// Output: 2