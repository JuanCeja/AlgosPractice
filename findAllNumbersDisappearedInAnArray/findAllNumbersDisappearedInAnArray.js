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
    // this will be our array were we will push our missing numbers to return
    let missingNumbers = [];

    // iterate through array. 
    for(let i = 0; i < nums.length; i++){

        // finding the index of the current indexes value and marking it as a negative value so we can later find missing values that aren't marked negative
        let j = Math.abs(nums[i]) - 1;
        nums[j] = Math.abs(nums[j]) * -1;
    }

    // iterate through our modified array. values that are not marked negative are values that are missing. so we add 1 and then push to our array. we add one because the need the value and not the index. 
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) missingNumbers.push(i + 1);
    }

    // return our array of missing numbers
    return missingNumbers;
}


console.log(findDisappearedNumbers(nums));
// Output: [5,6]

console.log(findDisappearedNumbers(nums2));
// Output: [2]