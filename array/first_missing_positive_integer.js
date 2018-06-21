// https://www.interviewbit.com/problems/first-missing-integer/
// First missing positive integer

/*
Given an unsorted integer array, find the first missing positive integer.

Example:

Given [1,2,0] return 3,

[3,4,-1,1] return 2,

[-8, -7, -6] returns 1

Your algorithm should run in O(n) time and use constant space.
*/

//param A : array of integers
//return an integer
var firstMissingPositive = function(A) {
  for (var i = 0; i < A.length; i++) {
    if ((A[i] < 0) || (A[i] > A.length)) {
      A[i] = 0;
    }
  }

  var mark = function(arr, index, currCounter) {
    if (index <= 0 || index > A.length) {
      return;
    }
    if (arr[index - 1] <= 0) {
      arr[index - 1]--;
      return;
    }
    var toMark = arr[index - 1];

    arr[index - 1] = -1;

    mark(arr, toMark, currCounter);
  }

  for (var j = 0; j < A.length; j++) {
    if (A[j] > 0) {
      var tmp = A[j];
      A[j] = 0;
      mark(A, tmp, j);
    }
  }

  for (var k = 0; k < A.length; k++) {
    if (A[k] == 0) {
      return k + 1;
    }
  }

  return A.length + 1;
};
