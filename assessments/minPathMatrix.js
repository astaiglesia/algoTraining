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

*/ 

/*
  input:numRows, numColumns: num, area: 2d array
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
  - implement a NEEDS A QUEUE for Matrix BFS
  - on each pass instantiate new nodes to describing next step to additional routes
    - starting with origin - analyze 4 directions
    - enqueue a new node for recursion => props:
      - new row + col to analyze
      - updated stepcounter 
      - updated grid passed into recursive call to reflect visited cells()
    - handle path hits
  - terminate recursion on empty queue
  edges: invalid inputs -we need a proper typed and sized grid 
  - no destination
  - no path to destination
  - handle multiple paths
  - handle dead ends included

  timespace: 
  linear time - visit all elements in worst case
  linear space - frames for each step

  // console.log('------- new step at row', row, 'col', col, 'current step:', area[row][col], 'with count of:', stepCounter ) 
*/ 


const findShortestPath = (numRows, numColumns, area) => {
  class PathForward {
    constructor(row, col, stepCounter, newGrid) {
      this.newRow = row,
      this.newCol = col,
      this.stepCounter = stepCounter,
      this.newGrid = newGrid
    }
  }
  
  const queue = [],
        paths = [];
  const minPathMatrix = (numRows, numColumns, area, stepCounter = 0, row = 0, col = 0) => {
    let newCol, newRow, newGrid = [...area];
    // update completed paths & queue for additional routes
    if (area[row][col] === 9) paths.push(stepCounter)
    else {   
      newGrid[row][col] = 0;  // marks location as visited on current path
      
      newCol = col - 1;       // check left
      newCol > 0 && area[row][newCol] && queue.unshift(new PathForward(row, newCol, stepCounter, newGrid))
      newCol = col + 1;       // check right
      newCol < numColumns && area[row][newCol] && queue.unshift(new PathForward(row, newCol, stepCounter, newGrid));
      
      newRow = row - 1;       // check up
      newRow > 0 && area[newRow]?.[col] && queue.unshift(new PathForward(newRow, col, stepCounter, newGrid));
      newRow = row + 1;       // check down
      newRow < numRows && area[newRow]?.[col] && queue.unshift(new PathForward(newRow, col, stepCounter, newGrid));
    } 

    // basecase - when queue is empty
    return !queue.length ? (paths.length ? Math.min(...paths) : -1)
    : (
      nextStep = queue.pop(), 
      minPathMatrix(numRows, numColumns, nextStep.newGrid, nextStep.stepCounter + 1, nextStep.newRow, nextStep.newCol)
    );
  }

  return minPathMatrix(numRows, numColumns, area);
}


// test cases
// let numRows = 3, 
//     numColumns = 3,
//     area = [[1, 0, 0],
//             [1, 0, 0],
//             [1, 9, 1]];

// console.log('handles path to 9 - expect', findShortestPath(numRows, numColumns, area), 'to be 3');

numRows = 4, 
numColumns = 3,
area = [[1, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
        [1, 9, 1]];

// console.log('handles no paths - expect', findShortestPath(numRows, numColumns, area), 'to be -1');

numRows = 5, 
numColumns = 6,
area = [[1, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 1],
        [1, 1, 1, 0, 9, 1]];
// console.log('handles winding paths - expect', findShortestPath(numRows, numColumns, area), 'to be 16');

numRows = 5, 
numColumns = 6,
area = [[1, 0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [1, 0, 0, 1, 0, 9],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1]];
// console.log('handles dead ends - expect', findShortestPath(numRows, numColumns, area), 'to be 11');

numRows = 5, 
numColumns = 6,
area = [[1, 1, 1, 0, 0, 0],
        [1, 0, 9, 1, 1, 0],
        [1, 0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 0]];
// console.log('handles mutliple paths - expect', findShortestPath(numRows, numColumns, area), 'to be 3');

numRows = 5, 
numColumns = 6,
area = [[1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0],
        [1, 0, 1, 0, 1, 9],
        [1, 1, 1, 1, 1, 0]];
// console.log('handles open floor plan - expect', findShortestPath(numRows, numColumns, area), 'to be 8');


module.exports = {findShortestPath};