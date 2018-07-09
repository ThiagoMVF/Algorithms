// https://leetcode.com/contest/weekly-contest-92/problems/smallest-subtree-with-all-the-deepest-nodes/
// Smallest Subtree with all the Deepest Nodes

/*
  Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

  A node is deepest if it has the largest depth possible among any node in the entire tree.

  The subtree of a node is that node, plus the set of all descendants of that node.

  Return the node with the largest depth such that it contains all the deepest nodes in it's subtree.

  Example 1:

  Input: [3,5,1,6,2,0,8,null,null,7,4]
  Output: [2,7,4]
  Explanation:


  We return the node with value 2, colored in yellow in the diagram.
  The nodes colored in blue are the deepest nodes of the tree.
  The input "[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]" is a serialization of the given tree.
  The output "[2, 7, 4]" is a serialization of the subtree rooted at the node with value 2.
  Both the input and output have TreeNode type.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var calculateDepths = function(node, currentDepth) {
  node.depth = currentDepth;
  node.leftDepth = 0;
  node.rightDepth = 0;

  if (node.left) {
    node.leftDepth = calculateDepths(node.left, currentDepth + 1);
  }
  if (node.right) {
    node.rightDepth = calculateDepths(node.right, currentDepth + 1);
  }

  if (!node.left && !node.right) {
    return currentDepth;
  }
  else {
    return node.leftDepth > node.rightDepth ? node.leftDepth : node.rightDepth;
  }
}

var getChildWithBiggestDepth = function(node, depthSeeked) {
  if (node.leftDepth != node.rightDepth) {
    if (node.leftDepth == depthSeeked) {
      return getChildWithBiggestDepth(node.left, depthSeeked);
    }
    else {
      return getChildWithBiggestDepth(node.right, depthSeeked);
    }
  }
  else {
    return node;
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  calculateDepths(root, 0);
  var maxDepth = root.leftDepth > root.rightDepth ? root.leftDepth : root.rightDepth;
  return getChildWithBiggestDepth(root, maxDepth);
};
