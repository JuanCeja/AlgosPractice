// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.


// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// ==========================================================================================================

var nums = [1,2,3,4];
var nums1 = [1,1,1,1,1];
var nums2 = [3,1,2,10,1];


var runningSum = function(nums) {
    var addedAmount = 0;
    var finalArray = [];

    for (var i = 0; i < nums.length; i++){
        var addedAmount = nums[i] + addedAmount;
        finalArray.push(addedAmount);
    }

    return finalArray;
};

console.log(runningSum(nums));
// Output: [1,3,6,10]

console.log(runningSum(nums1));
// Output: [1,2,3,4,5]

console.log(runningSum(nums2));
// Output: [3,4,6,16,17]