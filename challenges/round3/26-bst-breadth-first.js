
/*
Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Hint:
Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.


Example:

If the tree is

4
/   \
2     7
/ \     \
1   3     9
/
8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

input: root: bst node, callback
output: 
givens:
- apply the callback to each value tracversed
- matain a queue
approach: FIFO queue approach - push nodes
- init queue with root
- while queue is not empty
  - pop and process the node
  - unshift left, then  right if not null
edges:
timespace:

*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

const bfs = (bst, callback) => {
  const queue = [bst]
  const results = []

  while (queue.length) {
    const currentNode = queue.pop()
    callback(currentNode.value)
    currentNode.left && queue.unshift(currentNode.left)
    currentNode.right && queue.unshift(currentNode.right)
  }

  return results
}

// testcases:
// const bst = new BinarySearchTree(4);
// bst.left = new BinarySearchTree(2);
// bst.right = new BinarySearchTree(7);
// bst.left.left = new BinarySearchTree(1);
// bst.left.right = new BinarySearchTree(3);
// bst.right.right = new BinarySearchTree(9);
// bst.right.right.left = new BinarySearchTree(8);

// const cb = val => {
//   results.push(val);
// };
// const expected = bfs(bst, cb);
// console.log(`expect ${expected} toEqual([4, 2, 7, 1, 3, 9, 8])`)


/*-----------------------------------------------------------------------------------

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.
*/

/****** matrix bfs / min path solution *****
 * input: grid: 2d arrray of nums
 * output: num
 * givens:
 * - input grid composed of 0's - traversable, 1's - nontraversible, and 2's goal
 * - paths initialized at 0-0
 * - no paths return -1
 * 
 * approach: recursive + bfs queue
 * - use the array indices as row/col gridpoints initialized to origin and process potential traversals as noted in prompt
 * 
 * --- define a gridPoint class to maintain: row and col, distance, updated grid args ---
 * - we'll create a Node for each traversible point in a path and unshift to queue
 * 
 * --- define program data structure + constants ---
 * # we maintain these artifacts in a parent context to persist our data through closed over executions
 * - init an array to maintain a queue of nodes to visit (init call at 0-0)
 * - init an array to maintain completedPaths (distance when a an argNode is 2)
 * - analyze grid and define rowRange + colRange constants (as the matrix limits)
 * 
 * --- define recursive function --- 
 * # function to process current gridPoint from queue and push additional gridPoints for valid steps forward
 * # accepts a grid, current distance traveled and current row-col coordinates
 * #
 * # process the current gridPoint on every pass: 
 * # - initialize and maintain: newCol and newRow for processing potential paths + a newGrid with 
 * # - check if current value is goal (2) -> push distance to completedPaths on hits
 * # - else
 * #  - update current position to non-traversible(1) on a newGrid (pass into recursive call)
 * #  - check potential coordinate if inbounds (0 to length) and traversable ( is 0 )
 * #    - on hits -> unshift a new node to the queue
 * #
 * # base case: terminate recursion on empty queues, return the max value from path array (handle no paths edge)
 * # recursive case: pop a node and pass into a recursive call, incrementing counter
 * # 
 * 
 * --- return evaluation of calling the recursive function 
 * 
 * edges / assumptions:
 * - assume quadrilateral matrix (uniform lengths of subarrays)
 * - invalid inputs: assume enumerated grid values
 * timespace: 
 * - quadratic for each addtl node / frame stack in each direction
 * */ 


function gridPoint(row, col, distance, grid) {
  this.row = row,
  this.col = col,
  this.distance = distance,
  this.grid = grid
}

const analyzeNode = (grid, row, col, distance, config) => {
  const { NUMROWS, NUMCOLUMNS, QUEUE, PATHS } = config
  let newCol = col, newRow = row, newGrid = [...grid]

  if (grid[row][col] === 2) PATHS.push(distance)          // handle destination hit
  else {                                                  // handle path processing
    newGrid[row][col] = 1;                                // mark current as path traveled

    /* process potential paths */
    newCol = col - 1
    if (newCol >= 0 && grid[row][newCol] !== 1) QUEUE.unshift(new gridPoint(row, newCol, distance + 1, newGrid, config))          // check left
    newCol = col + 1
    if (newCol < NUMCOLUMNS && grid[row][newCol] !== 1) QUEUE.unshift(new gridPoint(row, newCol, distance + 1, newGrid, config))  // check right
    newRow = row - 1
    if (newRow >= 0 && grid[newRow][col] !== 1) QUEUE.unshift(new gridPoint(newRow, col, distance + 1, newGrid, config))          // check up 
    newRow = row + 1
    if (newRow < NUMROWS && grid[newRow][col] !== 1) QUEUE.unshift(new gridPoint(newRow, col, distance + 1, newGrid, config))     // check down
  }

  return (!QUEUE.length) ? (!PATHS.length ? -1 : Math.min(...PATHS))
  : (
    nextNode = QUEUE.pop(),
    analyzeNode(newGrid, nextNode.row, nextNode.col, nextNode.distance, config)
  )
}

const minimumDistance = (grid) => {
  const config = {
    NUMROWS: grid.length,
    NUMCOLUMNS: grid[0].length,
    QUEUE: [],
    PATHS: []
  }

  return analyzeNode(grid, 0, 0, 0, config)
};

module.exports = {BinarySearchTree, bfs, minimumDistance};
