// https://www.interviewbit.com/problems/noble-integer/
// Noble Integer: Integer that says number of greater elements in array

//param A : array of integers
//return an integer
var solve = function(A){
  if (!A || !A.length) {
    return null;
  }

  var sorted = A.sort(function(a, b){return a - b});
  for (var i = 0; i < sorted.length; i++) {
    if ((sorted[i] == sorted.length - i - 1) && (sorted[i] != sorted[i+1])) {
      return 1;
    }
  }
  return -1;
};
