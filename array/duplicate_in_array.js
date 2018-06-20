// https://www.interviewbit.com/problems/find-duplicate-in-array/
// Find duplicate in array

//param A : array of integers
//return an integer
var repeatedNumber = function(A){
  var hashMap = {};
  for (var i = 0; i < A.length; i++) {
    if (!hashMap[A[i]]) {
      hashMap[A[i]] = true;
    }
    else {
      return A[i];
    }
  }
  return -1;
};
