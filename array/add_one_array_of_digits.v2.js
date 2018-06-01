// https://www.interviewbit.com/problems/add-one-to-number/
// Add one to number represented by array of digits v2 - in place

//param A : array of integers
//return a array of integers
var plusOne = function(A) {
  if (!A || !A.length) {
      return null;
  }
  var leadingZeroes = 0;
  while (A[leadingZeroes] == 0 && A.length > leadingZeroes) {
      leadingZeroes++;
  }
  if (A.length == leadingZeroes) {
      return [1];
  }
  var returnArr = new Array(A.length - leadingZeroes);
  for (var j = leadingZeroes; j < A.length; j++) {
      returnArr[j - leadingZeroes] = A[j];
  }
  
  var carry = 1;
  var nextCarry = 0;
  var currVal = 0;
  for (i = returnArr.length - 1; i >= 0; i--) {
      nextCarry = (returnArr[i] + carry >= 10) ? 1 : 0;
      currVal = (returnArr[i] + carry >= 10) ? returnArr[i] + carry - 10 : returnArr[i] + carry;
      returnArr[i] = currVal;
      carry = nextCarry;
  }
  if (carry) {
      returnArr.unshift(1);
  }
  return returnArr;
};
