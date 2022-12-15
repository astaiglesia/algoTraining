/* Shortest Path in a Matrix (H)

Amazon Online Assessment - 45 mins

1.	Write a function that determines the minimum distance required to deliver an order.

Assumptions:
Some places in the delivery area cannot be accessed by the driver, as there are no roads in those locations.
The delivery area is represented as a two-dimensional grid of integers, where each integer represents one cell. The delivery vehicle must start from the top-left corner of the area, which is always accessible and can move one cell up, down, left, or right at a time.
The vehicle must navigate around the areas without roads and cannot leave the area.
The accessible areas are represented as 1, areas without roads are represented by 0 and the order destination  is represented by 9.

Input
The input to the function consists of three arguments:
numRows, an integer representing the number of rows;
numColumns, an integer representing the number of columns;
area, representing the two-dimensional grid of integers;

Output
Return an integer representing the total distance traversed to deliver the order, else return -1.

Example: 	Input:	Output:
numRows = 3	3
numColumns = 3
area = [[1, 0, 0],
	[1, 0, 0],
	[1, 9, 1]]


input:numRows: num, numColumns: num, area: 2d array
output: num
givens: 
- area is a uniform 2d array representing a grid when elements are stacked vertically
- numRows is the length of the subarrays
- numColumns is the length of area
- area[0][0] = origin, 1 = road, 0 = no road, 9 = destination
- 4pt moves allowed to find a road to the destination
-> define motions, params range from 0 thru length
  - left = col -= 1
  - right = col += 1
  - up = row -= 1
  - down = row += 1
approach: 
- track current and prev steps? (array?)?.length
- starting with origin - analyze 4 directions
  - recurse to cells with road !== prev step
- terminate recursion if:
  - current element is 9 || if 3 directions away from origin miss roads
- 
-
edges: invalid inputs -we need a proper typed and sized grid 
- no destination
- no path to destination

timespace: 
linear time - visit all elements in worst case
linear space - frames for each step

numRows = 3	3
numColumns = 3
area = [[1, 0, 0],
	      [1, 0, 0],
	      [1, 9, 1]]

-> define motions, params range from 0 thru length
  - left = col -= 1
  - right = col += 1
  - up = row -= 1
  - down = row += 1
  console.log('------- new step at row', row, 'col', col, 'current step:', area[row][col], 'with count of:', stepCounter )
*/ 

const minPathMatrix = (numRows, numColumns, area, stepCounter = 0, row = 0, col = 0, prevRow, prevCol, stepTaken = false) => {
  // basecase
  if (area[row][col] === 9) return stepCounter;
  
  // recursive cases
  // move left - if not out of bounds, not the prevStep, is a road
  let newCol = col - 1,
      newStep = area[row][newCol];
  if (newCol !== prevCol && newCol > 0 && newStep === 1 || newStep === 9) {
    stepTaken = true;
    return minPathMatrix(numRows, numColumns, area, stepCounter + 1, row, newCol, row, col);
  }

  // move right
  newCol = col + 1,
  newStep = area[row][newCol];
  if (newCol !== prevCol && newCol < numColumns && newStep === 1 || newStep === 9) {
    stepTaken = true;
    return minPathMatrix(numRows, numColumns, area, stepCounter + 1, row, newCol, row, col);
  }

  // move up
  let newRow = row - 1;
      newStep = area[newRow]?.[col];
      if (newRow !== prevRow && newRow > 0 && area[newRow][col] === 1 || newStep === 9) {
        stepTaken = true;
    return minPathMatrix(numRows, numColumns, area, stepCounter + 1, newRow, col, row, col);
  }
  
  // move down
  newRow = row + 1;
  newStep = area[newRow]?.[col];
  if (newRow !== prevRow && newRow < numRows && area[newRow][col] === 1 || newStep === 9) {
    stepTaken = true;
    return minPathMatrix(numRows, numColumns, area, stepCounter + 1, newRow, col, row, col);
  }
  
  // handle no path base case
  if (stepTaken === false) return -1;
}



// test cases
let numRows = 3, 
    numColumns = 3,
    area = [[1, 0, 0],
	          [1, 0, 0],
	          [1, 9, 1]]

console.log('handles path to 9 - expect', minPathMatrix(numRows, numColumns, area), 'to be 3')

numRows = 4, 
numColumns = 3,
area = [[1, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
        [1, 9, 1]]

console.log('handles no paths - expect', minPathMatrix(numRows, numColumns, area), 'to be -1')

numRows = 5, 
numColumns = 6,
area = [[1, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 1],
        [1, 1, 1, 0, 9, 1]]

console.log('handles winding paths - expect', minPathMatrix(numRows, numColumns, area), 'to be 16')


module.exports = {minPathMatrix};