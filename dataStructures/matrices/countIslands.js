/** NumIslands
 * Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.
 * 
 * An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0). 
 * Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis (cardinal and diagonal directions).
 * 
 * Example                           string representation
 * 
 * [
 *   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
 *   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
 *   [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
 *   [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
 *   [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
 *   [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
 * ]
 * 
 * Implement a function which accepts a matrix containing the numbers 0 and 1. 
 * It should return the number of islands as an integer.
 * 
 */

function countIslands(image){
  let islandCounter = 0;
  const pixelMap = image.map(row => row.map(cell => '~'));
  
  image.forEach((row, y) => {                                         // finds pixels on source
    row.forEach((pixel, x) => {
      if (pixel === 1 && pixelMap[y][x] === '~') {
        islandCounter += 1;
        chartIsland(image, pixelMap, y, x);                           // marks 
      }
    })
  })
  
  return islandCounter
}

function chartIsland(image, pixelMap, y, x) {
  if (!image[y] || !image[y][x] || pixelMap[y][x] === 1) return

  pixelMap[y][x] = 1;
  chartIsland(image, pixelMap, y, x + 1),      // e
  chartIsland(image, pixelMap, y + 1, x + 1),  // se
  chartIsland(image, pixelMap, y + 1, x),      // s
  chartIsland(image, pixelMap, y + 1, x - 1),  // sw
  chartIsland(image, pixelMap, y, x - 1),      // w
  chartIsland(image, pixelMap, y - 1, x - 1),  // nw
  chartIsland(image, pixelMap, y - 1, x),      // n
  chartIsland(image, pixelMap, y - 1, x + 1)   // ne
}


/*input: image: 2d array
output: number
approach:
- track islands found
- map a copy of image with no pixels/islands marked
- nested iteration on source image to find pixels
  - init from 0, 0 
  - on hits - check if marked on copy (already visited)
            - if new pixel found 
            - call helper function (pathfinder) to chart the blob 
                                

- chartIsland : pathfinder helper function 
  - inits at coordinate args
  - return out if either coordinates are undefined or already visited
  - else mark the pixel on the map
  - recurse in valid directions (cardinal and diagonals)

- return island counter
      
edges:
- invalid inputs - not a 0 or 1

timespace:
- linear time for finding pixels on the source, linear time for charting the copy map
  - some quadratic qualities by charting but worst case is mitigated by cross referencing with the 'visited' map
- linear space for the copy map, linear space for frames on the stack
  - can optimize a bit more with reference checks prior to each recursive call 
  - but minimal gains as previously visited nodes are immediately returned out
*/