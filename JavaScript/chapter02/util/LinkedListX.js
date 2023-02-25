// a new implementation of the linked list
/*
ADT:
# Main operations
prepend(value)        -> Add a node in the beginning
append(value)         -> Add a node in the end
pop()                 -> Remove a node from the end
popFirst()            -> Remove a node from the beginning
head()                -> Return the first node
tail()                -> Return the last node
remove(Node)*         -> Remove Node from the list
*/

// NOTE: no type-safety

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}
  
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

          
    unshift(value) {
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        return this.head
    }

    push(value) {
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this.head;
    }

  
    pop() {                                     // removes and returns current tail
        let current = this.head,                // set up pointers
            prev = null;
                                                // --- handle edges
        if (!current) return null;              // - no head
        if (!current.next) {                    // - single node list
            this.head = null;
            this.tail = null;

            return current;
        }
        
        while (current.next) {                  // traverse to tail
            prev = current;
            current = current.next;
        }
        
        prev.next = null;                       // disconnect current tail and rewire
        this.tail = prev;

        return current;                         
    }
  
    shift() {                                   // removes and returns current head
        let current = this.head;
                                                // --- handle edges
        if (!current) return null;              // - no head
        if (!current.next) {                    // - single node list
            this.head = null;
            this.tail = null;

            return current;
        }

        this.head = current.next;               // disconnect current head and rewire
        current.next = null;
        
        return current;
    }
  

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }
  
    removeAt(index) {
      let i = 0;
      let cur = this.head;
      let prev = null;
  
      while (cur != null) {
        if (i == index) {
          // remove
          if (prev == null)
            this.head = cur.next;
          else prev.next = cur.next;
          cur.next = null;
          return cur.value;
        }
        else {
          prev = cur;
          cur = cur.next;
          i++;
        }
      }
      return null;
    }
  
    insertAt(index, value) {
        if (index == 0) return this.prepend(value);
        let cur = this.head;
        let i = 0;
  
        while (cur != null) {
          if (i == index - 1) {
              let node = new Node(value);
              node.next = cur.next;
              cur.next = node;
              return true;
          }
          else {
              i++;
              cur = cur.next;
          }
        }
        return false;
    }
  

  
    _toArray() {
        let arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur.value);
            cur = cur.next;
        }
  
        return arr;
    }
}
  
  module.exports = LinkedList;
  
  /* TEST */
  
  // let l = new LinkedList();
  // l.append(3);
  // l.append(4);
  // l.append(10);
  // l.append(20);
  // l.append(5);
  
  // console.log(l.removeAt(1), 4);
  // console.log(l.pop().value, 5);
  
  // console.log(l._toArray());
  // l.insertAt(2, 40);
  // console.log(l._toArray());
  