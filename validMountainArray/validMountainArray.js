// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false

// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

// ========================================================================================

let arr = [2,1];
let arr2 = [3,5,5];
let arr3 = [0,3,2,1];

var validMountainArray = function(arr) {
    let startOfValley = 0;

    // array needs to be at least 3 in length. needs start,mid,end points
    if(arr.length < 3) return false; 
    
    // start of valley cannot be larger than second value. mountain needs to start from bottom
    if(arr[0] > arr[1]) return false;

    // this for loop is used just to identify the peak of the mountain
    for(let i = 0; i < arr.length; i++){

        // values cannot equal. can only go up or down
        if(arr[i - 1] === arr[i]) return false;

        // finding our peak
        if(arr[i - 1] > arr[i]){
            startOfValley = i - 1;
            break;
        }
    }

    // this for loop is used to make our way down
    for(let i = startOfValley; i < arr.length - 1; i++){
        if(arr[i] <= arr[i + 1]) return false;
    }
    return true;
};

console.log(validMountainArray(arr));
// Output: false

console.log(validMountainArray(arr2));
// Output: false

console.log(validMountainArray(arr3));
// Output: true