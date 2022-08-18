// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.


// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:

// Input: nums = [1,1]
// Output: [2]

// ========================================================================================

let nums = [4,3,2,7,8,2,3,1];
let nums2 = [1,1];

var findDisappearedNumbers = function(nums) {
    let missingNumbers = [];

    for(let i = 0; i < nums.length; i++){
        let j = Math.abs(nums[i]) - 1;
        nums[j] = Math.abs(nums[j]) * -1;
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) missingNumbers.push(i + 1);
    }
    return missingNumbers;
}


console.log(findDisappearedNumbers(nums));
// Output: [5,6]

console.log(findDisappearedNumbers(nums2));
// Output: [2]