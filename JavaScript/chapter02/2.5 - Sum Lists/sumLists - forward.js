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
 *  Extension 1: solve for digits stored in forward order
 *  
 *  EXAMPLE:
 *  input: [7 -> 1 -> 6] + [5 -> 9 -> 2 -> 3]
 *  output: [6 -> 6 -> 3 -> 9]
 * 
 *  Extension 2: solve recursively
 * 
 */
// you have two nmbers represented by a linked list where each node contains a single digit
// the digits are stored in reverse order such tahat the 1's digit is at the head of the list
// write a function that adds the two numbers and returns the sum as a linked list

const LinkedList = require('./../util/LinkedList')
const printList = require('./../util/printList')

function sumLinkedListsForward(list1, list2) {
  if (!list1 && !list2) {
    return null
  }
  let length1 = length(list1)
  let length2 = length(list2)

  if (length1 > length2) {
    list2 = padList(list2, length1 - length2)
  } else if (length1 < length2) {
    list1 = padList(list1, length2 - length1)
  }

  const { head, nextDigitValue } = carryBase10(sumAndAppendNodes(list1, list2), 0)
  return nextDigitValue ? appendToStart(head, new LinkedList(nextDigitValue)) : head
}

function length(node) {
  let count = 0
  while (node) {
    count++
    node = node.next
  }
  return count
}

function padList(shortList, padding) {
  while (padding > 0) {
    shortList = appendToStart(shortList, new LinkedList(0))
    padding--
  }
  return shortList
}

function appendToStart(head, node) {
  node.next = head
  return node
}

function sumAndAppendNodes(node1, node2) {
  let value = (node1 ? node1.value : 0) + (node2 ? node2.value : 0)
  if (!node1.next && !node2.next) {
    return new LinkedList(value)
  }
  const {
    head,
    nextDigitValue
  } = carryBase10(sumAndAppendNodes(node1.next, node2.next), value)
  return appendToStart(head, new LinkedList(nextDigitValue))
}

function carryBase10(head, nextDigitValue) {
  if (head.value >= 10) {
    head.value = head.value % 10
    nextDigitValue += 1
  }
  return {
    head,
    nextDigitValue
  }
}

// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). this case refers to 617 + 295
// Output: 9 -> 1 -> 2. the answer refers to 912

var a = new LinkedList(6)
var b = new LinkedList(1)
var c = new LinkedList(7)

a.next = b
b.next = c

var d = new LinkedList(2)
var e = new LinkedList(9)
var f = new LinkedList(5)

d.next = e
e.next = f

printList(sumLinkedListsForward(a, d))




// =============================


var LinkedList = require('./../util/LinkedList');
var printList = require('./../util/printList');

var sumList = function(head1, head2) {
  
  var node1 = head1;
  var node2 = head2;
  var node3 = null;
  var head3 = null;
  
  var ones;
  var tens = 0;
  var sum;
  
  while (node1 !== null && node2 !== null) {
    if (node1 === null) {
      sum = node2.value;
    } else if (node2 === null) {
      sum = node1.value;
    } else {
      sum = node1.value + node2.value;
    }

    sum += tens;
    ones = sum % 10;
    if (node3 === null) {
      head3 = new LinkedList(ones);
      node3 = head3;
    } else {
      node3.next = new LinkedList(ones);
      node3 = node3.next;
    }

    tens = Math.floor(sum / 10);

    if (node1 !== null) {
      node1 = node1.next;
    }

    if (node2 !== null) {
      node2 = node2.next;
    }

  }
  if (tens > 0) {
    node3.next = new LinkedList(tens);
    node3 = node3.next;
  }

  return head3;
};

/* TEST */

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);

printList(newHead);

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
// Output: 2 -> 1 -> 9. the answer refers to 1612

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);

d.next = e;
e.next = f;

var newHead = sumList(a, d);

printList(newHead);
