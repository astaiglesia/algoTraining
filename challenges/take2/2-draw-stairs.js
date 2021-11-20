/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/
//---------------------------------take2
// input: num
// output: no eval return (console log strings)
// givens: non-negative input; each level is num length; stairs is num height
// approach: nested for loop, recursion with looping
// - build the string at each level by concat asterisks and spaces
// - build stairs from top -> down; use nested iteration
// - use loop counter to represent asterisks to concat
// - use num minus counter for spapces
// - increment on each pass
// - terminate loop / recursion when loop counter equals num
// edge cases: 
// - invalid input (assume valid?)
// - if num = 0?

// brute force
// const drawStairs = num => {
//   if (typeof num !== "number") return "invalid input";
  
//   let currentFlight = "";
//   if (num < 0) console.log(currentFlight); 
  
//   for (let i = 1; i <= num; i++) {
//     // concat the spaces
//     for (let spaces = 0; spaces < (num - i); spaces++) {
//       currentFlight += " ";
//     }

//     // concat the asterisks
//     for (let asterisks = 0; asterisks < i; asterisks++) {
//       currentFlight += "*";
//     }

//     // log the flight and reset
//     console.log(currentFlight);
//     currentFlight = "";
//   }
  
//   return "end of challenge";
// }


// time: O(n2) -> Quadratic time -> sequential looping nested within a loop
// space: O(1) -> constant space allocation regardless of input

// alt approach -> use tco recursion to eliminate the nested loop => time O(n)
const spaceHelper = (num, asterisks, spaces, currentFlight) => {
  return (spaces === 0) ? currentFlight : (currentFlight += " ", (spaceHelper(num, asterisks, spaces - 1, currentFlight)));
}
 
const asteriskHelper = (num, asterisks, spaces, currentFlight) => {
  return (asterisks === 0) ? currentFlight : (currentFlight += "*", (asteriskHelper(num, asterisks - 1, spaces, currentFlight)));
}

const drawStairs = (num, asterisks = 1, spaces = num - asterisks, currentFlight = "") => {
  if (typeof num !== "number") return "invalid input";
  if (num < 0) console.log(currentFlight); 
  if (asterisks > num) return "end of challenge";
  
  // recursive case:
  // concat the spaces
  currentFlight = spaceHelper(num, asterisks, spaces, currentFlight);

  // concat the asterisks
  currentFlight = asteriskHelper(num, asterisks, spaces, currentFlight);

  // log the flight and recurse
  console.log(currentFlight);
  
  return drawStairs(num, asterisks + 1);
}

// test cases
// console.log(drawStairs(5));
// console.log(drawStairs(-4));
// console.log(drawStairs("tom"));



//---------------------------------previous takes
/* |===> Solution <===|
  input: target: number
  output: level: string
  approach: create counter loop terminating at target, each step logs a concatenated string of spaces and *'s
    . track the number of spaces as target minus counter (spaces + stars equals target)
  	. counter variable/loop to iterate from 1 to 6 (representing the stars)
		. print the string and continue
		.
  edges: invalid input(assume valid), 0's and negatives returns an empty string
  time: O(n^2) with a nested loop
  refactored time: 
*/

// const drawStairs = target => {
  
//   // loop for each level - re-initialize level
//   for (let i = 1; i <= target; i++) {
//     let level = ' ';
    
//     // loop for each space
//     for (let j = target-i; j > 0; j--) {
//       level = level.concat(' ')
//     }
     
//     // loop for each star
//     for (let k = i; k > 0; k--) {
//       level = level.concat('*')
//     }

//     console.log(level);
//   };

// };


// const drawStairsRecursive = (target, stars = 1, level = ' ', spaces = target-stars) => {
//   if (counter > target) return level

//   level.concat()
  
//   return drawStairs(target, stars + 1)
// }




// test cases:
// drawStairs('negative 5', -5); // expected => shown in example
// drawStairs('zero', 0); // expected => shown in example
// drawStairs(6); // expected => shown in example



/* 
Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/



// drawStar(1);
// drawStar(3);
// drawStar(5);



// module.exports = { drawStairs, drawStar };
