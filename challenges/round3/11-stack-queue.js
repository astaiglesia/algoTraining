/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 * ====== STACK: OBJECT BASED  IMPLEMENTATION ====== 
 *                                 L-I-F-O
 * (maintains the length and allows for constant time access to the top of the stack)
 * push:
 * function should accept a val and create a new node
 * creates new sequential properties in the storage object per the Stack's hieght property
 * tracks the height to be used as an incoming val's key
 * - constant time operation via the height property as a key
 * 
 * ===== QUEUE: DUAL STACK IMPLEMENTATION ======
 *                            F-I-F-O
 * 
 * utilize 2 stacks to juggle frames ensuring FIFO operations
 * - 2 approaches: costly enqueue vs costly dequeue
 * - juggling operation will be linear time to move all frames from one stack to the other
 * - non-juggling will be constant time push or pop
 * - costly dequeue approach can be preferable as the amortized time complexity is constant
 */


function Stack() {
  this.storage = {};
  this.height = 0;
}

Stack.prototype.push = function(data)  {
  this.storage[this.height] = data;
  this.height += 1;
}

Stack.prototype.pop = function () { 
  this.height -= 1;
  const temp = this.storage[this.height];
  delete this.storage[this.height];
  
  return temp;
}

// test cases ---- Stack
const testStack = new Stack;                    // instantiate a new stack

testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(5);
// console.log(testStack);
// console.log('expect', testStack.pop(), 'to be 5'); 
// console.log('expect', testStack.pop(), 'to be 4'); 
// console.log('expect', testStack, 'to be 1,2,3'); 

// =============== Queue - Costly Dequeue approach
// enQueue(q,  x)
//   1) Push x to stack1 (assuming size of stacks is unlimited).
// Here time complexity will be O(1)

// deQueue(q)
//   1) If both stacks are empty then error.
//   2) If stack2 is empty
//        While stack1 is not empty, push everything from stack1 to stack2.
//   3) Pop the element from stack2 and return it.
// Here time complexity will be O(n)**           
// ** note that this operation is what amortizes the time complexity to constant time as it only occurs on an empty outStack
// ** the worst case scenario of linear time to push frames from instack to outstack allows subsequent enqueues to be constant time

function Queue() {
  this.inStack = new Stack;
  this.outStack = new Stack;
  this.index = 0
}

Queue.prototype.enqueue = function (data) {
  this.inStack.push(data);
}

Queue.prototype.dequeue = function () {
  if (!this.inStack.height  && !this.outStack.height) {
    console.log('Queue is empty');
    return;
  }

  // if outstack is empty pop and push frames from instack to outstack
  if (!this.outStack.height) {
    while (this.inStack.height > 0) this.outStack.push(this.inStack.pop());
  }

  return this.outStack.pop();
}


// test cases ---- Queue
const waitingList = new Queue;
waitingList.enqueue('Nimmo')
waitingList.enqueue('Marte')
waitingList.enqueue('Lindor')
waitingList.enqueue('Alonso')
waitingList.enqueue('McNeill')
waitingList.enqueue('Canha')
waitingList.enqueue('Escobar')

// console.log('expect', waitingList.dequeue(), 'to be Nimmo')
// console.log('expect', waitingList.dequeue(), 'to be Marte')

waitingList.enqueue('Vogelbach')
waitingList.enqueue('McCann')

// console.log(waitingList.inStack) // Vogelbach, Mccann
// console.log(waitingList.outStack)



module.exports = { Stack, Queue };
