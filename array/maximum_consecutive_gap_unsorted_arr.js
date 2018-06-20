// https://www.interviewbit.com/problems/maximum-consecutive-gap/
// Maximum Consecutive Gap
// Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

//param A : array of integers
//return an integer
var maximumGap = function(A){
  if (!A || !A.length) {
    return null;
  }
  else if (A.length < 2) {
    return 0;
  }
  else if (A.length == 2) {
    return Math.max(A[0] - A[1], A[1] - A[0]);
  }

  var max = -1;
  var min = -1;

  for (var i = 0; i < A.length; i++) {
    if (max == -1) {
      max = A[i];
      min = A[i];
    }
    else {
      max = Math.max(A[i], max);
      min = Math.min(A[i], min);
    }
  }

  var bucketSize = (max - min) / A.length + 1;

  var bucketMins = new Array(A.length);
  var bucketMaxs = new Array(A.length);

  var currBucket = 0;
  for (var j = 0; j < A.length; j++) {
    currBucket = Math.ceil((A[j] - min) / bucketSize);
    if (!bucketMins[currBucket]) {
      bucketMins[currBucket] = A[j];
      bucketMaxs[currBucket] = A[j];
    }
    else {
     bucketMins[currBucket] = Math.min(A[j], bucketMins[currBucket]);
     bucketMaxs[currBucket] = Math.max(A[j], bucketMaxs[currBucket]);
    }
  }

  var maximumDiff = 0;
  var lastBucketUsed = 0;
  for (var k = 1; k < bucketMins.length; k++) {
    while (!bucketMins[k] && k < bucketMins.length) {
      k++;
    }
    if (k < bucketMins.length) {
      maximumDiff = Math.max(maximumDiff, bucketMins[k] - bucketMaxs[lastBucketUsed]);
      lastBucketUsed = k; 
    }
  }

  return maximumDiff;
};
