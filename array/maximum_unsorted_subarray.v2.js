// https://www.interviewbit.com/problems/maximum-unsorted-subarray/
// Maximum unsorted sub-array

//param A : array of integers
//return a array of integers
var subUnsort = function(A) {
  if (!A || !A.length) {
    return null;
  }
  if (A.length == 1) {
    return [-1]
  }

  var firstOutOfOrder = -1;
  var lastOutOfOrder = -1;

  for (var i = 1; i < A.length; i++) {
    if (A[i - 1] > A[i]) {
      firstOutOfOrder = i;
      break;
    }
  }

  for (var j = A.length - 2; j >= 0; j--) {
    if (A[j + 1] < A[j]) {
      lastOutOfOrder = j;
      break;
    }
  }

  if (firstOutOfOrder == -1 && lastOutOfOrder == -1) {
    return [-1];
  }

  var minInRange = 100000000;
  var maxInRange = -1;

  var startRange = Math.min(firstOutOfOrder, lastOutOfOrder);
  var endRange = Math.max(firstOutOfOrder, lastOutOfOrder);

  for (var k = startRange; k <= endRange; k++ ) {
    if (A[k] < minInRange) {
      minInRange = A[k];
    }
    if (A[k] > maxInRange) {
      maxInRange = A[k];
    }
  }

  var startSwap = -1;
  var endSwap = -1;

  var findStartSwap = function() {
    var updatedMax = false;
    for (var l = firstOutOfOrder - 1; l >= 0; l--) {
      if (A[l] > maxInRange) {
        maxInRange = A[l];
        updatedMax = true;
      }
      if (A[l] <= minInRange) {
        startSwap = l + 1;
        break;
      }
      if (l == 0) {
        startSwap = 0;
      }
    }
    if (updatedMax) {
      findEndSwap();
    }
  }

  var findEndSwap = function() {
    var updatedMin = false;
    for (var m = lastOutOfOrder + 1; m < A.length; m++) {
      if (A[m] < minInRange) {
        minInRange = A[m];
        updatedMin = true;
      }
      if (A[m] >= maxInRange) {
        endSwap = m - 1;
        break;
      }
      if (m == A.length - 1) {
        endSwap = A.length - 1;
      }
    }
    if (updatedMin) {
      findStartSwap();
    }
  }

  findStartSwap();
  findEndSwap();

  if (startSwap == -1 && endSwap == -1) {
    return [-1];
  }
  return [startSwap, endSwap];
};
