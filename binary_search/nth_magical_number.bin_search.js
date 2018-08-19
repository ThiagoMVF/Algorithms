// https://leetcode.com/contest/weekly-contest-95/problems/nth-magical-number/
// Nth Magical Number

/*
A positive integer is magical if it is divisible by either A or B.

Return the N-th magical number.  Since the answer may be very large, return it modulo 10^9 + 7.

Example 1:

Input: N = 1, A = 2, B = 3
Output: 2
Example 2:

Input: N = 4, A = 2, B = 3
Output: 6
Example 3:

Input: N = 5, A = 2, B = 4
Output: 10
Example 4:

Input: N = 3, A = 6, B = 4
Output: 8

Note:

1 <= N <= 10^9
2 <= A <= 40000
2 <= B <= 40000
*/


var gcd = function(A,B) {
  return B == 0 ? A : gcd(B, A % B);
}

/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var nthMagicalNumber = function(N, A, B) {
  var MODCONST = 1000000007;
  var lcm = A * B / gcd(A,B); //Least common multiple
  var bigger = A > B ? A : B;
  var smaller = A > B ? B : A;

  var upperBoundary = N * smaller;
  var lowerBoundary = 2;

  var binarySearch = function(N, A, B, lcm, lowerBoundary, upperBoundary) {
    if (lowerBoundary == upperBoundary) {
      return lowerBoundary % MODCONST;
    }
    var currentTry = Math.floor(lowerBoundary + ((upperBoundary - lowerBoundary) / 2));

    var currentN = Math.floor((currentTry/A)) + Math.floor((currentTry/B)) - Math.floor((currentTry/lcm));
    return currentN < N ? binarySearch(N, A, B, lcm, currentTry + 1, upperBoundary) : binarySearch(N, A, B, lcm, lowerBoundary, currentTry);
  }

  return binarySearch(N, A, B, lcm, lowerBoundary, upperBoundary);
};