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

// create a recursive func; accepts a num; returns strings
     // each pass should log to the console a concatenation of spaces and asterisks for n number of passes
          // string to concat n-count spaces + count asterisks
          // log line to console
     // increment count on recursive call
const drawStairs = (n, count=0, line='') => {
  // base case -> ends when count equals n
  if (count === n) return

  for (let i=0; i<=n-count; i++){
     line+=' ';
  }
  for (let i=0; i<=count; i++){
     line+='*';
  }
  console.log(line);

  return drawStairs(n, count+1)
};

drawStairs(6);




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
