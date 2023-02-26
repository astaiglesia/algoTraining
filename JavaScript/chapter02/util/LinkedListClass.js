/******** SINGLY LINKED LIST ************
Operations ------------------------------
length()        -> returns the length of the list
unshift(value)  -> adds a new node to the head of the list, returns list
push(value)     -> adds a new node to the tail of the list, returns list
pop()           -> removes and returns the tail node
shift()         -> removes and returns the head node
find(index)     -> returns node at given index position
removeAt(index) -> removes and returns node at given index position
insertAt(index, value) 
    -> inserts a new node for given value in front of a given index, returns list
_toArray()      -> utility that prints list values as an array
*/


class Node {
	constructor(value, next) {
		this.value = value
		this.next = next || null;
	}
}
  
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	length() {
		let counter = 0,
				current = this.head;

		while (current) {
				counter += 1;
				current = current.next;
		}

		return counter;
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

		return this;
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

		return this;
	}
	
	pushNode(node) {
		if (!this.head) {
				this.head = node;
				this.tail = node;
		}
		else {
				this.tail.next = node;
				this.tail = node;
		}

		return this;
	}

	pop() {                                     
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

	shift() {                                   
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

	find(index) {
		if (index < 0 
			|| index > this.length() - 1
			|| !this.head) return undefined;
		let i = 0,
				current = this.head;

		while (current != null) {
			if (i == index) return current;
			current = current.next;
			i++;   
		}
	}

	removeAt(index) {
		if (index < 0 
			|| index > this.length() - 1
			|| !this.head) return 'undefined - invalid input';
		if (index === 0) return this.shift();
		if (index === this.length() - 1) return this.pop();
		
		let i = 0,
				current = this.head,
				prev = null;

		while (current != null) {
			if (i === index) {
				prev.next = current.next;
				current.next = null;

				return current;
			}
			else {
				prev = current;
				current = current.next;
				i += 1;
			}
		}

		return undefined;
	}

	insertAt(index, value) {
		if (index < 0 
				|| index > this.length() - 1
				|| !this.head
				|| !value) return 'invalid input';
		if (index === 0) return this.unshift(value);
		if (index === this.length() - 1) return this.push(value);

		const newNode = new Node(value);
		let current = this.head,
				i = 0;

		while (current !== null) {
			if (i === index - 1) {
					newNode.next = current.next;
					current.next = newNode;

					return this;
			}
			else {
					i += 1;
					current = current.next;
			}
		}
	}

	_toArray() {
		let arr = [];
		let current = this.head;
		while (current) {
				arr.push(current.value);
				current = current.next;
		}

		return arr;
	}
}
  
  module.exports = { LinkedList, Node };
  