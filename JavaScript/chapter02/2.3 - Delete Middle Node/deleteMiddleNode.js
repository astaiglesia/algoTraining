// prompt:
// given a node of a singly linked list 
// - implement an algorithm to delete that node 
// - null and tail node inputs should return null 
// - typical input node is mid list - any between the first and last node

/**
 * input: target: Node
 * output: void || null
 * givens: 
 * - input node is the target to be deleted
 * approach:
 * - reassign target's value and next properties
 * edges:
 * - invalid inputs
 *  - handle null node -> return null
 *  - handle tail node -> return null (alt -> pop())
 *  - handle head node -> no exception taken - no way to determine previous nodes in singly linked list
 * timespace:
 * - constant time constant space
 */

const deleteMidNode = target => {
  if (!target || !target.next) return null;
  
  const next = target.next;
  target.value = next.value;
  target.next = next.next;
}


module.exports = { deleteMidNode };
