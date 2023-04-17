/**        --- Insertion Sort ---
 * 
 *  timespace:
 *  - quadratic runtime - avg and worst case
 *  - constant memory
 * 
 *  approach: brute force - nested iteration
 *  - builds a sorted output array one item at a time
 *  - on each iteration, pop element from source list
 *    - 'insert' element into the output list
 *    - sorting process can occur in place
 *  
 *  cases:
 *  - use for small data sets or as a building block for more complex algos
 *  - simple and efficient when input is partially sorted and/or small
 *  - can take advantage of existing order 
 *    - performance improves as the input data becomes more ordered
 * 
 *  mentality:
 *  - where bubbleSort slides larger elements towards the right, 
 *      insertionSort slides smaller elements to the left
 *  
 * 
 */



// mk1 - sort in place
function insertionSort(items) {
  for (let i = 1; i < items.length; i++) {      // outer loop, initialized at 1, iterates over data set
    let j = i;                                  // current element is to be processed by inner loop
    
    // inner loop swaps out of order items backwards until 'inserted' into correct position
    while (j > 0 && items[j - 1] > items[j]) {
      [ items[j], items[j - 1] ] = [ items[j - 1], items[j] ];
      j--;
    }
  }

  return items;
}

// i                  2
const items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];
console.log(insertionSort(items)); // expect 6, 8, 19, 20, 23, 41, 49, 53, 56, 87

