// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.


// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:

// Output: [0]
// ========================================================================================

let nums = [3,1,2,4];
let nums2 = [0];

var sortedArrayByParity = function(arr){
    let anchor = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            temp = arr[anchor];
            arr[anchor] = arr[i];
            arr[i] = temp;
            anchor++;
        }
    }
    return arr;
};

console.log(sortedArrayByParity(nums));
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

console.log(sortedArrayByParity(nums2));