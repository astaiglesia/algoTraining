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
 */
// function accepts no args; instantiates to an aboject; no return
// func to assign properties of a stack -> an array-like LIFO object + an associated index property
// --- access the prototype of the stack function's object and assign methods:
// ------ push: add value to top (end) of stack
// ------ pop: remove value from top (end) of stack... return value?
// ------ edge case -> if array is empty, return undefined
function Stack() {
  this.storage = {};
  this.index = 0 
}
Stack.prototype.push = function (value) {        // accepts a val and populates storage at current index; increment index
  this.storage[this.index] = value;
  this.index += 1;
}
Stack.prototype.pop = function () {             // accesses storage object and deletes the property at current index - 1; decrement index
  const output = this.storage[this.index-1];
  delete this.storage[this.index-1];
  this.index -= 1;
  return output;
}



// function accepts no args; instantiates to an object; no return
// func to instantiate 2 call stacks, operate as a FIFO array like object and contain methods:
// ---- enqueue: add value to queue
// ---- deqeue: remove value to queue... return value
function Queue() {
  this.queueStore = {};
  this.index = 0
  const stack1 = new Stack;
  const stack2 = new Stack;    
}
Queue.prototype.enqueue = function (value) {
  this.storage[this.index] = value;
  this.index = 0;
}
Queue.prototype.dequeue = function () {
  const output = this.storage[0];       // store val at key 0 (first out)
                                        // slide values down one slot
  delete this.storage[--this.index]     // delete storage at key 0, decrement index, return stored value 
  return output
}


// test cases ---- Queue



// test cases ---- Stack
const testStack = new Stack;                    // instantiate a new stack

testStack.push(1);
testStack.push(2);
testStack.push(3);
testStack.push(4);
testStack.push(5);
console.log(testStack);
testStack.pop();
testStack.pop();
console.log(testStack);


module.exports = { Stack, Queue };
