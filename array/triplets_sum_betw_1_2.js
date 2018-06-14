// https://www.interviewbit.com/problems/triplets-with-sum-between-given-range/
// Triplets with sum between 1 and 2

//param A : array of strings
//return an integer
var solve = function(A){
  if(!A || !A.length || A.length < 3) {
    return 0;
  }
  var numbers = new Array(3);
  var highestNumberPos = 0;
  var lowestNumberPos = 0;
  var currSum = 0;
  for (var j = 0; j < 3; j++) {
    numbers[j] = j;
    currSum += parseFloat(A[j]);
    if (parseFloat(A[numbers[lowestNumberPos]]) > parseFloat(A[numbers[j]])) {
      lowestNumberPos = j;
    }
    if (parseFloat(A[numbers[highestNumberPos]]) < parseFloat(A[numbers[j]])) {
      highestNumberPos = j;
    }
  }

  if ((parseFloat(A[numbers[0]]) + parseFloat(A[numbers[1]]) + parseFloat(A[numbers[2]]) > 1) &&
      (parseFloat(A[numbers[0]]) + parseFloat(A[numbers[1]]) + parseFloat(A[numbers[2]]) < 2)) {

    return 1;
  }

  /*
    We will keep the current sum for the three selected numbers
    (starts as being the beginning of the Array) and compare it to our range.

    If the sum is higher than our range, we exchange our biggest selected number;
    If the sum is lower than our range, we exchange our smallest selected number;
  */
  for (var i = 3; i < A.length; i++) {
    if (currSum >= 2) {
      if (parseFloat(A[i]) < 2 && parseFloat(A[i]) < parseFloat(A[numbers[highestNumberPos]])) {
        currSum = currSum - parseFloat(A[numbers[highestNumberPos]]) + parseFloat(A[i]);
        numbers[highestNumberPos] = i;
      }
    }
    else if (currSum <= 1) {
      if (parseFloat(A[i]) > parseFloat(A[numbers[lowestNumberPos]])) {
        currSum = currSum - parseFloat(A[numbers[lowestNumberPos]]) + parseFloat(A[i]);
        numbers[lowestNumberPos] = i;
      }
    }
    else {
      return 1;
    }

    if ((parseFloat(A[numbers[0]]) > parseFloat(A[numbers[1]])) &&
        (parseFloat(A[numbers[0]]) > parseFloat(A[numbers[2]]))) {
      highestNumberPos = 0;
    }
    else if (parseFloat(A[numbers[1]]) > parseFloat(A[numbers[2]])) {
      highestNumberPos = 1;
    }
    else {
      highestNumberPos = 2;
    }

    if ((parseFloat(A[numbers[0]]) < parseFloat(A[numbers[1]])) &&
        (parseFloat(A[numbers[0]]) < parseFloat(A[numbers[2]]))) {
      lowestNumberPos = 0;
    }
    else if (parseFloat(A[numbers[1]]) < parseFloat(A[numbers[2]])) {
      lowestNumberPos = 1;
    }
    else {
      lowestNumberPos = 2;
    }
  }

  if ((parseFloat(A[numbers[0]]) + parseFloat(A[numbers[1]]) + parseFloat(A[numbers[2]]) > 1) &&
      (parseFloat(A[numbers[0]]) + parseFloat(A[numbers[1]]) + parseFloat(A[numbers[2]]) < 2)) {

    return 1;
  }
  else {
    return 0;
  }
};
