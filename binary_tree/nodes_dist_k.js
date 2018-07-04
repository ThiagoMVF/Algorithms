// https://leetcode.com/contest/weekly-contest-91/problems/all-nodes-distance-k-in-binary-tree/
// All Nodes Distance K in Binary Tree

/*
  We are given a binary tree (with root node root), a target node, and an integer value K.

  Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

  Example 1:

  Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

  Output: [7,4,1]

  Explanation: 
  The nodes that are a distance 2 from the target node (with value 5)
  have values 7, 4, and 1.

  Note that the inputs "root" and "target" are actually TreeNodes.
  The descriptions of the inputs above are just serializations of these objects.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var markKDistantNodes = function(currentNode, target, distanceFound, distance, kDistantNodes) {
  var currDistance = distanceFound;
  if (currentNode == target) {
    currDistance = 0;
  }

  var myLeftDistance = -1;
  var myRightDistance = -1;
  if (currDistance >= 0) {
    if (currentNode.left) {
      myLeftDistance = markKDistantNodes(currentNode.left, target, currDistance + 1, distance, kDistantNodes);
    }
    if (currentNode.right) {
      myRightDistance = markKDistantNodes(currentNode.right, target, currDistance + 1, distance, kDistantNodes);
    }
    if (currDistance == distance) {
      kDistantNodes.push(currentNode.val);
    }
  }
  else {
    if (currentNode.left) {
      myLeftDistance = markKDistantNodes(currentNode.left, target, currDistance, distance, kDistantNodes);
    }
    if (currentNode.right) {
      myRightDistance = markKDistantNodes(currentNode.right, target, currDistance, distance, kDistantNodes);
    }
    if (myLeftDistance == distance || myRightDistance == distance) {
      kDistantNodes.push(currentNode.val);
    }
  }
  
  if (currDistance == -1) {
    if (myLeftDistance != -1) {
      currDistance = myLeftDistance + 1;
      if (currentNode.right) {
        myLeftDistance = markKDistantNodes(currentNode.right, target, currDistance, distance, kDistantNodes);
      }
    }
    else if(myRightDistance != -1) {
      currDistance = myRightDistance + 1;
       if (currentNode.left) {
        myLeftDistance = markKDistantNodes(currentNode.left, target, currDistance, distance, kDistantNodes);
      }
    }
  }
  else if (currDistance == 0) {
    return 1;
  }

  return currDistance;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  var kDistantNodes = [];
  if (K == 0) {
    return [target.val];
  }

  markKDistantNodes(root, target, -1, K, kDistantNodes);
  return kDistantNodes;
};
