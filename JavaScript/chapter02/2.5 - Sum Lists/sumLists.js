const { LinkedList, Node } = require('../util/LinkedListClass.js');
/** sumLists()
 *  You have two numbers represented by linked lists where each node contains a single digit
 *  - digits are stored in reverse order (i.e. the 1's digit is stored at the head node)
 *  
 *  Write a function that adds the two numbers and returns the sum as a linked list. 
 * 
 *  DO NOT CONVERT LISTS INTO INTEGERS
 * 
 *  EXAMPLE:
 *  input: [7 -> 1 -> 6] + [5 -> 9 -> 2]
 *  output: [2 -> 1 -> 9]
 * 
 *  Extension 1:
 *  Solve for digits stored in forward order
 *  
 *  EXAMPLE:
 *  input: [7 -> 1 -> 6] + [5 -> 9 -> 2 -> 3]
 *  output: [6 -> 6 -> 3 -> 9]
 * 
 *  Extension 2: solve recursively
 * 
 */

/**
 * @param {LinkedList} list1 
 * @param {LinkedList} list2 
 * returns: LinkedList
 * givens: 
 * - lists represent individual integer digits in reverse
 * approach:
 * - sequentially traverse the lists 
 *  - maintain a pow integer base 10 and current pointer, incremented on each pass
 *  - maintain a remainder integer added to each node value
 *  - build an output list with each current value multiplied by 10 raised by the pow
 * edges:
 * - invalid inputs
 * - # handle empty lists
 * - handle uneven lists ## add test for longer testlist1
 * timespace:
 * - linear time and space
 */


const sumLists = (list1, list2) => {
  const output = new LinkedList();

  let current1 = list1.head,
      current2 = list2.head,
      carryA1 = 0;

  while (current1 || current2 || carryA1) {
    const currentSum = (current1 ? current1.value : 0) + (current2 ? current2.value : 0) + carryA1;
    const currentDigit = currentSum % 10;
    const newNode = new Node(currentDigit);
    
    output.pushNode(newNode);
    current1 = current1?.next;
    current2 = current2?.next;
    carryA1 = currentSum > 9 ? 1 : 0;
  }

  return output;
}

// *  EXAMPLE:
// *  input:       [7 -> 1 -> 6] 
//          + [5 -> 9 -> 2 -> 3]
// *  output: [6 -> 6 -> 3 -> 9]

const sumListsForward = (list1, list2) => {

}

const sumListsRecursive = (list1, list2) => {

}


module.exports = { sumLists, sumListsForward, sumListsRecursive };
