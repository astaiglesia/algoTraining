/**
 * @param {number[]} nums
 * @return {number[][]}
 
 ** threeSum with a target of 0
 maintain an output array
 define a twoSum helper that locates matching pairs to a target of 0
    - helper should skip evaluation on init index (skipIdx)
    - return matching pairs

 set up a diffTable that populates an entry for each ele of input array
    - evaluate distance from origin (0)
    - distance: [idx]
 iterate through table entries
    - call twoSum with nums, distanceKey, skipIdx
    - if matching pairs found, push to entry value, push val to output

 return output

 edges:
 - handle negative numbers
 - invalid inputs
 - ### handle duplicate values in input

 timespace: quadratic time, space
 */


const threeSum = (nums) => {
    const diffTable = {};
    const matchingTriplets = [];

    const twoSum = (nums, target, skipIdx) => {
        const sumTable = {};
        // populate the sum table
        const output = []

        for (let i = 0; i < nums.length; i++) {
            if (i === skipIdx) continue;
            const currentDiff = target - nums[i];
            
            // console.log(i, 'new loop >>> target of', target, 'against current num', nums[i], 'current Diff is ', currentDiff)

            // check if curent diff 
            console.log(sumTable)
            if (sumTable[currentDiff]) {
                output.push([sumTable[currentDiff], i])
            }

            else {
              sumTable[nums[i]] = i
            }
        }
        return !output.length ? false : output;
    }

    // populate diff table with distances from 0
    nums.forEach((num, idx) => {
        const currentDiff = (0 - num);
        diffTable[idx] = currentDiff;
    })

    // iterate thru entries and pass as args to twosum
    Object.entries(diffTable).forEach(([idxArr, targetDiff]) => {      
        const tripletMatch = twoSum(nums, targetDiff, parseInt(idxArr))
        console.log("🚀 ~ file: threeSum:66 ~ Object.entries ~ tripletMatch", tripletMatch)
  

        if (tripletMatch) {
          tripletMatch.forEach(triplet => matchingTriplets.push([parseInt(idxArr), ...triplet]))
          console.log('added triplet', matchingTriplets)
        }
      })
      
    const eval = matchingTriplets.map(triplet => [nums[triplet[0]], nums[triplet[1]], nums[triplet[2]]])
    console.log("🚀 ~ file: threeSum:85 ~ threeSum ~ eval", eval)

    // need to filter out non-un

    return eval
};


// testcases
let tester = [-1,0,1,2,-1,-4]
// expectedOutput: [[-1,-1,2], [-1,0,1]]

console.log('new testcase - passing in: ', tester);
console.log(threeSum(tester));

