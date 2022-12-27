/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

input: 2dArr[][]
output: [][]
givens: [][]
approach:
- iterate through input
  - create new output array forEach value of input[0]
  - on each successive pass, iterate through input subarray and push to respective  output subarray

edges: 
- invalid inputs
  - assume enforced uniform schema to input matrix
timespace:
- linear time (visit every element to transpose)
- linear space (for transposed matrix)

*/


const matrixTranspose = matrix => {
  const output = [];
  if (!matrix[0])  return output;

  matrix[0].forEach(ele => output.push([ele]));
  
  for (let i = 1; i < matrix.length; i++) {
    matrix[i].forEach( (ele, idx) => output[idx].push(ele))
  }

  return output;
} 

      



// test case
let twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ];
// console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
twoDimArray = [];
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
