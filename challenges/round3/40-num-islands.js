// *** USED ALOT IN INTERVIEWS ***

/*

Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.

EXAMPLE 1:

Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1

Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3

Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.

*/

// |===> Solution <===|
// input:	2d arrays of nums; output: a num
// find: the number of islands, i.e. - 1's that are surround by 0's
// givens: 2d grid map; 1 = land, 0 = water; an island is formed by connecting adjacent lands horiz and vert
// assumptions: the grid contains valid inputs; all four edges of the grid are all surrounded by water

// breakdown: by default every grid has an island if it contains any 1's
//            use 2 pointers (1 for outer array, 1 for subarray)
//            look for 1's  in the subarrays
//            if an array contains a 1
// approach:
// edge cases: invalid inputs
// <pseudocode>


// ------- Code --------
const numIslands = grid => {
  
};


// test cases:

const input0 = 
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1]
]; // Output: 2

const input1 =
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]; // output = 1

const input2 = 
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]; // Output: 3

console.log(numIslands(input1)); 
console.log(numIslands(input2)); 
console.log(numIslands(input0)); 


module.exports = {numIslands};
