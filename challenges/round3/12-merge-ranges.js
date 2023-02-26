/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:
intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

input: 2d array of num tuples
output: 2d array of num tuples
givens:
- input array contains num ranges
- function to condense overlapping num ranges as necesary
- do not assume inputs are in order
- assume at least 1 range in argument
approach:
- sort the intervals
  - utilize the 0 idx in comparison function 
- iterate through sorted array 
  - track current and next
  - check if adjacent tuples are  overlapping -> array1[1] > array2[0]
    - if true, combine the 2 arrays, set next as current
    - if false, push current to output, reassign pointers
 - terminate iteration when next is undefined
edges: 
- invalid inputs
- 
timespace:
- linear time because we would have to analyze each element 
- linar space because at worst, each element will be a non overlapping range
*/
const mergeRanges1 = ranges => {
  let current = 0, next = current + 1;
  if (!ranges[next]) return [ranges[current]];
  let output = [];

  ranges.sort((a, b) => a[0] - b[0]);

  let newTuple = ranges[current];
  while (ranges[current]) {
    if (newTuple[1] >= ranges[next]?.[1] )  next += 1
    else if (newTuple[1] >= ranges[next]?.[0] ) {
      newTuple = [ ranges[current][0],  ranges[next][1] ];
      next += 1;
    }
    else {
      output.push(newTuple);
      current = next;
      next = current + 1; 
      newTuple = ranges[current];
    }
  }

  return output;
}


/*
Write a function mergeRanges that takes an array of meeting time ranges and
returns an array of condensed ranges, merging the overlapping intervals.

Example:
intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
mergeRanges(intervals); -> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
mergeRanges(intervals); -> [[1, 6], [8, 10], [15, 18]]

Do not assume the ranges are in order. The intervals array will have at least
one range in it.

Hint:
Sort the intervals by their start value beforehand! This makes the problem
actually tractable. To do this, use a custom callback for the .sort() method,
described here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
(especially the part about compare numbers instead of strings)

After sorting, think about how to merge the intervals together.

*/
const mergeRanges = ranges => {

}

// test cases











module.exports = {mergeRanges};

/*


// intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
// console.log(mergeRanges(intervals)); //-> [[0, 1], [3, 8], [9, 12]]

// console.log('---------------------')
// intervals = [[0, 6], [8, 11]]
// console.log(mergeRanges(intervals)); //-> [[1, 6], [8, 10], [15, 18]]

// console.log('---------------------')
// intervals = [[6, 7], [2, 5], [12, 15], [10, 11]];
// console.log(mergeRanges(intervals)); //->[[0, 1], [3, 12]]

// console.log('---------------------')
// intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// console.log(mergeRanges(intervals)); //-> [[0, 1], [3, 8], [9, 12]])

// console.log('---------------------')
// intervals = [[0, 4], [1, 3], [2, 4], [0, 5]];
// console.log(mergeRanges(intervals)); //->[0, 5]

// console.log('---------------------')
// intervals = [[2, 8]];
// console.log(mergeRanges(intervals)); //->

*/ 
