// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// ====================================================================================================

let haystack = "hello";
let needle = "ll";

let haystack1 = "aaaaa"
let needle1 = "bba";

var strStr = function (haystack, needle) {
    if (!needle) {
        return 0;
    }

    let i = 0;
    while (haystack.substring(i, needle.length + i) !== needle && i <= haystack.length) {
        i++;
    }
    return i > haystack.length ? -1 : i;
};

console.log(strStr(haystack, needle));
// Input: haystack = "hello", needle = "ll"
// Output: 2

console.log(strStr(haystack1, needle1));
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1