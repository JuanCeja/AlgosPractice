// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// =============================================================================
let s = ["h", "e", "l", "l", "o"];
let s2 = ["H", "a", "n", "n", "a", "h"];

var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }

    return s;
}

// ====================== for loop solution ====================================

// var reverseString = function(s){
//     let pointer = s.length - 1;

//     for(let i = 0; i < s.length / 2; i++){
//         temp = s[i];
//         s[i] = s[pointer];
//         s[pointer] = temp;
//         pointer--;
//     }

//     return s;
// }

// ====================== for loop solution ====================================


console.log(reverseString(s));
// Output: ["o","l","l","e","h"]

console.log(reverseString(s2));
// Output: ["h","a","n","n","a","H"]