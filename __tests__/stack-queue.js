const { Stack, Queue } = require('../challenges/round3/11-stack-queue');

describe('Stack Tests', () => {
  const myStack = new Stack();

  it('should have a "length" property.', () => {
    expect(myStack.height).toBeDefined();
    expect(myStack.height).toBe(0);
  })

  describe('Stack.push tests', () => {
    it('should have a push method', () => {
      expect(myStack.push).toBeDefined();
      expect(typeof (myStack.push)).toBe('function');
    })

    it('should add value to stack', () => {
      myStack.push(1);
      expect(myStack.storage[0]).toBe(1);
    })
    
    it('should increment height', () => {
      expect(myStack.height).toBe(1);
    })

    it('should add new values to top (end) of stack', () => {
      myStack.push(2);
      myStack.push(3);
      myStack.push(4);
      myStack.push(5);
      expect(myStack.storage[1]).toBe(2);
      expect(myStack.storage[4]).toBe(5);
    })
  })

  describe('Stack.pop tests', () => {
    it('should have a pop method', () => {
      expect(myStack.pop).toBeDefined();
      expect(typeof (myStack.pop)).toBe('function');
    })

    it('should remove and return value from top (end) of stack', () => {
      expect(myStack.pop()).toBe(5);
      expect(myStack.storage[4]).toBeUndefined();
    })
    
    it('should decrement height', () => {
      expect(myStack.height).toBe(4);
    })
  })

})

describe('Queue Tests', () => {
  const myQueue = new Queue();

  it('should consist of two Stacks', () => {
    expect(myQueue.inStack).toBeDefined();
    expect(myQueue.inStack).toBeInstanceOf(Stack);
    expect(myQueue.outStack).toBeDefined();
    expect(myQueue.outStack).toBeInstanceOf(Stack);
  })

  it('should have an enqueue method', () => {
    expect(myQueue.enqueue).toBeDefined();
    expect(typeof (myQueue.enqueue)).toBe('function');
  })

  it('should have a dequeue method', () => {
    expect(myQueue.dequeue).toBeDefined();
    expect(typeof (myQueue.dequeue)).toBe('function');
  })

  it('should return undefined if nothing to dequeue', () => {
    expect(myQueue.dequeue()).toBeUndefined();
  })

  it('should add and remove values from queue based on first in, last out rule', () => {
    myQueue.enqueue(1)
    myQueue.enqueue(2)
    myQueue.enqueue(3)
    expect(myQueue.dequeue()).toBe(1);
    expect(myQueue.dequeue()).toBe(2);
    expect(myQueue.dequeue()).toBe(3);
  })
});

