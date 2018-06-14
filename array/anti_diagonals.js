// https://www.interviewbit.com/problems/anti-diagonals/
// Calculate anti-diagonals of a given matrix

/*  
Parameter:      
1 2 3
4 5 6
7 8 9

Return the following :

[ 
[1],
[2, 4],
[3, 5, 7],
[6, 8],
[9]
]
*/

//param A : array of array of integers
//return a array of array of integers
var antiDiagonals = function(A){
  if (!A || !A.length) {
      return null;
  }
  
  var returnMatrix = new Array(2*A.length - 1);
  
  for (var i = 0; i < Math.ceil(returnMatrix.length/2); i++) {
    if (i == Math.ceil(returnMatrix.length/2)) {
      returnMatrix[i] = new Array(i + 1);
    }
    else {
      returnMatrix[i] = new Array(i + 1);
      returnMatrix[returnMatrix.length - i - 1] = new Array(i + 1);
    }
  }
  
  var lastRowVisited = -1;
  var lastColumnVisited = A.length;
  var visitedRowEntirely = false;
  var currRow = 0;
  var currColumn = 0;
  
  while (lastRowVisited != A.length) {
    returnMatrix[currRow + currColumn][lastRowVisited + 1] = A[currRow][currColumn];
    if (lastRowVisited == A.length - 2) {
      break;
    }
    if (!visitedRowEntirely) {
      if (currColumn < lastColumnVisited - 1){
        currColumn++;
      }
      else {
        visitedRowEntirely = !visitedRowEntirely;
        lastColumnVisited--;
        currRow++;
      }
    }
    else {
      if (currRow < A.length - 1) {
        currRow++;
      }
      else {
        visitedRowEntirely = !visitedRowEntirely;
        lastRowVisited++;
        currColumn = 0;
        currRow = lastRowVisited + 1;
      }
    }
  }
  return returnMatrix;
};
