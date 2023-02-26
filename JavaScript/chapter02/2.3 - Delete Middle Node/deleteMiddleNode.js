// implement an algorithm to delete a node in the middle of a singly linked list
// - mid node is any between the first and last node
// input is the node to be deleted
const LinkedList = require("../util/LinkedListX");
const printList = require("../util/printList");

/**
 * input: target: Node
 * output: void 
 * givens: 
 * - input node is the target to be deleted
 * approach:
 * - reassign value and next properties
 * edges:
 * - invalid inputs
 *  - handle null node
 *  - handle tail node
 *  - handle head node
 * timespace:
 * - constant time constant space
 */

const deleteMidNode = target => {

}


module.exports = { deleteMidNode };

/** TEXT Solution
 * 
 *  let solution = function(node) {
 *
 *    if(node !== null && node.next !== null) {
 *      node.value = node.next.value;
 *      node.next = node.next.next;
 *      }
 *  };
 *
 *   TEST
 *
 *  let list = new LinkedList();
 *  for (let item of [1, 2, 3, 4, 5, 6]) {
 *    list.append(item);
 *  }
 *
 *  printList(list.head);
 *  deleteMidNode(list.head.next);
 *  printList(list.head);
 * 
 */
