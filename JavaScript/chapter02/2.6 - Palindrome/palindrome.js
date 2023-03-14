/** PALINDROME()
 * prompt: 
 * implement a function to check if a given linked list is a palindrome
 * 
 * approaches:
 * - reverse the linked list and compare in traversal
 * - iterate with a data structure
 * - recursive solution
 * 
 */

/**
 * input: linked list instance
 * output: boolean
 * 
 * givens: palindrome LL is same forward and backwards
 * - assume: SLL
 * - assume: no whitespace
 * - assume: case insensitive
 * - assume: any characters
 * - assume: valid linked list instance input
 * 
 * approach:  populate and check against a stack
 * [] get length of list
 * [] set up a stack
 * [] determine max stack height (half or floor of half)
 * [] traverse and populate stack til max height (head half of list)
 * [] for each node on the back half, pop the stack and compare node values 
 * 
 * edge / use cases: 
 * - invalid inputs 
 * - handle non alpha chars?
 * - handle even/odd lengths
 * - handle whitespace?
 * - case sensitive?
 * - empty lists
 * 
 * timespace:
 * - linear time (2n)
 * - linear space (n/2)
 */

function isLLPalindrome(list) {
  const length = list.length(),
        isOdd = length % 2,
        stackHeight = Math.floor(length/2),
        stack = [];
  let current = list.head,
      tracker = 1,
      currentVal;

  while (current) {
    if (tracker <= stackHeight) {
      currentVal = typeof current.value === 'string' 
        ? current.value.toLowerCase()
        : current.value
      stack.push(currentVal);
    }
    if (tracker > stackHeight) {
      currentVal = typeof current.value === 'string' 
        ? current.value.toLowerCase()
        : current.value
      if (currentVal !== stack.pop()) return false;
    }
    if (tracker === stackHeight && isOdd) {
      current = current.next;
      tracker += 1
    }

    current = current.next;
    tracker += 1;
  }

  return true;
}

module.exports = { isLLPalindrome }

// TEXT SOLUTION
// // if doubly - move to middle, and then extend front and back to check
// // if singly - make a reversed linkedlist from the first half

// var LinkedList = require('./../util/LinkedList');

// var palindrome = function(head) {
//   var mid = head;
//   var end = head;
//   var isEven = true;
//   var firstHalf = null;
//   var frontNode = null;

//   while (end.next !== null) {
//     isEven = true;
//     if (firstHalf === null) {
//       firstHalf = new LinkedList(mid.value);
//     } else {
//       frontNode = firstHalf;
//       firstHalf = new LinkedList(mid.value);
//       firstHalf.next = frontNode;
//     }
//     mid = mid.next;
//     end = end.next;
//     if (end.next !== null) {
//       end = end.next;
//       isEven = false;
//     }
//   }

//   if (!isEven) {
//     mid = mid.next;
//   }

//   while(mid !== null) {
//     // console.log(mid.value, firstHalf.value);
//     if (mid.value !== firstHalf.value) {
//       return false;
//     }
//     mid = mid.next;
//     if (firstHalf!== null) {
//       firstHalf = firstHalf.next;
//     }
//   }
//   return true;

// };

// /* TEST */

// var a = new LinkedList('a');
// var b = new LinkedList('b');
// var c = new LinkedList('c');
// var d = new LinkedList('d');
// var e = new LinkedList('c');
// var f = new LinkedList('b');
// var g = new LinkedList('a');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;

// console.log(palindrome(a));
