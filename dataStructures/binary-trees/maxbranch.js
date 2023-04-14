const { BSTNode } = require("../lib");

/** MAX Branch
 * You are given a binary tree. 
 * Implement the method maxSum which returns the maximal sum of a branch from root to leaf. 
 * given: bst node definition as shown
 */


// mk1 - wrap a recursive function, encapsulating max val tracker
function maxSum(root) {
  let currentMax = -Infinity
  
  const sumFinder = (node, currentSum = 0) => {    
    if (!node) {
      return((currentSum > currentMax) && (currentMax = currentSum))
    }

    currentSum += node.val
    sumFinder(node.left, currentSum, currentMax)
    sumFinder(node.right, currentSum, currentMax)
  }
  sumFinder(root)

  return currentMax
}



/** test case
 * 
 *              5
 *        15            25
 *     10     5     10      30
 *                    25   
 */
const root = new BSTNode(5)
const a = new BSTNode(15)
const b = new BSTNode(25)
const c = new BSTNode(10)
const d = new BSTNode(5)
const e = new BSTNode(10)
const f = new BSTNode(30)
const g = new BSTNode(25)

root.left = a
root.right = b
a.left = c
a.right = d
b.left = e
b.right = f
e.right = g

console.log(`expect ${maxSum(root)} to equal 65`)

module.exports = { maxSum }