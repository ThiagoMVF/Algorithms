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
  var magicNumbersPerLcm = Math.floor(lcm/A) + Math.floor(lcm/B) - 1; //How many magic numbers are in each LCM block
  var completeLcmsWeNeed = Math.floor(N / magicNumbersPerLcm);
  var multiplesMissing = N % magicNumbersPerLcm;

  var smallest = A > B ? B : A;
  var biggest = A > B ? A : B;
  var currentValue;
  var currentSmallestMult = 0;
  var currentBiggestMult = 0;
  var commonMult = 0;
  while (multiplesMissing > currentSmallestMult + currentBiggestMult - commonMult) {
    if ((currentSmallestMult + 1) * smallest == (currentBiggestMult + 1) * biggest) {
      currentSmallestMult++;
      currentBiggestMult++;
      commonMult++;
    }
    else if ((currentSmallestMult + 1) * smallest < (currentBiggestMult + 1) * biggest) {
      currentSmallestMult++;
    }
    else {
      currentBiggestMult++;
    }
  }
  var valueMissing = currentSmallestMult * smallest > currentBiggestMult * biggest ? currentSmallestMult * smallest : currentBiggestMult * biggest; //As indicated by multiplesMissing

  return ((lcm * completeLcmsWeNeed) + valueMissing) % MODCONST;
};