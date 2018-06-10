// https://www.interviewbit.com/problems/max-non-negative-subarray/
// Max non-negative sub-array

/*
    A : [1, 2, 5, -7, 2, 3, 5]
    The two sub-arrays are [1, 2, 5] [2, 3, 5].
    The answer is [2, 3, 5] as its sum is larger than [1, 2, 5]
*/
//param A : array of integers
//return a array of integers
var maxset = function(A) {
  if (!A || !A.length) {
    return null;
  }
  var maxSeqValue = 0;
  var maxSeqSize = 0;
  var maxSeqStart = -1;
  var currSeqValue = 0;
  var currSeqSize = 0;
  var isCurrentMax = false;
  
  for (var i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
      currSeqValue += A[i];
      currSeqSize++;
    }
    else {
      currSeqValue = 0;
      currSeqSize = 0;
      isCurrentMax = false;
    }
    
    if ((currSeqValue > maxSeqValue) ||
      (currSeqValue == maxSeqValue && currSeqSize > maxSeqSize)) {
      maxSeqValue = currSeqValue;
      if (!isCurrentMax) {
        isCurrentMax = true;
        maxSeqStart = i + 1 - currSeqSize;
      }
      maxSeqSize = currSeqSize;
    }
  }
  return A.slice(maxSeqStart, maxSeqStart + maxSeqSize);
};
