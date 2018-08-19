// https://leetcode.com/contest/weekly-contest-98/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
// Construct Binary Tree from Preorder and Postorder Traversal

/*
Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.

Example 1:

Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]

Note:

1 <= pre.length == post.length <= 30
pre[] and post[] are both permutations of 1, 2, ..., pre.length.
It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  var root = new TreeNode(pre[0]);
  var currNode = root;
  var nodeMap = {};
  nodeMap[pre[0]] = root;
  for(var i = 1; i < pre.length; i++) {
    nodeMap[pre[i]] = new TreeNode(pre[i]);
  }

  var buildTrees = function(currRoot, pre, preStartIndex, preEndIndex, post, postStartIndex, postEndIndex, processed) {
    // stop condition!
    if (preStartIndex > preEndIndex) {
      return;
    }
    var nextLeftEl = nodeMap[pre[preStartIndex]];
    var rightMostEl = nodeMap[post[postEndIndex]];
    currRoot.left = nextLeftEl;
    processed.push(nextLeftEl.val);
    var newPreEndIndex = rightMostEl != nextLeftEl ? pre.indexOf(rightMostEl.val) - 1 : preEndIndex;
    // left subtree
    buildTrees(nextLeftEl, pre, preStartIndex + 1, newPreEndIndex, post, postStartIndex, post.indexOf(nextLeftEl.val) - 1, processed);
    // if the subtrees differ (left and right) then we build right one
    if (rightMostEl != nextLeftEl) {
      currRoot.right = rightMostEl;
      processed.push(rightMostEl.val);
      // right subtree
      buildTrees(rightMostEl, pre, pre.indexOf(rightMostEl.val) + 1, preEndIndex, post, post.indexOf(nextLeftEl.val) + 1, postEndIndex - 1, processed);
    }
  }

  // Start by ignoring the root, which we've already placed
  buildTrees(root, pre, 1, pre.length - 1, post, 0, post.length - 2, [root.val]);

  return root;
};
