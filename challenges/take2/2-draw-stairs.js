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
  refactored time: O(n) with recursion
*/

const drawStairs = target => {
  
  // loop for each level
  for (let i = 1; i <= target; i++) {
    let level = ' ';
    
    // loop for each space
    for (let j = target-i; j > 0; j--) {
      level = level.concat(' ')
    }
     
    // loop for each star
    for (let k = i; k > 0; k--) {
      level = level.concat('*')
    }

    console.log(level);
  };

};


// const drawStairs = (target, counter = 1, level = '') => {
//   if (counter > target) return

//   console.log(level)
//   return drawStairs(target, counter + 1)
// }




// test cases:
drawStairs(6); // expected => shown in example





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

// similar recursive function as above
  // conditional concats based on "depth" of star defined by input n
    // if n = 1 -> log '+'
    // middle line will concat (n-1)/2 dashes on either side of the star
    // 

const drawStar = (n, count=0, line='') => {
  // base case -> ends when count equals n
  if (count === n) return

  for (let i=0; i<=n-count; i++){
     line+=' ';
  }

  console.log(line);

  return drawStairs(n, count+1)
};

// drawStar(1);
// drawStar(3);
// drawStar(5);



// module.exports = { drawStairs, drawStar };
