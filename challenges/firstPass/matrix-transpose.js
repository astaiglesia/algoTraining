/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

*/

// function accepts a 2d array; returns a 2d array
// --- iterate through the matrix array
// --- output array should combine all elements of subarrays at a given index 
// --- populate output array
// edge cases -> non matrix array
const matrixTranspose = (matrix, output = [], counter = 1, subcount = 0) => {
    // base case
    //   if (counter === matrix.length) return output
    //   if (subcount === matrix[counter].length) return output
    
  // output defaulted to create the subarrays
  matrix[0].forEach((ele) => output.push([ele]))
  // iteration through outer array
  for (let i = 1; i < matrix.length; i++) {
    // iterate through inner array
    for (let j = 0; j < matrix[i].length; j++) {
      
    }

  }

      

// return matrixTranspose(matrix, output, counter + 1, subcount);

};


// test case
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ];
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]



/*

Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.

For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]

BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).

*/

const matrixRotate = matrix => {
  
};


module.exports = { matrixTranspose, matrixRotate };
