// prompt: write code to remove duplicates from an unsorted linked list
// extension: solve without a temporary buffer

/**
 * input: list: head Node of a linked list
 * output: head Node of a linked list
 * givens: 
 * - linkedlist is unsorted
 * - ext: solve without a temp Buffer
 * - utilizes LL class @ ../util/LinkedListX
 *  - with methods:
 *      > unshift(val) -> returns head node
 *      > push(val) -> returns head node
 *      > shift(): removes and returns the head
 *      > pop(): removes and returns the tail
 *      > head(): returns the head
 *      > tail(): returns the tail
 *      > removeAt(index): removes Node at specified index
 *      > insertAt(index, value): inserts a new Node at a specified index
 * approach:
 * - traverse the list from the head while next is not null
 *    - maintain a set of unique list values
 *    - maintain an index
 *    - maintain prev, current pointers
 *    - if set has current remove current Node
 *    - else add to set and reassign pointers
 *  - return this
 * edges: 
 * - invalid inputs
 * timespace: 
 * - linear time based on size of linked list
 * - linear space based on size of Set
 * alt approach: 
 * - eliminate Set to achieve constant space
 * - traverse LL for each node to check if val already exists in LL -> quadratic time complexity
 * alt2 approach:
 * - sort the list and check the current val against prev val
 * - log-linear time and constant space
 * - ASSUMES the list values are of the same type and we can mutate the order of the list
 */


const removeDuplicates = list => {
  let current = list.head,
      currentIdx = 0,
      prev = null,
      uniqueVals = new Set();  

  while (current) {
    if (!uniqueVals.has(current.value)) {
      uniqueVals.add(current.value);
      prev = current;
      current = current.next;
      currentIdx += 1;
    }
    else {
      const next = current.next;
      list.removeAt(currentIdx)
      current = next;
    }
  }

  return list;
}


module.exports = { removeDuplicates }
