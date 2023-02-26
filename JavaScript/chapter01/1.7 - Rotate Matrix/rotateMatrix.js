/** Rotate Matrix
 * Given an image represented by an N x N marix, where each pixel in the image is represented by an integer
 * Write a method to rotate the image by 90 degrees
 * 
 * extension: rotate in place
 *  
 * */
/**
 * 
 * @param matrix: 2d array
 * @returns 2d array
 * givens:
 * - nxn square matrix input
 * - assume clockwise rotation
 * [0][0] -> [0][3]
 * [0][1] -> [1][3]
 * [0][2] -> [2][3]
 * [0][3] -> [3][3]
 * 
 * 1/0 -> 0/2
 * 1/1 -> 1/2
 * 1/2 -> 2/2
 * 1/3 -> 3/2
 * 
 * 2/0 -> 0/1
 * 2/1 -> 1/1
 * 2/2 -> 2/1
 * 2/3 -> 3/1
 * 
 * 3/0 -> 0/0
 * 3/1 -> 1/0
 * 3/2 -> 2/0
 * 3/3 -> 3/0
 * 
 * 
 * approach: (quadratic time + quadratic space)
 * - determine matrix dims
 * - init an output array with necessary subarrays
 * - track row, column
 * - iterate through the matrix rows
 *  - iterate through the row's columns
 *  - populate output matrix with spec of: output[original col][max row idx - 1]
 * 
 * rotate in place extension:
 * - transpose matrix then reverse columns
 * -
 * 
 * edges:
 * - invalid inputs
 * - 
 * timespace:
 * - 
 */

function rotateMatrix(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const output = [];
  matrix.forEach(() => output.push([]));

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++){
      output[col][width - 1 - row] = matrix[row][col];
    }
  }

  return output;
}
function rotateMatrixInPlace(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const output = [];
  matrix.forEach(() => output.push([]));

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++){
      output[col][width - 1 - row] = matrix[row][col];
    }
  }

  return output;
}

// row col   row col
// [0][0] -> [0][3]
// [0][1] -> [1][3]
// [0][2] -> [2][3]
// [0][3] -> [3][3]

// new matrix position => matrix[original column][maxWidthIndex - row]
// 


module.exports = { rotateMatrix, rotateMatrixInPlace};


// TEXT SOLUTION
var solution = function(matrix) {
  var edge = matrix.length - 1;

  var movePixels = function(row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    var fromRow;
    var fromCol;
    var fromPixel;

    // first transformation
    var toRow = row; // 0
    var toCol = col; // 1
    var toPixel = matrix[row][col];

    // Do rotational transformation 4 times
    for (var i = 0; i < 4; i++) {
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;
    }
  };

  for (var i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      console.log(i, j);
      movePixels(i, j);
    }
  }
};


/* TEST */
var testMatrix = [
[1, 2, 3, 4],
[0, 1, 2, 3],
[0, 0, 1, 2],
[1, 0, 0, 1]
];

// console.log('before:');
// console.log(testMatrix[0]);
// console.log(testMatrix[1]);
// console.log(testMatrix[2]);
// console.log(testMatrix[3]);

rotateMatrix(testMatrix);

// console.log('after:');
// console.log(testMatrix[0]);
// console.log(testMatrix[1]);
// console.log(testMatrix[2]);
// console.log(testMatrix[3]);

/*
var edge = n - 1;

pattern observed:
i) col value becomes row value
ii) row value is subtracted off edge and becomes col value

0100
0000
0000
0000

position of 1 -> m[0][1]

0000
0001
0000
0000

position of 1 -> m[1][edge]

0000
0000
0000
0010

position of 1 -> m[edge][edge - 1]

0000
0000
1000
0000

position of 1 -> m[edge-1][0]

0100
0000
0000
0000

position of 1 -> m[0][1]

flow of iteration:
i) start from top left corner and move diagonally down
ii) for each row, iterate pixels until edge - 1 
(pixel at edge would have been transformed by the first pixel)
iii) at each pixel iteration, iterate through 4 sides
iv) do iteration in place, i.e. store a temp pixel for moving things around
*/