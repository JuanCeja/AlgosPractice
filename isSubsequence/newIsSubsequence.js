// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// ===========================================================================================
var s = "abc";
var t = "ahbgdc"

var s1 = "axc";
var t1 = "ahbgdc";


var isSubsequence = function(s, t) {
    // creating our variables
    let testString = "";
    let pointer = 0;
    
    //looping through both strings to see if they match 
    for(let i = 0; i < t.length; i++){

        // if match is made push that character to testString variable
        if(s[pointer] === t[i]){
            testString = testString.concat(t[i]);
            pointer++;
        }
    }

    // return if the result. do the strings equate to each other?
    return testString === s ? true : false;
};

console.log(isSubsequence(s,t));
// Output: true

console.log(isSubsequence(s1,t1));
// Output: false