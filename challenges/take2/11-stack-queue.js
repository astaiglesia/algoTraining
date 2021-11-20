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


function Stack() {
  this.storage = {};
  this.index = 0 
}
Stack.prototype.push = function (value) {        
}

Stack.prototype.pop = function () { 
}

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

function Queue() {
  this.queueStore = {};
  this.index = 0

}
Queue.prototype.enqueue = function (value) {
}

Queue.prototype.dequeue = function () {
}


// test cases ---- Queue





module.exports = { Stack, Queue };
