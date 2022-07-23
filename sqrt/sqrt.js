// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.


// Example 1:

// Input: x = 4
// Output: 2

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

// =====================================================================================================

let x = 4;
let x1 = 8;

var mySqrt = function(x) {
    let left = 1;
    let right = x;
    let mid = 0;

    if(x < 2) return x;

    while(left < right){
        mid = left + Math.floor((right - left) / 2);
        if(mid * mid === x){
            return mid;
        } else if(mid * mid > x){
            right = mid;
        } else if(mid * mid){
            left = mid + 1;
        }
    }

    return left - 1;
};

console.log(mySqrt(x));
// Output: 2

console.log(mySqrt(x1));
// Output: 2