/*
Write a function to delete the first instance of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
 And given a value, 'b', the evaluated result of calling your function should be:

 ('a' -> 'c' -> 'b' -> 'd')

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

// function to accept a ll and a val; return mutated ll
const linkedListRemove = (ll, val) => {
  
  // use pointers for prev, current, next
  let previous = null;
  let current = ll.head;
  let next = current.next; // <--- ### Not necessary -refactor
  
  // traverse the ll with a conditional to search for the passed in value in current.val
  // --- while statement to reassign pointers until value is found
  while (current.val !== val || next) {
    next = current.next.next;
    current = current.next;
    previous = current;
  }
  
  // if found, reassign previous.next to next.val 
  if (current.val === val) {
    previous.next = next;
  }
  
  // return mutated ll
  return ll
};


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
