// https://leetcode.com/contest/weekly-contest-91/problems/score-after-flipping-matrix/
// Score After Flipping Matrix

/*
  We have a two dimensional matrix A where each value is 0 or 1.

  A move consists of choosing any row or column, and toggling each value in that row or column: changing all 0s to 1s, and all 1s to 0s.

  After making any number of moves, every row of this matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

  Return the highest possible score.

  Example 1:

  Input: [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
  Output: 39
  Explanation:
  Toggled to [[1,1,1,1],[1,0,0,1],[1,1,1,1]].
  0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
   

  Note:

  1 <= A.length <= 20
  1 <= A[0].length <= 20
  A[i][j] is 0 or 1.
*/

var flipColumn = function(A, column) {
  for (var i = 0; i < A.length; i++) {
    A[i][column] = !A[i][column];
  }
}

var flipLine = function(A, line) {
  for (var j = 0; j < A[line].length; j++) {
    A[line][j] = !A[line][j];
  }
}

var binaryScore = function(A) {
  var score = 0;

  for (var o = 0; o < A.length; o++) {
    for (var p = 0; p < A[0].length; p++) {
      if (A[o][p] == 1) {
        score += Math.pow(2,(A[0].length - 1 - p));
      }
    }
  }

  return score;
}

/**
* @param {number[][]} A
* @return {number}
*/
var matrixScore = function(A) {
  for (var k = 0; k < A.length; k++) {
    if (A[k][0] == 0) {
      flipLine(A, k);
    }
  }

  var onesPerColumn = new Array(A[0].length);

  for (var l = 0; l < A.length; l++) {
    for (var m = 0; m < A[0].length; m++) {
      if (onesPerColumn[m] == null || onesPerColumn[m] == undefined) {
        onesPerColumn[m] = 0;
      }
      if (A[l][m] == 1) {
        onesPerColumn[m]++;
      }
    }
  }

  for (var n = 0; n < onesPerColumn.length; n++) {
    if (onesPerColumn[n] < (A.length / 2)) {
      flipColumn(A, n);
    }
  }

  return binaryScore(A);
};
