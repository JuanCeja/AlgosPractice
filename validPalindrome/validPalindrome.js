// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// ==================================================================================================

let s = "A man, a plan, a canal: Panama";
let s2 = "race a_car";
let s3 = " ";

// var isPalindrome = function(s){

//     //removing spaces and special characters and storing string into new variable
//     let string = s.replace(/[^a-zA-Z0-9]/g, "").replace(/\s+/g, "").toLowerCase();

//     // pointer variable
//     let pointer = string.length - 1;

//     // basecase for empty string
//     if(s === "") return true;

//     // loop through string to see if characters match
//     for(let i = 0; i < string.length / 2; i++){
//         if(string[i] !== string[pointer]){
//             return false;
//         }
//         pointer--;
//     }

//     return true;
// };

// =============================== easier clean solution ============================================

var isPalindrome = function(s){
    let string = s.replace(/[^a-zA-Z0-9]/g, "");
    
    string = string.toLowerCase();
    
    return string === string.split('').reverse().join('');
}

// =============================== easier clean solution ============================================


console.log(isPalindrome(s));
// Output: true

console.log(isPalindrome(s2));
// Output: false

console.log(isPalindrome(s3));
// Output: true