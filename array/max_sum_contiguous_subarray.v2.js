// https://www.interviewbit.com/problems/max-sum-contiguous-subarray/
// Max sum contiguous sub-array v2

//param A : array of integers
//return an integer
var maxSubArray = function(A){
  if (!A || !A.length) {
    return null;
  }
  var localMax = maxFound = A[0];
  for (var i = 1; i < A.length; i++) {
    localMax = Math.max(A[i], localMax + A[i]);
    if (localMax > maxFound) {
      maxFound = localMax;
    }
  }
  return maxFound;
};
