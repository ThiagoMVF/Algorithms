// https://leetcode.com/contest/weekly-contest-92/problems/transpose-matrix/
// Transpose Matrix

/*
  Given a matrix A, return the transpose of A.

  The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

  Example 1:

  Input: [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[1,4,7],[2,5,8],[3,6,9]]
  Example 2:

  Input: [[1,2,3],[4,5,6]]
  Output: [[1,4],[2,5],[3,6]]
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  var tmp = 0;
  var transposed = new Array(A[0].length);
  for (var k = 0; k < A[0].length; k++) {
    transposed[k] = new Array(A.length);
  }
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[0].length; j++) {
      transposed[j][i] = A[i][j];
    }
  }

  return transposed;
};
