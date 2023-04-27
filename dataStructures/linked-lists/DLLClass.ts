/** DOUBLY LINKED LIST CLASS
 * 
 * note: pop and shift implementations return node values, not entire node
 * 
 * addtl reading: 
 * https://www.typescriptlang.org/docs/handbook/2/generics.html
 */

class Node<T> {
  data: T;
  prev: Node<T> | null;
  next: Node<T> | null;

  constructor(data: T, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
export class LinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  length: number = 0;  
  
  count(): number {
    return this.length;
  }
  
  push(data: T): LinkedList<T> {
    const newTail = new Node(data);
    !this.tail 
      ? this.head = newTail                                          // handle empty list
      : (this.tail.next = newTail, newTail.prev = this.tail)         // typ case
    
    this.tail = newTail;                                             // update DLL properties
    this.length += 1;
    
    return this;
  }
  
  pop(): T {                                                         // ---- implementation returns data, not node
    if (!this.tail) throw new Error('LL is empty - nothing to pop')  // handle empty list
    
    const currentTail = this.tail;
    !currentTail.prev
      ? (this.head = null, this.tail = null)                         // handle single element list
      : (this.tail = currentTail.prev, this.tail.next = null)        // typ case
    
    currentTail.prev = null;                                         // disconnect popped node + update DLL properties
    this.length -= 1;
    
    return currentTail.data;
  }
  
  unshift(data: T): LinkedList<T> {
    const newHead = new Node<T>(data);
    !this.head
      ? this.tail = newHead                                          // handle empty list
      : (newHead.next = this.head, this.head.prev = newHead)         // typ case
    this.head = newHead;                                             // update LL properties
    this.length += 1;
    
    return this;
  }
  shift(): T {                                                       // ---- implementation returns data, not node
    if (!this.head) throw new Error('Nothing to shift - LL is empty');
    
    const currentHead = this.head;
    !currentHead.next
      ? (this.head = null, this.tail = null)                        // handle single item list
      : (this.head = currentHead.next, this.head.prev = null, currentHead.next = null)
  
    this.length -= 1;
    
    return currentHead.data;
  }
  delete(data: T): LinkedList<T> {
    if (!this.head) throw new Error('Nothing to delete - LL is empty');
    
    let current: Node<T> | null = this.head;
    while (current && current.data !== data) {                      // traverse the list to match data
      current = current.next;
    }
    current && (                                                    // delete logic on match hits
      !current.prev ? this.shift()                                  // head matches
      : !current.next ? this.pop()                                  // tail matches
      : (
        current.next.prev = current.prev,                           // mid-list matches
        current.prev.next = current.next,
        current.next = null,
        current.prev = null,
        this.length -= 1
      ))
    
    return this;
  }
}