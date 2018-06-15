// https://www.interviewbit.com/problems/largest-number/
// Largest number formed by concatenation

//param A : array of integers
//return a strings
var largestNumber = function(A){
  if (!A || !A.length) {
    return null;
  }

  var isStringResultGreaterThan = function(integer1, integer2) {
    var arr1 = integer1 + '' + integer2;
    var arr2 = integer2 + '' + integer1;

    return arr1 > arr2;
  }

  var changePosition = function(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  var partition = function (array, begin, end) {
    var pivotIndex = 0;
    var pivot = array[end];
    changePosition(array, end, begin);

    for (var i = begin + 1; i <= end; i++ ) {
      if (isStringResultGreaterThan(array[i], pivot)) {
        if (i > begin + pivotIndex + 1) {
          changePosition(array, begin + pivotIndex, begin + pivotIndex + 1);
        }
        changePosition(array, i, begin + pivotIndex);
        pivotIndex++;
      }
    }
    
    return (begin + pivotIndex);
  }
  
  var quickSortCharacters = function (array, begin, end) {
    if (begin >= end) {
      return;
    }
    var pivotIndex = partition(array, begin, end);
    
    quickSortCharacters(array, begin, pivotIndex - 1);
    quickSortCharacters(array, pivotIndex + 1, end);
  }
  
  quickSortCharacters(A, 0, A.length - 1);
  if (A[0] == 0) {
    return '0';
  }
  return A.join('');
};
