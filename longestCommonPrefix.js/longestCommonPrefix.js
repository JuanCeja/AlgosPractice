// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// ===========================================================================================

var strs = ['flower', 'flow', 'flight'];
var strs1 = ['dog', 'racecar', 'car'];
var strs2 = ['athena', 'athena1', 'athena2'];

var longestCommonPrefix = function(strs) {

    let prefix = "";

    if (strs.length === 0) return prefix;
    // loop through characters 
    for ( let i = 0; i < strs[0].length; i++){
        const character = strs[0][i];
        
        // loop through strs
        for (let j = 0; j < strs.length; j++){
            if (strs[j][i] !== character) return prefix;
        }
        prefix = prefix + character;
    }

    return prefix
};

console.log(longestCommonPrefix(strs));
// output: "fl"

console.log(longestCommonPrefix(strs1));
// output: ""

console.log(longestCommonPrefix(strs2));
// output: "athena"