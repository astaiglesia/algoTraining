function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 * input: head: Node
 * output: Node
 * approach: recursive
 * - maintain a current and prev nodes
 * - traverse the list
 *  - process each node by reassigning next pointers to point to prev
 *      - use a temp to store the next node  
 *  - terminate traversal when current is null
 */

const reverseLinkedList = (root, prev = null, next = root?.next) => !root ? prev 
  : (root.next = prev, reverseLinkedList(next, root))

// const reverseLinkedList = (head, prev = null, temp = current?.next) => {
//   // base case 
//   if (current === null) return prev
  
//   // recursively process the node - reassign pointers, tail call to tnext current
//   current.next = prev  
//   return reverseLinkedList(head, temp, current)
// };

// test case
let tester = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
// console.log(reverseLinkedList(tester))

module.exports = { Node, reverseLinkedList }
