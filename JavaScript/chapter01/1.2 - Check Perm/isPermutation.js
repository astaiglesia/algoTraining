// Check Permutation
// Given two strings, write a method to decide if one is a permutation of the other.

// input: str1, str2: string
// output: boolean
// givens:
// - permutations are combinations of the same letters in different arrangements
// approach: (n time + n space)
// - populate a frequency table
// - iterate and decrement the table
// alt: split and sort the strings then iterate to see if corresponding indices match (n log n)
// edges:
// - uneven lengths
// - nonmatching characters
// - invalid inputs
// timespace:

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  
  const freqTable = {};
  for (const char of str1) {
    !freqTable[char] ? freqTable[char] = 1 : freqTable[char] += 1;
  }
  for (const char of str2) {
    if (!freqTable[char] ) return false;
    freqTable[char] -= 1;
  }

  return true;
}


module.exports = { isPermutation };


var solution1 = function(stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};

// Tests
// console.log(checkPermute('aba', 'aab'), true);

// console.log(checkPermute('aba', 'aaba'), false);

// console.log(checkPermute('aba', 'aa'), false);