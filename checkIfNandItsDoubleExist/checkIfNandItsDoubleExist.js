// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
// Example 2:

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
// Example 3: 

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

// ========================================================================================

let arr = [10, 2, 5, 3];
let arr2 = [7, 1, 14, 11];
let arr3 = [3, 1, 7, 11];
let arr4 = [4, -7, 11, 4, 18];


var checkIfExist = function (arr) {
    // using a set to check if half or double values exist
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        // using half and double variables to check
        let half = arr[i] / 2;
        let double = arr[i] * 2;

        // checking to see if they already exist
        if(set.has(half) || set.has(double)){
            return true;
        }

        // if they did not exist we add the array value to the set and proceed
        set.add(arr[i])
    };
    // we never hit true in for loop so we return false
    return false;
};

console.log(checkIfExist(arr));
// Output: true

console.log(checkIfExist(arr2));
// Output: true

console.log(checkIfExist(arr3));
// Output: false

console.log(checkIfExist(arr4));
// Output: false