// https://www.interviewbit.com/problems/min-steps-in-infinite-grid/
// Minimum steps in an infinite grid to get to described points

//param A : array of integers describing the X coordinates of each point you have to get to
//param B : array of integers describing the Y coordinates of each point you have to get to
//return an integer
var coverPoints = function(A, B){
  if (!A || !B) {
    return null;
  }
  if (A.length <= 1) {
      return 0;
  }
  if (A.length != B.length) {
      return null;
  }

  var steps = 0;
  var currentX = A[0];
  var currentY = B[0];
  var distX = 0;
  var distY = 0;
  for (var i = 1; i < A.length; i++) {
      distX = currentX - A[i];
      distY = currentY - B[i];
      if (distX < 0) {
          distX = (-1)*distX;
      }
      if (distY < 0) {
          distY = (-1)*distY;
      }
      steps += (distX > distY) ? distX : distY;
      currentX = A[i];
      currentY = B[i];
  }
  return steps;
};
