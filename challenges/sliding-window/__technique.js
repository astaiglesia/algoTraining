/**  --- Sliding Window Algorithm ---
 *  
 * > computational technique aiming to reduce nested looping to reduce runtime complexity
 * - creates a window that progressively 'slides' across the array
 * - on each pass, the subset that was in the window is removed from subsequent iterations (has been seen
 * 
 * > SIZE OF THE WINDOW MUST BE FXED
 * 
 * GENERAL APPROACH
 * - Find the size of the window required
 * - Compute the result for 1st window, from the start of the data structure
 * - Use a loop to slide the window down until dataset has been processed, adjusting computation at each step
 * 
 * USE CASES
 * - array, subarray
 * - string, substring
 * - largestSum, maxSum, minSum
 *
 * */


/* ----------------------------------------------------------------- SLIDING WINDOW APPROACH
  - k represents the window size
  - process the window
  - slide window and repeat

  pseudocode
  - track windowSum and maxSum
  - sum the first window (elements 0 thru k) and assign to winSum and maxSum
  - starting at i = k, iterate new window sums by adjusting the initial iteration's result
    - decrement the previous windows first window val and increment by arr at i
    - reassign maxSum when current window sum is greater
*/
const slidingWindow = (arr, k) => {
  let maxSum = 0;
  for (let i = 0; i < k; i++){                // calculate initial window
    maxSum += arr[i];
  }

  let winSum = maxSum;
  for (let i = k; i < arr.length; i++){       // iterate over the remaining values
    winSum = winSum - arr[i - k] + arr[i];    // recalculate window and reassign maxsum
    winSum > maxSum && (maxSum = winSum);
  }

  return maxSum
}


/* ----------------------------------------------------------------- BRUTE FORCE APPROACH: O(n*k)
  - outer loop nests a window sum iterative calculation for each element in the array
  > sliding window approach eliminates the unnecessary repetition of iterative calculation
*/

const slidingWin_bf = (arr, k) => {
  let maxSum = -Infinity;                     // init as -Inf to handle negative winSums
  
  arr.forEach((ele, i) => {                   // outer loop visits each element O(n)
    let winSum = 0;
        
    for (let j = i; j < i + k; j++){          // inner loop calcs window sum O(k)
      winSum += arr[j];
    }

    (winSum > maxSum) && (maxSum = winSum);   // reassign maxSum as necessary
  })

  return maxSum
}

// ------------------------------------------------------------------ EXAMPLES
// Given an array of integers of size n
// - calculate the max sum of k consecutive elements in the array
// (maxSum of subarrays)
 

let input = [100, 200, 300, 400], k = 2,
//        maxSum    win1       win2       win3   
// Output : 700 => 100+200 vs 200+300 vs 300+400
// max sum is window 3      

input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20], k2 = 4,
// Output : 39
// max sum of a 4 element window is subarray [4, 2, 10, 23]

input3 = [2, 3], k3 = 3
// Output : Invalid
// no subarray of size 3 exists as length of input is 2



console.log(slidingWindow(input2, k2));       // expect 39
console.log(slidingWin_bf(input2, k2));       // expect 39