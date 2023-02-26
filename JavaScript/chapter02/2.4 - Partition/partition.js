/** PARTITION()
 *  prompt: 
 *    write code to partition a linked list around a value x
 *    such that all nodes less than x come before all nodes greater than or equal to x
 *  IMPORTANT: 
 *    the partition element x can appear anywhere in the right partition 
 *    element x does not need to appear between the left and right partitions
 * 
 *  EXAMPLE:
 *  inputs: list: 3 > 5 > 8 > 5 > 10 > 2 > 1; partition = 5
 *  output: 3 > 1 > 2     >     10 > 5 > 5 > 8
 */

const { LinkedList } = require('../util/LinkedListClass.js')

/**
 * input: list: LL head, partition: number
 * output: LL head
 * givens:
 * - less than partition value to the left grouping
 * - greater than or equal to part val to the right grouping
 * approach: 
 *  create new lists and merge the two - linear time, constant space
 *  - create pushNode method / helper function that inserts a node at tail
 *  - traverse list
 *    - shift nodes and conditionally push to the proper partition group
 *    - merge the two lists (i.e. assign right head to left group tail property)
 * 
 * alt1: 
 * > linear time, constant space
 * - create an output list 
 * - traverse list and shift til current is null 
 *    - unshift() vals smaller than partition target to output list
 *    - else push() to output
 * 
 * alt2: 
 * > quadratic time + constant space
 * - get length of list 
 * - traverse list 
 *  - maintain 
 *    - counter init to 0
 *    - current node
 *  - while counter < length
 *  - if current greater than or equal to partition
 *    - update current 
 *    - removeAt counter and push
 *  - else increment counter + update current
 * edges:
 * - invalid inputs
 * - order of elements in partition does not seem to matter?
 * timespace:
 * - linear time, constant space
 */


const partition = (list, partTarget) => {
  const leftGroup = new LinkedList();               // init partitions
  const rightGroup = new LinkedList();

  let current = list.head;                          // init pointer
  while (current) {                                 // traverse the list
    const next = current.next;
    current.value < partTarget                      // conditionally populate partitions with shifted nodes
      ? leftGroup.pushNode(list.shift())
      : rightGroup.pushNode(list.shift());
    current = next;
  }

  leftGroup.tail.next = rightGroup.head;            // merge lists
  leftGroup.tail = rightGroup.tail;

  return leftGroup;
}



module.exports = { partition }


/** Reminder on garbage collection
 * Since Javascript is garbage collected, you don't need to delete objects themselves 
 * - they will be removed when there is no way to refer to them anymore.
 * 
 * It can be useful to delete references to an object if you are finished with them, 
 * because this gives the garbage collector more information about what is able to be reclaimed. 
 * If references remain to a large object, this can cause it to be unreclaimed 
 * - even if the rest of your program doesn't actually use that object.
 */