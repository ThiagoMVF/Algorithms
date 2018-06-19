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

  var elementIndices = new Array(A.length);

  for (var i = 0; i < A.length; i++ ) {
    elementIndices[i] = i;
  }

  var changeObjects = function(arr, indices, index1, index2) {
    var tmp = indices[index1];
    indices[index1] = indices[index2];
    indices[index2] = tmp;

    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  var partition = function(arr, indices, start, end) {
    var pivot = arr[end];
    var pivotPosition = start;

    for (var j = pivotPosition; j < end; j++) {
      if (arr[j] <= pivot) {
        changeObjects(arr, indices, j, pivotPosition);
        pivotPosition++;
      }
    }

    changeObjects(arr, indices, pivotPosition, end);

    return pivotPosition;
  }

  var quickSort = function(arr, indices, start, end) {
    if (start >= end) {
      return;
    }

    var pivotIndex = partition(arr, indices, start, end);

    quickSort(arr, indices, start, pivotIndex - 1);
    quickSort(arr, indices, pivotIndex + 1, end);
  }

  quickSort(A, elementIndices, 0, A.length - 1);

  var startDisorder = -1;
  var endDisorder = -1;
  var lastIndex = -1;
  for (var k = 0; k < A.length; k++) {
    if (elementIndices[k] != lastIndex + 1) {
      startDisorder = k;
      break;
    }
    lastIndex = elementIndices[k];
  }
  lastIndex = A.length;
  for (var l = A.length - 1; l > 0; l--) {
    if (elementIndices[l] != lastIndex - 1) {
      endDisorder = l;
      break;
    }
    lastIndex = elementIndices[l];
  }

  if (startDisorder == -1 && endDisorder == -1) {
      return [-1];
  }
  return [startDisorder, endDisorder];
};
