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
// func accepts an array; returns an array
// --- inputs: meeting times; 
// --- output: condensed ranges, merge overlaps
// # assume unordered intervals   ## assume at least one array
// sort the intervals 
// merge the intervals
// edge case - empty input array
const mergeRanges = (intervals, output = [], sortedArr = intervals.sort((a,b) => a[0]-b[0])) => {
  // console.log(sortedArr);
    // base case
    if (!sortedArr[0]) return output;  
    if (!sortedArr[1]) {output.push(sortedArr[0]); return output};  

    // recursive case
    let newSort;
    // if no overlap of first element
    if (sortedArr[0][1] < sortedArr[1][0]) {
      output.push(sortedArr[0]);
      newSort = sortedArr.slice(1);
    } 
    else if (sortedArr[0][1] > sortedArr[1][1]) {
      newSort = [sortedArr[0]].concat(sortedArr.slice(2));
    }  
    else {
      // merge overlaps
      const temp = [sortedArr[0][0], sortedArr[1][1]]
      newSort = sortedArr.slice(2);
      newSort.unshift(temp);
    }

    return mergeRanges(intervals, output, newSort);
};
 

// test cases
intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(intervals)); //-> [[0, 1], [3, 8], [9, 12]]

intervals = [[8, 10], [15, 18], [1, 3], [2, 6]]
console.log(mergeRanges(intervals)); //-> [[1, 6], [8, 10], [15, 18]]

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10], [4, 9]];
console.log(mergeRanges(intervals)); //->[[0, 1], [3, 12]]

intervals = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(intervals)); //-> [[0, 1], [3, 8], [9, 12]])

intervals = [[0, 4], [1, 3], [2, 4], [0, 5]];
console.log(mergeRanges(intervals)); //->[0, 5]

intervals = [];
console.log(mergeRanges(intervals)); //->

module.exports = {mergeRanges};
