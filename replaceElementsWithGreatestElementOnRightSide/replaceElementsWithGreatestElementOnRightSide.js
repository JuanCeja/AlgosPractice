// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.


// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation: 
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.

// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.

// ========================================================================================

let arr = [17, 18, 5, 4, 6, 1];
let arr2 = [400];

var replaceElements = function (arr) {

    // create the variable to give our last element a value of -1
    let rightMax = -1;
    
    // using for loop backwards to come from the end and set values
    for(let i = arr.length - 1; i >= 0; i--){

        // comparing the values to see which is greater
        newMax = Math.max(arr[i], rightMax);

        // setting our current index element to our previous max
        arr[i] = rightMax;

        // setting our new max to set our next index element
        rightMax = newMax;
    }
    return arr;
};

console.log(replaceElements(arr));
// Output: [18,6,6,6,1,-1]

console.log(replaceElements(arr2));
// Output: [-1]


// ======================== original solution (slower) ====================================

// let pointer = 0;

// while (pointer < arr.length) {
    
    //     let max = 0;
    
    //     for (let i = pointer + 1; i < arr.length; i++) {
        //         if (arr[i] > max) {
            //             max = arr[i];
            //         }
            //         arr[pointer] = max;
            //     }
            //     pointer++;
            // }
            // arr[arr.length - 1] = -1;
            // return arr;
            
            
// ======================== original solution (slower) ====================================