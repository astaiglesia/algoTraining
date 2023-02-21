/** String Compression
 * Implement a method to perform basic string compression using the counts of sequentially repeated characters
 * e.g. aabcccccaaa => a2b1c5a3
 * if the compressed string would not become smaller than the original string, your method should return the original string
 * assume the string only has upper and lower case letters *  
 */ 

/**
 * @param : string 
 * @returns string
 * givens:
 * - function should compress sequentially repeated chars into char+count
 * - handle compressed strings that are not smaller than the input string
 * approach:
 * maintain char and counter states
 * initialize output string
 * iterate and check if char is saved
 * - if saved char, increment counter
 * - if not saved char
 *  - concat char and counter to output
 *  - reset char and counter
 * edges:
 * - invalid inputs
 * - handle non-alpha?
 * - ignore spaces?
 * - ignore casing?
 * - handle empty string
 * timespace:
 * - linear time
 * - linear space
 */

const strCompressor = str => {
  const sanitized = str.toLowerCase().replaceAll(' ', '');
  let output = '',
      hasCompressionGain = false,
      currentChar = '',
      counter;

  for (const char of sanitized) {
    if (char !== currentChar){
      currentChar && (output = output.concat(currentChar, counter));
      currentChar = char;
      counter = 0;
    }
    counter += 1;
    counter > 2 && (hasCompressionGain = true);
  }

  return !hasCompressionGain ? str : output.concat(currentChar, counter);
}



module.exports = strCompressor;



// TEXT SOLUTION
var textSolution = function(string) {
  var compressed = '';
  var currChar = '';
  var currCount = '';
  var maxCount = 1;
  for (var i = 0; i < string.length; i++) {
    if (currChar !== string[i]) {
      console.log(currChar, string[i], i);
      compressed = compressed + currChar + currCount;

      maxCount = Math.max(maxCount, currCount);
      currChar = string[i];
      currCount = 1;

    } else {
      currCount++;
    }
  }
  compressed = compressed + currChar + currCount;
  maxCount = Math.max(maxCount, currCount);

  return maxCount === 1 ? string : compressed;          // maxCount should be compared against < 3 since char and counter comprise two spaces
};

// testcases
// console.log('aaaaaa', strComp('aaaaaa'), 'a6');
// console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');