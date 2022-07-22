// Given two binary strings a and b, return their sum as a binary string.


// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// ====================================================================================================

a = "11";
b = "1";

a1 = "1010";
b1 = "1011"

var addBinary = function (a, b) {
    let carry = 0;
    let result = "";

    let len1 = a.length - 1;
    let len2 = b.length - 1;

    for(; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--){
        let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
        if(sum > 1){
            sum = sum % 2;
            carry = 1;
        } else {
            carry = 0;
        }
        result = `${sum}${result}`;
    }
    return result;
};

console.log(addBinary(a, b));
// Output: "100"

console.log(addBinary(a1, b1));
// Output: "10101"

