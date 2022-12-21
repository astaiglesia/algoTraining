// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adds a new node to the tail of a linked list
    push(val){
        const newNode = new Node(val);

        !this.head ? (
            this.head = newNode
        ) : (
            this.tail.next = newNode
        );        
            this.tail = newNode
            this.length += 1
            
        return this;
    }

    // removes the tail node of a list and returns
    pop(){
        if (!this.tail) return undefined;                               // handles null list
        let newTail = this.head;                                        // traverse to create reference to node prev to tail
        while (newTail.next && newTail.next != this.tail) newTail = newTail.next;       
        
        const oldTail = this.tail;                                      // create ref to current tail + disconnect from newTail
        newTail.next = null;

        this.length -= 1;                                               // decrement length
        this.length === 0 ? (this.tail = null, this.head = null)        // handle edge of popping a single node list
            : this.tail = newTail;

        return oldTail;
    }

    // removes the head node of a list and returns
    shift() {
        if (!this.head) return undefined;
        const oldHead = this.head;                                     // set up temp ref to return
        this.length -= 1;                                              // decrement length and reassign references

        (this.length === 0) ? (this.head = null, this.tail = null)     // handle edge of popping a single node list
            : this.head = this.head.next;                              // reassign the instance head property
        
        oldHead.next = null;                                           // disconnect oldHead
        
        return oldHead;
    }

    // inserts a node at the head of the list
    unshift(val) {
        const newNode = new Node(val);
        
        !this.head ? this.tail = newNode : newNode.next = this.head;
        this.head = newNode;
        this.length += 1;

        return this;
    }

    // given a position, retrieves the node traversing a distance of that value
    get(position) {
        if (position < 0 || position >= this.length) return null;

        let counter = 0,
            current = this.head;

        while (counter < position) {
            current = current.next;
            counter += 1;
        }

        return current;
    }

    // given a position and value, reassign the value of the node at the given position
    // - traverse to position (GET)
    // - reassign value of node
    set(position, val) {
        const target = this.get(position);

        return !target ? false : (target.val = val, true)
    }

    // insert - given a position and value, instantiate and insert a new node of value at that position
    insert(position, val) {
        if (position < 0 || position > this.length) return false;
        if (position === 0) return list.unshift(val);
        if (position === this.length) return list.push(val);
            
        const newNode = new Node(val);
        const target = this.get(position - 1);
        newNode.next = target.next;
        target.next = newNode;
        this.length += 1;

        return this;
    }

    // remove - given a position, remove the node at that index
    remove(position) {
        if (position < 0 || position > this.length - 1) return undefined;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();
        
        let prev = this.get(position - 1),
            target = prev.next;

        prev.next = target.next;
        target.next = null;
        this.length -= 1;

        return target;
    }

    // traverse and print the values
    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }
    }

    // reverses the linked list
    reverse() {
        let current = this.head, 
            prev = null;
        
        while (current) {
            const temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        this.tail = this.head;
        this.head = prev;

        return prev;
    }
}



const list = new SinglyLinkedList()
list.push("HELLO")
list.push("My Love")
list.push("GOODBYE")
list.push("Cruel World")
list.pop()
list.pop()

const removed = list.pop();
// console.log('^^^^^^', removed, list);

const shifty = list.shift();
// console.log('<<<<', shifty, list);

list.unshift('Verlander')
list.unshift('Scherzer')
list.push('Quintana')

// console.log('+++++', list)              // expect Scherzer > Verlander > Quintana

list.reverse()
// console.log('<><>', list);                   // expect Quintana  > Verlander > Scherzer

// console.log('---0',list.get(0))      // expect Quintana
// console.log('---1',list.get(1))      // expect Verlander
// console.log('---2',list.get(2))      // expect Scherzer
// console.log('---3',list.get(3))      // expect undefined

list.set(0, 'Carrasco')
// console.log('===setlist===')   // expect Carrasco > Verlander > Scherzer
// list.print()

console.log('inserting', list.insert(1, 'Senga'))
// console.log('===insert new===', list.length)   // expect Carrasco > Senga > Verlander > Scherzer
// list.print()

console.log('inserting', list.insert(3, 'Peterson'))
// console.log('===insert new===')   // expect Carrasco > Senga > Verlander > Peterson > Scherzer
// list.print()

console.log('inserting', list.insert(0, 'Quintana'))
// console.log('===insert new===')   // expect Quintana > Carrasco > Senga > Verlander > Peterson > Scherzer
// list.print()

console.log('inserting', list.insert(7, 'Diaz'))
// console.log('===insert new===')   // expect false
// list.print()                                // expect Quintana > Carrasco > Senga > Verlander > Peterson > Scherzer 

console.log(list.remove(7))                // expect undefined
console.log(list.remove(4))                // expect Peterson

list.reverse();

console.log('=== final list ===')    // expect Scherzer > Verlander > Senga > Carrasco > Quintana
list.print()

console.log(list.get(-1))                                // expect null
console.log(list.get(8))                                // expect null
console.log(list.get(2))                                // expect Senga