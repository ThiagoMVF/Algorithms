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
  var visitedElements = [];

  function buildTree(inOrderParam, preOrderParam) {
    if (!inOrderParam || inOrderParam.length == 0) {
      return null;
    }
    var currentNode = new treeNode(preOrderParam[visitedElements.length]);
    visitedElements.push(true);
    if (inOrderParam.length == 1) {
      return currentNode;
    }

    function findNodeIndex(element) {
      return element == currentNode.value;
    }

    var posCurrNodeInOrder = inOrderParam.findIndex(findNodeIndex);
    currentNode.leftChild = buildTree(inOrderParam.slice(0,posCurrNodeInOrder), preOrderParam);
    currentNode.rightChild = buildTree(inOrderParam.slice(posCurrNodeInOrder + 1), preOrderParam);
    return currentNode;
  }
  return buildTree(inOrderP, preOrderP);
}

constructTree(inOrderInput, preOrderInput);