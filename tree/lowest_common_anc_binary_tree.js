/*
* https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/
* Lowest Common Ancestor in a Binary Tree
*
*            1
*          /   \
*         2     3
*        / \   / \
*       4   5 6   7
*/

function treeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function makePath(root, val) {
  if (!root) {
    return null;
  }

  if (root.value == val) {
    return [root];
  }
  var leftSubTreePath = makePath(root.left, val);
  var rightSubTreePath = makePath(root.right, val);

  if(!leftSubTreePath && !rightSubTreePath) {
    return null;
  }
  else if(!leftSubTreePath) {
    return [root].concat(rightSubTreePath);
  }
  else {
    return [root].concat(leftSubTreePath);
  }
}

function findLCA(root, value1, value2) {
  debugger;
  var pathToVal1 = makePath(root, value1);
  var pathToVal2 = makePath(root, value2);
  for (var i = 0; i < pathToVal1.length; i++) {
    if (pathToVal1[i] != pathToVal2[i]) {
      return pathToVal1[i-1];
    }
  }
  return pathToVal1[pathToVal1.length - 1];
}

var root = new treeNode(1);
root.left = new treeNode(2);
root.right = new treeNode(3);
root.left.left = new treeNode(4);
root.left.right = new treeNode(5);
root.right.left = new treeNode(6);
root.right.right = new treeNode(7);

console.log(findLCA(root, 4, 5), '2');
console.log(findLCA(root, 4, 6), '1');
console.log(findLCA(root, 3, 4), '1');
console.log(findLCA(root, 2, 4), '2');
console.log(findLCA(root, 4, 2), '2');
console.log(findLCA(root, 7, 3), '3');
console.log(findLCA(root, 3, 7), '3');
console.log(findLCA(root, 1, 6), '1');
console.log(findLCA(root, 6, 1), '1');
console.log(findLCA(root, 1, 7), '1');
console.log(findLCA(root, 7, 1), '1');
