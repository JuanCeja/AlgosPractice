// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// ==================================================================================

let prices = [7,1,5,3,6,4];
let prices2 = [7,6,4,3,1];
let prices3 = [2,4,1];

var maxProfit = function(prices){
    // variables to keep track 
    let minBuyPrice = Infinity;
    let maxProfit = 0;

// looping through to find lowest price
    for(let price of prices){

        // setting the minBuyPrice if its lower then current price
        if(minBuyPrice > price){
            minBuyPrice = price;

        // setting max profit if the max profit is bigger then prev profit price
        } else if(price - minBuyPrice > maxProfit){
            maxProfit = price - minBuyPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit(prices));
// Output: 5

console.log(maxProfit(prices2));
// Output: 0

console.log(maxProfit(prices3));
// output: 2