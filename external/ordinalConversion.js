/**
 * convert a number to ordinal using TDD  
 * Asked to refactor the solution and talk through it
 * 
 */

// input: num: number
// output: string
// givens: use TDD 
// - ordinal numbers indicate position (e.g. 1st, 2nd, 3rd, 4th-20th, 21st, 42nd, 33rd, 100th, )
// approach: 
// - convert num to string
// - access the last char of the number (toString())
// - concat the number with the appropriate suffix
//    - determine the correct suffix pattern
//    - series of checks
//      - ends in 1: append with st
//      - ends in 2: append with nd
//      - ends in 3: append with rd
//      - else: append with th
// 
// ALT: lookup table or switch statement based on the last 2 chars
// edges:
// - invalid inputs
// - consider the various cases - 11th, 12th 13th
// - handle negatives
// timespace: constant space, linear time for conversion of num to string


const ordinalMaker = (num) => {
  let ordinal = num.toString();                     
  const lastChar = ordinal[ordinal.length - 1];
  const penulChar = ordinal[ordinal.length - 2];

  switch (lastChar) {
    case '1': 
      ordinal = penulChar === '1'
        ? ordinal.concat('th') 
        : ordinal.concat('st');
      break;
    case '2': 
      ordinal = penulChar === '1'
        ? ordinal.concat('th') 
        : ordinal.concat('nd');
      break;
    case '3': 
      ordinal = penulChar === '1'
        ? ordinal.concat('th') 
        : ordinal.concat('rd');
      break;
    default: 
      ordinal = ordinal.concat('th');
      break;
  }
  
  return ordinal;
}

// REFACTOR:
// improve time -> reduce the number of steps?
// space -> reduce mem usage
// readability -> naming, linting, eliminate if else blocks

//testcases:
console.log('expect conversion of 21:', ordinalMaker(21), 'should equal 21st');
console.log('expect conversion of 1:', ordinalMaker(1), 'should equal 1st');
console.log('expect conversion of 2:', ordinalMaker(2), 'should equal 2nd');
console.log('expect conversion of 12:', ordinalMaker(12), 'should equal 12th');
console.log('expect conversion of 313:', ordinalMaker(313), 'should equal 313th');
console.log('expect conversion of 1045:', ordinalMaker(1045), 'should equal 1045th');
console.log('expect conversion of 581:', ordinalMaker(581), 'should equal 581st');
