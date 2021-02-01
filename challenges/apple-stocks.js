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
// --- nested iteration through array to find the greatest difference between 2 elements -> find difference between each element (i.e. all combos)
// ------ store differences in a cache; return Math.max of collection?
// edge cases/considerations: 
// - no need to track inputs
// - no possibility of profit -> return 0 if no profit is possible (i.e. decreasing values throughout array) 
// - or invalid input -> i.e. values are not a number
// ### USE max O(n^2) time complexity 

const highestProfit = (apple_stock, current = 0, next = 1, storage = []) => {
  if (typeof(apple_stock[current]) !== 'number' || apple_stock.length === 1) return 0;    // edge cases -> handle invalid inputs 
  if (!Array.isArray(apple_stock)) return 0;  

  // base case 
  if (current === apple_stock.length-1) {
    const output = Math.max(...storage); // ---> instad of an array, use a storage variable and assign the profit if greater than current profit
    return (output > 0) ? output : 0;
  }
  
  // recursive case
  if (next === apple_stock.length) {                                                      // increment current; reset next 
    current += 1; 
    next = current + 1;
  }      

  else {
    storage.push(apple_stock[next] - apple_stock[current]);                               // store diff, recurse to the next+1
    next += 1;  
  }
 
  return highestProfit(apple_stock, current, next, storage);
}

// const highestProfit = (apple_stock, storage = [], current = 0, next = 1) => {
//   // console.log (current, next, storage);
//   return (typeof(apple_stock[current]) !== 'number' || apple_stock.length === 1) ? 0
//       :  (!Array.isArray(apple_stock)) ? 0    
//       :  (current === apple_stock.length-1 && Math.max(...storage) <  0) ? 0
//       :  (current === apple_stock.length-1 && Math.max(...storage) >  0) ? Math.max(...storage) 
//       :  (next === apple_stock.length) ? highestProfit(apple_stock, storage, current + 1, current + 2)
//       :  highestProfit(apple_stock, storage.concat([apple_stock[next] - apple_stock[current]]), current, next + 1)
// }

// test cases
console.log(highestProfit({0: 10, 1: 5, 2: 0})) //toEqual(0);
console.log(highestProfit('stocks')) //toEqual(0);
console.log(highestProfit(1000)) //toEqual(0);

let stocks = [0, 2000, 4000, 6000, 8000, 10000];
console.log(highestProfit(stocks)); //toEqual(10000);

stocks = [200, 600, 700, 100, 300, 200, 620];
console.log(highestProfit(stocks)) //.toEqual(520);

stocks = [1000, 500, 1000, 1500, 0, 200, 800, -10, 0, 100];
console.log(highestProfit(stocks)) // toEqual(1000);

stocks = [100, 90, 70, 40, 0];
console.log(highestProfit(stocks)) // toEqual(0);

module.exports = {highestProfit}