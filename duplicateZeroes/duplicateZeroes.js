// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// ========================================================================================
//                  
let arr = [1, 0, 2, 3, 0, 4, 5, 0];
let arr2 = [1, 2, 3];

var duplicateZeroes = function (arr) {
    // setting variables to use to loop through with while loop
    let i = 0;
    let length = arr.length;
    
    // using while loop to iterate through
    while(i < arr.length){

        // if character is 0 we add a 0 and also pop from the end. also i++ to skip the next character which will be 0
        if(arr[i] === 0){
            arr.splice(i,0,0);
            i++;
            arr.pop();
        }
        i++;
    }

    // instead of using this while loop we just pop from the array in the if statement. same results are given
    
    // while(arr.length > length){
    //     arr.pop();
    // }

    return arr;
};

console.log(duplicateZeroes(arr));
// Output: [1,0,0,2,3,0,0,4]

console.log(duplicateZeroes(arr2));
// Output: [1,2,3]