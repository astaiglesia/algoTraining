/**Sum The Tree
 * 
 * @param {*} root: BST Node 
 * @returns number
 * 
 * approach:
 * sum the value of the root with  the children
 * solve dfs (any-order) or bfs
 * - just visit and process all nodes
 * process nodes
 * - if null root -> return 0
 * - else return sum of root.val with recursive calls to the children
 * 
 */

// recursive dfs preorder
const sumTheTreeValues = (root) => (!root) ? 0 
    : (root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)



module.exports = { sumTheTree }
