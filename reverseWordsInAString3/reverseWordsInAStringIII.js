// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"


// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

// ==============================================================================


let s = "Let's take LeetCode contest";
let s2 = "God Ding";

var reverseWords = function(s){
    // step 1: tokenize into words
    let string = s.split(' ');

    // step 2: reverse each word
    for(let i = 0; i < string.length; i++){
        let word = string[i].split('');
        let reversedWord = word.reverse().join('');
        string[i] = reversedWord;
    }
    // step 3: join the reversed words back to a new sentence
    return string.join(' ');
}

console.log(reverseWords(s));
// Output: "s'teL ekat edoCteeL tsetnoc"

console.log(reverseWords(s2));
// Output: "doG gniD"