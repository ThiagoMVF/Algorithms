// https://leetcode.com/contest/weekly-contest-93/problems/binary-gap/
// Binary Gap

/*
Given a positive integer N, find and return the longest distance between two consecutive 1's in the binary representation of N.

If there aren't two consecutive 1's, return 0.

Example 1:

Input: 22
Output: 2
Explanation: 
22 in binary is 0b10110.
In the binary representation of 22, there are three ones, and two consecutive pairs of 1's.
The first consecutive pair of 1's have distance 2.
The second consecutive pair of 1's have distance 1.
The answer is the largest of these two distances, which is 2.
Example 2:

Input: 5
Output: 2
Explanation: 
5 in binary is 0b101.
Example 3:

Input: 6
Output: 1
Explanation: 
6 in binary is 0b110.
Example 4:

Input: 8
Output: 0
Explanation: 
8 in binary is 0b1000.
There aren't any consecutive pairs of 1's in the binary representation of 8, so we return 0.
 

Note:

1 <= N <= 10^9
*/

/**
* @param {number} N
* @return {number}
*/
var binaryGap = function(N) {
  if (N <= 1) {
    return 0;
  }

  var toBinary = function (number, arrayRep) {
    if (number == 0) {
      return arrayRep.join('');
    }
    arrayRep.unshift(number % 2);
    return toBinary (Math.floor(number/2), arrayRep);
  }

  var lessThanOneOrOneOne = function(numberRep) {
    if (numberRep.indexOf('1') == numberRep.lastIndexOf('1')) {
      return true;
    }
    return false;
  }

  var biggestGap = function(numberRep) {
    var maxDist = 0;
    var currPos = 0;
    while (numberRep.indexOf('1') != -1) {
      currPos = numberRep.indexOf('1');
      if (currPos + 1 > maxDist) {
        maxDist = currPos + 1;
      }
      numberRep = numberRep.slice(currPos + 1);
    }
    return maxDist;
  }

  var binaryRep = toBinary(N, []);
  if (lessThanOneOrOneOne(binaryRep)) {
    return 0;
  }
  return biggestGap(binaryRep);
};