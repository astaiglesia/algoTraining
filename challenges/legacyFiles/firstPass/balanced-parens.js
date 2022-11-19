/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

// ------ Step 1
// function accepts a string, returns a bool
// --- conditional statement checking if opening parens are matched to a closing parens
// ----- create a cache to match opening and closing parens
// ----- push opening parens into the array and pop if closing parens seen
// --- check cache at index length-1
// --- return true if iterated through string and cache is empty (i.e. all parens have been matched)
// --- else return false
// consider edge cases -> not a string, not parens
// const balancedParens = (input, cache = []) => {
//   // base cases
//   if (input.length === 0 && cache.length === 0) return true 
//   if (input.length === 0 && cache.length > 0) return false
//   if (input[0] === ')' && cache.length === 0) return false

//   // recursive case
//   if (input[0] === '(') cache.push(input[0])
//   if (input[0] === ')' && cache[cache.length-1] === '(') cache.pop()

//   return balancedParens(input.slice(1), cache);
// };



// ------ Step 2
// refactor step 1 to accomodate all brackets

const balancedParens = (input, cache = []) => {
  // base cases
  if (input.length === 0 && cache.length === 0) return true 
  if (input.length === 0 && cache.length > 0) return false
  if (input[0] === ')' && cache.length === 0) return false              // <--- closing brackets with an empty cache
  if (input[0] === ']' && cache.length === 0) return false 
  if (input[0] === '}' && cache.length === 0) return false 


  // recursive case
  if (input[0] === '(' || input[0] === '[' || input[0] === '{') cache.push(input[0])
  if (input[0] === ')' && cache[cache.length-1] === '(') cache.pop()
  if (input[0] === ']' && cache[cache.length-1] === '[') cache.pop()
  if (input[0] === '}' && cache[cache.length-1] === '{') cache.pop()

  return balancedParens(input.slice(1), cache);                        // <--- eliminates non bracket chars from consideration
};

// ----- Step 3
// refactor step 2 to eliminate non bracket characters
// step 2 code already eliminates non bracket chars from consideration
// const balancedParens = (input, cache = []) => {
//     // base cases
//     return (input.length === 0 && cache.length === 0) ? true 
//         :  (input.length === 0 && cache.length > 0) ? false
//         :  (input[0] === ')' && cache.length === 0) ? false              
//         :  (input[0] === ']' && cache.length === 0) ? false 
//         :  (input[0] === '}' && cache.length === 0) ? false 
//         :  {(input[0] === '(' || input[0] === '[' || input[0] === '{') ? cache.push(input[0]) 
//             : (input[0] === ')' && cache[cache.length-1] === '(') ? cache.pop() 
//             : (input[0] === ']' && cache[cache.length-1] === '[') ? cache.pop() 
//             : (input[0] === '}' && cache[cache.length-1] === '{') ? cache.pop()
//             return balancedParens(input.slice(1), cache) }
  
//   };
// test cases
console.log(balancedParens('('));  // false
console.log(balancedParens('((()))')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('()))'));  // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' const wow = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' const newton = () => { telescopes.areSicc(); ')); // false
console.log(balancedParens(' const coolFunc = () => { anotherCoolFunc(); }')); // true
console.log(balancedParens(' const yungHash = { a_key: { another_key: a_sicc_value } ;')); // false

module.exports = { balancedParens} ;
