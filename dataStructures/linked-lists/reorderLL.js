/**
 * Definition for singly-linked list.
 * 
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * givens: 
 * approach:
 * implement LL class
 * - add length property, use as an index
 * - add remove, insert methods
 * - 
 * - track current init at head, newTail, tail
 * 
 * - ....
 * - from at length 
 * - 
 * edges:
 * timespace: 
 * 
 * 
 */

const reorderList = (head) => {
    
};


// testcase
const playlist = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))
console.log('expect', reorderList(playlist), 'to be 1 > 6 > 2 > 5 > 4 > 3')