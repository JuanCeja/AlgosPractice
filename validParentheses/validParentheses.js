// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// ==============================================================================

var s = "()";
var s1 = "()[]{}";
var s2 = "(]";

// ========================== BRUTE FORCE METHOD =================================
// var isValid = function(s) {
    //     var openingP = "(";
    //     var closingP = ")";
    
    //     var openingA = "[";
    //     var closingA = "]";
    
    //     var openingO = "{";
    //     var closingO = "}";
    
    //     for (let i = 0; i < s.length; i++){
        //         if (s[i] === openingP && s[i+1] === closingP) return true
        //         else if (s[i] === openingA && s[i+1] === closingA) return true
        //         else if (s[i] === openingO && s[i+1] === closingO) return true
        //         else return false
        //     }
        // };
        
// ========================== BRUTE FORCE METHOD =================================

var s = "()";
var s1 = "()[]{}";
var s2 = "(]";

var isValid = function(s){
    let bracket = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let array = [];

    if(s.length === 0 ) return true; 
    if(s.length < 2) return false;

    for (let char of s){
        // checking if the key exists
        if(bracket[char]){
            // pushing the value of selected key to array
            array.push(bracket[char]);
        } else {
            if(array.pop() !== char) return false;
        }
    }
    return (!array.length)
}

console.log(isValid(s));
// Output: true

console.log(isValid(s1));
// Output: true

console.log(isValid(s2));
// Output: false