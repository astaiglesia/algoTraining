// write code to remove duplicates from an unsorted linked list
// extension: solve without a temporary buffer

/**
 **** input: list: head Node of a linked list
 **** output: head Node of a linked list
 **** givens: 
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
 **** approach:
 * - traverse the list from the head while next is not null
 *    - maintain a set of unique list values
 *    - maintain an index
 *    - maintain prev, current pointers
 *    - if set has current remove current Node
 *    - else add to set and reassign pointers
 *  - return this
 **** edges: 
 * - invalid inputs
 **** timespace: 
 * - linear time based on size of linked list
 * - linear space based on size of Set
 * alt approach: 
 * - eliminate Set to achieve constant space
 * - traverse LL for each node to check if val already exists in LL -> quadratic time complexity
 * alt2 approach:
 * - sort the list and check the current val against prev val
 * - log-linear time and constant space
 * - ASSUMES the list values are of the same type and we can mutate the order of the list
 * 
 * 
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



/** TEXT SOLUTION
 * 
 * 
 *   function solution(list) {
 *     const _set = new Set();
 *     let cur = list.head;
 *     let prev = null;
 *     while (cur) {
 *       if (_set.has(cur.value)) {
 *         // duplicate found
 *         // de-link it from the list
 *         // cur jumps next but previous stays
 *         // right behind cur (as always)
 *         let elem = cur;
 *         prev.next = cur.next;
 *         cur = cur.next;
 *         elem.next = null;
 *       }
 *       else {
 *         // add to the set
 *         _set.add(cur.value);
 *         prev = cur;
 *         cur = cur.next;
 *       }
 *     }
 *
 *     return list;
 *   }
 *
 *   // quick test
 *   let list = new LinkedList();
 *   for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
 *     list.append(elem);
 *   }
 *
 *   removeDuplicates(list);
 *
 *   console.log(list._toArray()); // [1, 5, 6, 8]
 * 
 * 
 */



module.exports = { removeDuplicates };
