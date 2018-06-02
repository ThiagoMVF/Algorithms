// https://www.interviewbit.com/problems/maximum-absolute-difference/
// Maximum absolute difference within array

//param A : array of integers
//return an integer
var maxArr = function(A){
  if (!A || !A.length) {
      return null;
  }

  var maxFound = 0;
  var curr;
  for (var i = 0; i < A.length; i++) {
    for (var j = i; j < A.length; j++) {
      curr = Math.abs(A[i] - A[j]) + Math.abs(i - j);
      if (curr > maxFound) {
        maxFound = curr;
      }
    }
  }
  return maxFound;
};
