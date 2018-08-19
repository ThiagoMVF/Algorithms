// https://leetcode.com/contest/weekly-contest-93/problems/reordered-power-of-2/
// Reorder Power of 2

/*
Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

Example 1:

Input: 1
Output: true
Example 2:

Input: 10
Output: false
Example 3:

Input: 16
Output: true
Example 4:

Input: 24
Output: false
Example 5:

Input: 46
Output: true
 
Note:

1 <= N <= 10^9
*/

/**
 * @param {number} N
 * @return {boolean}
 */
 var reorderedPowerOf2 = function(N) {
  if (N < 10) {
    if (N == 1 || N == 2 || N == 4 || N == 8) {
      return true;
    }
  }

  if (N < 16) {
    return false;
  }
  else if (N == 16) {
    return true;
  }

  var stringRep = N + '';
  var arrayRep = stringRep.split('');
  var getInitialPowerOfTwoForSize = function(currNumber, length) {
    if ((currNumber + '').length == length) {
      return currNumber;
    }
    return getInitialPowerOfTwoForSize(currNumber*2, length);
  }

  var hasSameDigits = function(number, array) {
    var arrayNumberRep = (number + '').split('');
    if (arrayNumberRep.length != array.length) {
      return false;
    }
    var index = 0;
    for (var i = 0; i < array.length; i++) {
      index = arrayNumberRep.indexOf(array[i]);
      if (index == -1) {
        return false;
      }
      arrayNumberRep.splice(index, 1);
    }
    return true;
  }

  var powerWithLength = getInitialPowerOfTwoForSize(16, arrayRep.length);
  while ((powerWithLength + '').length == arrayRep.length) {
    if(hasSameDigits(powerWithLength, arrayRep)){
      return true;
    }
    powerWithLength *= 2;
  }
  return false;
};