// https://www.interviewbit.com/problems/wave-array/
// Wave of integers
// Given an array of integers, sort the array into a wave like array and return it, 
// In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....

//param A : array of integers
//return a array of integers
var wave = function(A){
  if (!A || !A.length) { 
    return null;
  }

  var changeElements = function(arr, index1, index2) {
    var tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  var partition = function(arr, start, end) {
    var pivot = arr[end];
    var pivotPos = start - 1;

    for (var i = start; i < end; i++) {
      if (arr[i] < pivot) {
        pivotPos++;
        changeElements(arr, i, pivotPos);
      }
    }

    pivotPos++;

    changeElements(arr, end, pivotPos);

    return pivotPos;
  }

  var quickSort = function(arr, start, end) {
    if (start >= end) {
      return;
    }
    var pivotPos = partition(arr, start, end);

    quickSort(arr, start, pivotPos - 1);
    quickSort(arr, pivotPos + 1, end);
  }

  quickSort(A, 0, A.length - 1);

  for (var j = 0; j < A.length - 1; j = j + 2) {
    changeElements(A, j, j + 1);
  }

  return A;
};
