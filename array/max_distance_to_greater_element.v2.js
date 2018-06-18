// https://www.interviewbit.com/problems/max-distance/
// Maximum of j - i subjected to the constraint of A[i] <= A[j]

//param A : array of integers
//return an integer
var maximumGap = function(A){
  if (!A || !A.length) {
    return null;
  }
  var globalMaximum = 0;
  var indices = new Array(A.length);
  for (var k = 0; k < indices.length; k++) {
    indices[k] = k;
  }

  var changeElements = function (arr, indices, index1, index2) {
    var tmp = indices[index1];
    indices[index1] = indices[index2];
    indices[index2] = tmp;
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  var partition = function (arr, indices, start, end) {
    var pivot = arr[end];
    var pivotPos = start;
    changeElements(arr, indices, pivotPos, end);

    for (var l = start; l <= end; l++ ) {
      if (arr[l] < pivot) {
        changeElements(arr, indices, l, pivotPos + 1);
        changeElements(arr, indices, pivotPos, pivotPos + 1);
        pivotPos++;
      }
    }

    if (pivotPos == start && pivot == arr[pivotPos + 1]) {
      changeElements(arr, indices, pivotPos, end);
      pivotPos = end;
    }

    return pivotPos;
  }

  var quickSort = function (arr, indices, start, end) {
    if (start >= end) {
        return;
    }

    var pivotPos = partition(arr, indices, start, end);

    quickSort(arr, indices, start, pivotPos - 1);
    quickSort(arr, indices, pivotPos + 1, end);
  }

  quickSort(A, indices, 0, A.length - 1);

  var localMaximum = 0;
  for (var m = indices.length - 1; m >= 0; m--) {
    localMaximum = Math.max(localMaximum, indices[m]);
    if (localMaximum - indices[m] > globalMaximum) {
      globalMaximum = localMaximum - indices[m];
    }
  }

  return globalMaximum;
};
