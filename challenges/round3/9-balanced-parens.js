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

// ------ Step 1 balanced parens



const balancedParens 


// test cases:
console.log(balancedParens('('));  // false
console.log(balancedParens('((()))')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('()))'));  // false
console.log(balancedParens('(())'));  // true

// ------ Step 2 balanced brackets


// const balancedParens 


// test cases:
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

// ----- Step 3 ignore non-bracket characters


// const balancedParens 
  

// test cases:
console.log(balancedParens(' const wow = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' const newton = () => { telescopes.areSicc(); ')); // false
console.log(balancedParens(' const coolFunc = () => { anotherCoolFunc(); }')); // true
console.log(balancedParens(' const yungHash = { a_key: { another_key: a_sicc_value } ;')); // false

module.exports = { balancedParens } ;
