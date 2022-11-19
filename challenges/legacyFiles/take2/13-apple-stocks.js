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

const highestProfit 

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