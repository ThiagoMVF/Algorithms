// https://www.interviewbit.com/problems/sorted-permutation-rank/
// Sorted Permutation Rank

/*
  Given a string, find the rank of the string amongst its permutations sorted lexicographically. 
  Assume that no characters are repeated.

  Example :

  Input : 'acb'
  Output : 2

  The order permutations with letters 'a', 'c', and 'b' : 
  abc
  acb
  bac
  bca
  cab
  cba
  The answer might not fit in an integer, so return your answer % 1000003
*/

//param A : string
//return an integer
var findRank = function(A){
  var arrayOrder = A.split('');

  var swap = function(arr, pos1, pos2) {
    var tmp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = tmp;
  }

  var partition = function(arr, start, end) {
    var pivotPosition = start;
    var pivot = arr[end];

    for (var k = start; k < end; k++) {
      if (arr[k] < pivot) {
        swap(arr, k, pivotPosition);
        pivotPosition++;
      }
    }
    swap(arr, end, pivotPosition);

    return pivotPosition;
  }

  var quickSort = function(arr, start, end) {
    if (start >= end) {
      return;
    }

    var pivotPosition = partition(arr, start, end);

    quickSort(arr, start, pivotPosition - 1);
    quickSort(arr, pivotPosition + 1, end);
  }

  quickSort(arrayOrder, 0, arrayOrder.length - 1);

  var rank = 1;
  var currentSpotRank = 1;
  var pos = 0;

  var factorialize = function(number) {
    if (number <= 1) {
      return 1;
    }
    return (number * factorialize(number - 1)) % 1000003;
  }

  var used = [];

  for (var j = 0; j < A.length; j++) {
    used[j] = false;
  }

  var notUsedBeforePos = function(usedElements, position) {
    var count = 0;
    for (var l = position - 1; l >= 0; l--) {
      if (!usedElements[l]) {
        count++;
      }
    }
    return count;
  }

  for (var i = 0; i < A.length - 1; i++) {
    currentSpotRank = 1;
    pos = arrayOrder.indexOf(A[i]);
    used[pos] = true;
    currentSpotRank = currentSpotRank * notUsedBeforePos(used, pos);
    currentSpotRank = (currentSpotRank * (factorialize(A.length - i - 1))) % 1000003;

    rank += currentSpotRank;
    rank = rank % 1000003;
  }

  return rank;
};
