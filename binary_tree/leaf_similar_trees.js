// https://leetcode.com/contest/weekly-contest-94/problems/leaf-similar-trees/
// Leaf-Similar Trees

/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Note:

Both of the given trees will have between 1 and 100 nodes.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  var getTreeLeafs = function(treeNode, leafs) {
    if (!treeNode.left && !treeNode.right) {
      leafs.push(treeNode.val);
      return;
    }
    if (treeNode.left) {
      getTreeLeafs(treeNode.left, leafs);
    }
    if (treeNode.right) {
      getTreeLeafs(treeNode.right, leafs);
    }
  }
  var tree1Leafs = [];
  getTreeLeafs(root1, tree1Leafs);
  var tree2Leafs = [];
  getTreeLeafs(root2, tree2Leafs);
  var equalArrays = function(arr1, arr2) {
    if (arr1.length != arr2.length) {
      return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return equalArrays(tree1Leafs, tree2Leafs);
};