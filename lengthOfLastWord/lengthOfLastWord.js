// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// ===================================================================================================================

// let s = "Hello World";
// let s1 = "   fly me   to   the moon  ";
// let s2 = "luffy is still joyboy";

// var lengthOfLastWord = function(s) {
//     let string = s.trim();
//     let output = "";
    
//     if(string.length === 1) return 1;
//     if(string.includes(" ") === false) return string.length;
//     for(let i = string.length - 1; i > 0; i--){
//         console.log(output);
//         if(string[i] === " "){
//             break;
//         }
//         output = output.concat(string[i]);
//     }
//     console.log(`+${output}+`);
//     return output.length;
// };

// ===================================REFACTORED CODE================================================

let s = "Hello World";
let s1 = "   fly me   to   the moon  ";
let s2 = "luffy is still joyboy";

var lengthOfLastWord = function(s) {
    let trimmedString = s.trim().split(" ");
    return trimmedString[trimmedString.length - 1].length;
}

// ===================================REFACTORED CODE================================================

console.log(lengthOfLastWord(s));
// Output: 5

console.log(lengthOfLastWord(s1));
// Output: 4

console.log(lengthOfLastWord(s2));
// Output: 6