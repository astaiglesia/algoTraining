/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

// function accepts an array; returns a value
// --- input array contains values in chrono order
// --- iterate through array to find the greatest difference between 2 elements
// ------ store differences in a cache; return Math.max of collection?
// edge cases/considerations: 
// - no need to track inputs
// - no possibility of profit -> return 0 if no profit is possible (i.e. decreasing values throughout array) 
// - or invalid input -> i.e. values are not a number
// ### USE max O(n^2) time complexity 

const highestProfit = (apple_stock, storage = []) => {
  if (typeof apple_stock[0] !== 'number' ) return 0                                         // invalid inputs ### refactor for edge cases
  if (apple_stock.length === 1) return Math.max(...storage)                                 // base case    
  
  if (apple_stock[0] > apple_stock[1] ) return highestProfit(apple_stock.slice(1), storage)  // decreasing stock value

  // increasing stock value -> check if the subsequent values are increasing
  for (let i = 1; i < apple_stock.length || apple_stock[i] < apple_stock[0]; i++) {
    if (apple_stock[0] < apple_stock[i]) {
        storage.push(apple_stock[i] - apple_stock[0]);
    }
  }
  
  return highestProfit(apple_stock.slice(1), storage)
}

// test cases
console.log(highestProfit({0: 10, 1: 5, 2: 0})) //toEqual(0);
console.log(highestProfit('stocks')) //toEqual(0);
console.log(highestProfit(1000)) //toEqual(0);

stocks = [0, 2000, 4000, 6000, 8000, 10000];
console.log(highestProfit(stocks)); //toEqual(10000);

stocks = [1000, 500, 1000, 1500, 0, 200, 800, -10, 0, 100];
console.log(highestProfit(stocks)) // toEqual(1000);

module.exports = {highestProfit}