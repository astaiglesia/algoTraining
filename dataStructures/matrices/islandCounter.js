/*  --- ISLAND COUNT ---        <matrices>

Given a string representation of a 2d map, return the number of islands in the map.
Land spaces are denoted by a zero.
Water is denoted by a dot.
Rows are denoted by newlines ('\n').

Two land spaces are considered connected if:
  - they are adjacent in cardinal directions : horizontally and vertically
  - diagonally adjacent land spaces are not considered conneted in this case

  
input:  ".0...\n.00..\n....0"
correlates to the 2d array matrix :
  .0...
  .00..
  ....0

returns: 2
*/

function islandCounter(stringMap) {
  const matrix = stringToMatrix(stringMap);  
  const islandMap = matrix.map(row => row.map(coordinate => 0));  // init a map to mark visited land elements
  
  let numIslands = 0;
  matrix.forEach((row, y) => {                                    // nested iteration to find land in matrix 
    row.forEach((coordinate, x) => {
      if (coordinate === '0' && !islandMap[y][x]){                // is coordinate for uncharted land?
        numIslands += 1;
        pathfinder(matrix, y, x);                                 // on hits, chart the path (utility)
      }
    });
  });

  function pathfinder(matrix, y, x) {                             // marks land on the map (visited)
    if (!matrix[y] || !matrix[y][x]
        || matrix[y][x] === '.' 
        || islandMap[y][x]) return                     

    islandMap[y][x] = 1;          
    pathfinder(matrix, y - 1, x);  // check n
    pathfinder(matrix, y, x - 1);  //       w
    pathfinder(matrix, y + 1, x);  //       s
    pathfinder(matrix, y, x + 1);  //       e
  }

  return numIslands
}


function stringToMatrix(string){    
  return string.split('\n')
               .map(str => str.split(''))
}

/* ---- examples 

  input: "0...0\n..0..\n0...0"
  returns: 5
                                  0...0
                                  ..0..
                                  0...0

  input: "..000.\n..000.\n..000.\n.0....\n..0000."
  returns: 3
                                  ..000.
                                  ..000.
                                  ..000.
                                  .0....
                                  ..000.

  input: "0.000000..\n0.00...0..\n.00..0.0.0\n..0..0.0.0\n..000.00.0\n..0..0..0."
  returns: 6
  0.000000..
  0.00...0..
                                  .00..0.0.0
                                  ..0..0.0.0
                                  ..000.00.0
                                  ..0..0..0.
                                  
Extension:
Try solving it without recursion..

function stringToMatrix(string):
  - split the string using \n as the seperator
  - for each splitstring split a second time to individual characters
  - returns 2d array

function pathFinder():
  - traverse the matrix from origin y, x
  - void return - pathfinder is to cause side effect of marking up islandMap
  - - valid directions: cardinal
  - check coordinate on matrix
  - - if not land return
  - - if land, mark as land on islandMap
  -   - recurse in cardinal directions

*/



// testcases:
const tester1 = ".0...\n.00..\n....0"
const tester2 = "0...0\n..0..\n0...0"
const tester3 = "..000.\n..000.\n..000.\n.0....\n..0000." 
const tester4 = "0.000000..\n0.00...0..\n.00..0.0.0\n..0..0.0.0\n..000.00.0\n..0..0..0."

// console.log(` expect ${islandCounter(tester1)} to be 2`)
// console.log(` expect ${islandCounter(tester2)} to be 5`)
// console.log(` expect ${islandCounter(tester3)} to be 3`)
// console.log(` expect ${islandCounter(tester4)} to be 6`)


module.exports = { islandCounter }
