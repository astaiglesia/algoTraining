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
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * 
 * Step 3:
 * ignore non-bracket characters :
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

// ------ Step 1 balanced parens
// utilize a stack, iterate and push open brackets, 
// closing brackets should have a matching open at the top of the stack


// let balancedParens = parens => {
//   const stack = [];

//   for (const paren of parens) {
//     if (paren === '(') stack.push(paren)
//     if (paren === ')') {
//       if (stack.pop() === '(') continue
//       else return false;
//     }
//   }

//   return stack.length ? false : true;
// }


// test cases:
// console.log(balancedParens('('));       // false
// console.log(balancedParens('((()))'));  // true
// console.log(balancedParens(')('));      // false
// console.log(balancedParens('()))'));    // false
// console.log(balancedParens('(())'));    // true

// ------ Step 2 balanced brackets
// add additional code for diff bracket types, use switch statement for a mature syntax
// make your solution work for all types of brackets


// balancedParens = parens => {
//   const stack = [];

//   for (const paren of parens) {
//     switch (paren) {
//       case '(':
//          stack.push(paren);
//          break;
//       case ')': 
//         if (stack.pop() === '(') continue;
//         else return false;
//       case '[':
//          stack.push(paren);
//          break;
//       case ']': 
//         if (stack.pop() === '[') continue;
//         else return false;
//       case '{':
//          stack.push(paren);
//          break;
//       case '}': 
//         if (stack.pop() === '{') continue;
//         else return false;
//       default:
//         return false;
//     }
//   }
  
//   return stack.length ? false : true;
// }




// test cases:
// console.log(balancedParens('[](){}'));    // true
// console.log(balancedParens('[({})]'));    // true
// console.log(balancedParens('[(]{)}'));    // false

// ----- Step 3 ignore non-bracket characters
//  default a continue
const balancedParens = parens => {
  const  stack = [];

  for (const paren of parens) {
    switch (paren) {
      case '(':
          stack.push(paren);
          break;
      case ')': 
        if (stack.pop() === '(') continue;
        else return false;
      case '[':
         stack.push(paren);
         break;
      case ']': 
        if (stack.pop() === '[') continue;
        else return false;
      case '{':
         stack.push(paren);
         break;
      case '}': 
        if (stack.pop() === '{') continue;
        else return false;
      default:
        continue;
    }
  }

  return stack.length ? false : true;
}
  

// test cases:
console.log(balancedParens(' const wow = { yo: thisIsAwesome() }'));                        // true
console.log(balancedParens(' const newton = () => { telescopes.areSicc(); '));              // false
console.log(balancedParens(' const coolFunc = () => { anotherCoolFunc(); }'));              // true
console.log(balancedParens(' const yungHash = { a_key: { another_key: a_sicc_value } ;'));  // false


module.exports = { balancedParens } ;
