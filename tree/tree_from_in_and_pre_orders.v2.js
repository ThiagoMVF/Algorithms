// https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/
// Construct Tree from given Inorder and Preorder traversals
// Let us consider the below traversals:

// Inorder sequence: D B E A F C
// Preorder sequence: A B D E C F

function treeNode(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

var inOrderInput = ['D', 'B', 'E', 'A', 'F', 'C'];
var preOrderInput = ['A', 'B', 'D', 'E', 'C', 'F'];

function constructTree(inOrderP, preOrderP) {
  var visitedPreElements = [];

  var posInOrderHashMap = {};

  inOrderP.forEach(function(val, idx) {
    posInOrderHashMap[val] = idx;
  });

  function buildTree(inOrderParam, preOrderParam, start, end) {
    if (start == end) {
      return null;
    }
    var currentNode = new treeNode(preOrderParam[visitedPreElements.length]);
    visitedPreElements.push(true);
    if (start - end == 1) {
      return currentNode;
    }

    var posCurrNodeInOrder = posInOrderHashMap[currentNode.value];
    currentNode.leftChild = buildTree(inOrderParam, preOrderParam, start, posCurrNodeInOrder);
    currentNode.rightChild = buildTree(inOrderParam, preOrderParam, posCurrNodeInOrder + 1, end);
    return currentNode;
  }
  return ((inOrderP && inOrderP.length) ?
    buildTree(inOrderP, preOrderP, 0, inOrderP.length) :
    null);
}

constructTree(inOrderInput, preOrderInput);