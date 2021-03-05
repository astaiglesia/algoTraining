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

// instantiate a doubly linked list => dLL
// null <-> 4 <-> 9 <-> 2 <-> 1 <-> null
const dLL = new DoublyLinkedList()

console.log(dLL);     // should log an empty LL

// ----- instantiate and removes nodes on dLL
// -- access the ll's protoype and define two methods on it
// ---- 1st method is add
// This method should add a node to the end of the doubly linked list
// check if the head has a value, if no, assign to it the value of a new Node instance 
// else access dLL's tail and assign to it the value of an instantiation of Node
// no return val
DoublyLinkedList.prototype.add = function (val) {
  const addNode = new Node(val);
  
  if (!this.head) { 
    this.head = addNode;
    this.tail = addNode;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    return;
  }
  if (!this.head.next) {
    this.head.next = addNode;
    addNode.prev = this.head;
    // addNode.next = this.tail;
    return;
  }
  else {
    this.tail = addNode;
    // addNode.prev
  }
};

dLL.add(4);
// dLL.add(9);
// dLL.add(2);

console.log(dLL);

// ---- 2nd method is remove
/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {

};

module.exports = { DoublyLinkedList, Node };