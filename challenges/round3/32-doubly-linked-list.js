/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of

  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  

Example after using 'add' method to add 6
null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

Example after using 'remove' method to remove 2
null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

NOTE: must use non-arrow functions for object constructors and prototype methods
@see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

  // create add() - adds an additional node to the tail
  // create a new node
  // access the tail 
  // reassign next val
  // reassign tail
  

DoublyLinkedList.prototype.add  = function (data) {
  const newNode = new Node(data)
  
  if (!this.head) {
    this.head = newNode
  } else if (!this.tail) {
    this.tail = newNode
    this.head.next = newNode
    this.tail.prev = this.head
  } else {
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
  }

  return this
}

// traverse the list, reassigning pointers and terminating at target
// maintain a ref to prev and current nodes
// on target hit, disconnect current and rewire prev and next
// handle target misses + head / tail targets

DoublyLinkedList.prototype.remove = function (target) {
  let current = this.head, prev = null, temp;
  while (current && current.val !== target) {
    prev = current
    current = current.next
  }

  if (current === this.head) {
    temp = current.next
    temp.prev = null
    current.next = null
    this.head = temp
  } else if (current === this.tail) {
    prev.next = null
    current.prev = null
    this.tail = prev
  } else {
    temp = current.next
    temp.prev = prev
    prev.next = temp
    current.next = null
  }

  return current
};


module.exports = { DoublyLinkedList, Node };
