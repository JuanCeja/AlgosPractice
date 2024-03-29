// Given an array nums of integers, return how many of them contain an even number of digits.


// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.

// ======================================================================================

let nums = [12,345,2,6,7896];
let nums2 = [555,901,482,1771];

var findNumbers = function(nums){
    // our counter to see how many are even 
    let count = 0;

    // loop through our array 
    for(let i = 0; i < nums.length; i++){
        
        //turn our current index item to a string to get its length 
        let length = nums[i].toString().length
        
        // use modulus to see if its even. if its even increase count by 1
        if(length % 2 === 0){
            count++;
        }
    }

    // return our count
    return count;
};

console.log(findNumbers(nums));
// Output: 2

console.log(findNumbers(nums2));
// Output: 1 
