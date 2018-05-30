/*
* https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/
* Lowest Common Ancestor in a Binary Search Tree
*
*           20
*          /   \
*         8     22
*        / \ 
*       4   12 
*          /  \
*         10  14
*
*/

function treeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function findLCA(root, value1, value2) {
  if ((value1 == root.value) || (value2 == root.value)) {
    return root;
  }
  else if (value1 > root.value) {
    if (value2 < root.value) {
      return root;
    }
    else {
      return findLCA(root.right, value1, value2);
    }
  }
  else {
    if (value2 > root.value) {
      return root;
    }
    else {
      return findLCA(root.left, value1, value2);
    }
  }
}

var root = new treeNode(20);
root.left = new treeNode(8);
root.right = new treeNode(22);
root.left.left = new treeNode(4);
root.left.right = new treeNode(12);
root.left.right.left = new treeNode(10);
root.left.right.right = new treeNode(14);

console.log(findLCA(root, 10, 14), '12');
console.log(findLCA(root, 14, 10), '12');
console.log(findLCA(root, 14, 8), '8');
console.log(findLCA(root, 8, 14), '8');
console.log(findLCA(root, 10, 22), '20');
console.log(findLCA(root, 22, 10), '20');
console.log(findLCA(root, 10, 10), '10');
