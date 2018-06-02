// https://www.interviewbit.com/problems/max-sum-contiguous-subarray/
// Max sum contiguous sub-array v1

//param A : array of integers
//return an integer
var maxSubArray = function(A){
  if (!A || !A.length) {
    return null;
  }
  var maxMatrix = new Array(A.length);
  for (var k = 0; k < maxMatrix.length; k++) {
    maxMatrix[k] = new Array(A.length);
  }
  
  var maxFound = A[0];
  for (var i = 0; i < A.length; i++) {
    maxMatrix[i][i] = A[i];
    if (A[i] > maxFound) {
      maxFound = A[i];
    }
    for (var j = i - 1; j >= 0; j--) {
      maxMatrix[j][i] = maxMatrix[j][i-1] + A[i];
      if (maxMatrix[j][i] > maxFound) {
        maxFound = maxMatrix[j][i];
      }
    }
  }
  return maxFound;
};