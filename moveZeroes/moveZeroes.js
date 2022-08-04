// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

// ==============================================================================

let nums = [0,1,0,3,12];
let nums2 = [0];


var moveZeroes = function(nums){
    // variable that will stay behind and wait to be swapped
    let anchor = 0;
    
    // just in case we have an array of length 1
    if(nums.length === 1) return nums;

    // lopping through array to find non-zero numbers
    for(let i = 0; i < nums.length; i++){

        // if non-zero numbers are found we swap them with our anchor and move our anchor up
        if(nums[i] !== 0){
            let temp = nums[i];
            nums[i] = nums[anchor];
            nums[anchor] = temp;
            anchor++;
        }
    }
    // return our sorted array
    return nums;
}

console.log(moveZeroes(nums));

console.log(moveZeroes(nums2));