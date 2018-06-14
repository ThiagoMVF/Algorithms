// https://www.interviewbit.com/problems/noble-integer/
// Noble Integer: Integer that says number of greater elements in array

//param A : array of integers
//return an integer
var solve = function(A){
  if (!A || !A.length) {
    return null;
  }
  var findPos = function(arr, item) {
    for(var j = 0; j < arr.length; j++) {
      if (item < arr[j]) {
        return j;
      }
    }
    return arr.length;
  }

  var sort = function(arr) {
    var subProblem = [];
    if(arr.length != 1) {
      subProblem = sort(arr.slice(1));
      var pos = findPos(subProblem, arr[0]);
      subProblem.splice(pos, 0, arr[0])
      return subProblem;
    }
    else {
      return arr;
    }
  }

  var sorted = sort(A);
  for (var i = 0; i < sorted.length; i++) {
    if ((sorted[i] == sorted.length - i - 1) && (sorted[i] != sorted[i+1])) {
      return 1;
    }
  }
  return -1;
};
