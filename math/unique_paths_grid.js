// https://www.interviewbit.com/problems/grid-unique-paths/
// Grid Unique Paths

/*
  A robot is located at the top-left corner of an A x B grid (marked ‘Start’ in the diagram below).

  Path Sum: Example 1

  The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked ‘Finish’ in the diagram below).

  How many possible unique paths are there?

  Note: A and B will be such that the resulting answer fits in a 32 bit signed integer.

  Example :

  Input : A = 2, B = 2
  Output : 2

  2 possible routes : (0, 0) -> (0, 1) -> (1, 1) 
                OR  : (0, 0) -> (1, 0) -> (1, 1)
*/

//param A : integer
//param B : integer
//return an integer
var uniquePaths = function(A, B){
  var canMoveRight = function(dimensionX, posX) {
    return posX < dimensionX - 1;
  };

  var canMoveDown = function(dimensionY, posY) {
    return posY < dimensionY - 1;
  }

  var findUniquePaths = function(dimensionX, dimensionY, posX, posY) {
    if (posX == dimensionX - 1 && posY == dimensionY - 1) {
      return 1;
    }
    var myPaths = 0;
    if (canMoveRight(dimensionX, posX)) {
      myPaths += findUniquePaths(dimensionX, dimensionY, posX + 1, posY);
    }
    if (canMoveDown(dimensionY, posY)) {
      myPaths += findUniquePaths(dimensionX, dimensionY, posX, posY + 1);
    }

    return myPaths;
  };

  return findUniquePaths(A, B, 0, 0);
};
