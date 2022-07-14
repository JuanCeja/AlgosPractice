// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome

// ===============================================================================================

var x = 121;
var x1 = -121;
var x2 = 10;

var isPalindrome = function(x) {
    var option1 = x.toString();
    var option2 = [];
    
    for (let i = 0; i < option1.length; i++){
        option2.unshift(option1[i]);
    }

    return option1 == option2.join("") ? true : false;

};

console.log(isPalindrome(x));
// output: true

console.log(isPalindrome(x1));
// output: false

console.log(isPalindrome(x2));
// output: false