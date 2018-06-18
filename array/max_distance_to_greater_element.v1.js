// https://www.interviewbit.com/problems/max-distance/
// Maximum of j - i subjected to the constraint of A[i] <= A[j]

//param A : array of integers
//return an integer
var maximumGap = function(A){
  if (!A || !A.length) {
    return null;
  }
  var globalMaximum = 0;

  for (var i = 0; i < A.length; i++) {
    if (A.length - i <= globalMaximum) {
      break;
    }
    for (var j = A.length - 1; j > i; j--) {
      if (j - i <= globalMaximum) {
        break;
      }
      if (A[i] <= A[j]) {
        if (j - i > globalMaximum) {
          globalMaximum = j - i;
          break;
        }
      }
    }
  }

  return globalMaximum;
};
