// https://www.interviewbit.com/problems/add-one-to-number/
// Add one to number represented by array of digits v1 - unshifting arrays

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
  var returnArr = [];
  var carry = 1;
  var nextCarry = 0;
  var currVal = 0;
  for (i = A.length - 1; i >= 0; i--) {
      if (i < leadingZeroes) {
          break;
      }
      nextCarry = (A[i] + carry >= 10) ? 1 : 0;
      currVal = (A[i] + carry >= 10) ? A[i] + carry - 10 : A[i] + carry;
      returnArr.unshift(currVal);
      carry = nextCarry;
  }
  if (carry) {
      returnArr.unshift(1);
  }
  return returnArr;
};