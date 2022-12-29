/*
Write a function to delete the first instance of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
 And given a value, 'b', the evaluated result of calling your function should be:

 ('a' -> 'c' -> 'b' -> 'd')

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition - to access this
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition 
function Node(val) {
  this.val = val;
  this.next = null;
}

// input: ll: Node, val: num
// output: Node
// givens: 
// - reteurn updated list
// approach:
// - maintain pointers prev, current
// - traverse the list until target equals val
// - rewire using a temp to next
// edges:
// - target not found
// - invalid inputs
// - handle deleting of head

// testcase: a > d > b > c > b  

const linkedListRemove = (ll, target, prev = null, current = ll.head) => {
  return (current === null) ? ll
    : (ll.head.val === target) ? (
      ll.head = current.next,
      current.next = null,
      ll.head
    ) 
    : (current.val === target) ? (
      prev.next = current.next,
      current.next = null,
      ll
    )
    : linkedListRemove(ll, target, current, current.next)
}


/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {

}

module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };
