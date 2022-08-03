// Given an array, rotate the array to the right by k steps, where k is non-negative.


// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// =============================================================================

let nums = [1,2,3,4,5,6,7];
let k = 3;

let nums2 = [-1,-100,3,99]; 
let k2 = 2


var rotate = function(nums, k){
    let resultArray = [];
    
    for(let i = nums.length - k; i < nums.length; i++){
        resultArray.push(nums[i]);
    }
    
    for(let j = 0; j < nums.length - k; j++){
        resultArray.push(nums[j]);
    }
    
    return resultArray;
}

console.log(rotate(nums, k));
// Output: [5,6,7,1,2,3,4]

console.log(rotate(nums2, k2));
// Output: [3,99,-1,-100]