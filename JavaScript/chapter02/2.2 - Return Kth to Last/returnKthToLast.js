// prompt: implement an algorithm to find the kth to last element of a singly linked list
/**
 * input: list: LL; k: positive num
 * output: Node
 * givens: 
 * - k represents the number of nodes from the tail to find
 * approach:
 * - add class  utility method to determine length of linked list
 * - add class utility method to find and return node at specific index 
 * (or add a length prop to class constructor and update methods)
 * (or convert to doubly linked list and traverse backwards to kth node from tail)
 * - determine the index to find 
 * - return node
 * edges:
 * - invalid inputs: assume valid
 * - handle empty list -> return undefined
 * - handle k larger than length -> return undefined
 * - 
 * timespace:
 * - linear (2n) - traverse once for length and once for find
 */

const kthToLast = (list, k) => list.find(list.length() - 1 - k);



module.exports = { kthToLast }
