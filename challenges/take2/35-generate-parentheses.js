/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

// input:	an integer; output: an array of strings
// find: all combinations of well formed parens in the format of strings
// givens: an intetegers
// assumptions: none
// edge case: invalid input (non-integer)
// approach: recursive / iterative
// - assign an empty array as an output
// - initialize an empty string which will compose of n pairs of parens
// -- iterate through the possible combinations by concating parens to the string
// -- push each combination to output when parenString length/2 equals n
// -- return output when all combinations have been formed ---> ### do we need a stack to hold closing parens?
// --- if n = 0, return the empty string 
// --- if n = 1, cancat 1 open


// ------- Code --------

const generateParentheses = (n, output = [] ) => {
  
};

// test cases:
console.log(generateParentheses(2)); // <--- expect [ "(())", "()()" ]
console.log(generateParentheses(3)); // <--- expect [ "((()))", "(()())", "(())()", "()(())", "()()()" ]
console.log(generateParentheses(0)); // <--- expect [ "" ]

// ------- Refactor --------


module.exports = {generateParentheses};
