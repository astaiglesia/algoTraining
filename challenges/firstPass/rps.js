/*

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:



The strings must be returned in the order suggested above.

*/

// input: number; return: an array of strings (all length n)
// find: all the possible combinations possible with three different different letters
// approach: use nested iteration based on the input value - # of pointers conditional on value of n
// edge cases: n < 0, n is not a number, n > 3

const rps = (n, output = []) => {
  if (n === 0) return output
  
  const choices = ['r', 'p', 's'];

  for 

  
  return rps(n - 1, output)
};

// test cases:
console.log(rps(0)) // -> ['']
console.log(rps(1)) // -> ['r', 'p', 's']
console.log(rps(2)) // -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
console.log(rps(3)) // -> [
//   'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
//   'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
//   'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
// ]




/*

Extension:

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

const passwords = (chars, n) => {
  
};

module.exports = {rps, passwords};
