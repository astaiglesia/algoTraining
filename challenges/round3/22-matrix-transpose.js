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

input: 2d array
output: 2d array
givens:
- matrix must be a square (nxn) else return undefined
- rotate 90 degrees in place (use swap syntax?)
approach:
- iterate through matrix
  - top row becomes last index
  - bottom row becomes first index
  - 
edges:
- non-uniform matrices returns undefined
timespace:


  //iteration        [row][col] swaps to =>  row = col   
  //  0        matrix [0]  [2]        =    matrix  [2]   [3]  first row becomes n - iteration
  //  1        matrix [1]  [0]        =    matrix  [0]   [2]  second row becomes n - iteration
  //  1        matrix [1]  [3]        =    matrix  [3]   [2]  
  //  2        matrix [2]  [2]        =    matrix  [2]   [1]  third row becomes n - iteration
  //  3        matrix [3]  [3]        =    matrix  [3]   [0]  4th row becomes n - iteration

*/

const matrixRotate = matrix => {
    const n = matrix.length
    if (!n) return []
    if (matrix[0].length !== n) return undefined

    const output = new Array(n) 
    
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        const newRow = col,
              newCol = n - 1 - row,
              current = matrix[row][col]
        
        if (row === 0) output[newRow] = new Array(n).fill(current)
        else output[newRow][newCol] = current
      }
    }
    
    return output
};

// testcases
let testMatrix =  [ [1,  2,  3,  4],
                    [5,  6,  7,  8],
                    [9, 10, 11, 12],
                    [13, 14, 15, 16] ]

let expected =  [ [13,  9,  5,  1],
                  [14, 10,  6,  2],
                  [15, 11,  7,  3],
                  [16, 12,  8,  4] ]

console.table('expect', matrixRotate(testMatrix), 'to equal')
console.table(expected)

module.exports = { matrixTranspose, matrixRotate };
