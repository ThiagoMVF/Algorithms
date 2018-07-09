// https://leetcode.com/contest/weekly-contest-92/problems/prime-palindrome/
// Prime Palindrome

/*
  Find the smallest prime palindrome greater than or equal to N.

  Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1. 

  For example, 2,3,5,7,11 and 13 are primes.

  Recall that a number is a palindrome if it reads the same from left to right as it does from right to left. 

  For example, 12321 is a palindrome.

  Example 1:

  Input: 6
  Output: 7
  Example 2:

  Input: 8
  Output: 11
  Example 3:

  Input: 13
  Output: 101

  Note:

  1 <= N <= 10^8
  The answer is guaranteed to exist and be less than 2 * 10^8.
*/

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
  var smallerThanTenHashMap = {
    1: 2,
    2: 2,
    3: 3,
    4: 5,
    5: 5,
    6: 7,
    7: 7,
    8: 11,
    9: 11,
    10: 11
  };

  if (smallerThanTenHashMap[N]) {
    return smallerThanTenHashMap[N];
  }

  var isPalindrome = function(test) {
    for (var o = 0; o < Math.floor(test.length / 2); o++) {
      if (test[o] != test[test.length - o - 1]) {
        return false;
      }
    }
    return true;
  }

  var nextPalindrome = function(number) {
    var stringRep = number + '';
    var len = stringRep.length;
    var beginNumber = stringRep.substring(0, len / 2);
    var midNumber = stringRep.substring(Math.floor(len / 2), Math.ceil(len - (len / 2)));
    var endNumber = stringRep.substring(Math.ceil(len - (len / 2)));
    if (endNumber < beginNumber.split('').reverse().join('')) {
      return parseInt(beginNumber +
        midNumber +
        beginNumber.split('').reverse().join(''));
    }
    var nextPalindromeStart = (parseInt(beginNumber + midNumber) + 1 ) + '';
    if (nextPalindromeStart.length > endNumber.length + midNumber.length) {
      return parseInt(
        nextPalindromeStart +
        nextPalindromeStart.split('').reverse().join('').substring(midNumber.length + 1)
      );
    }
    return parseInt(
      nextPalindromeStart +
      nextPalindromeStart.split('').reverse().join('').substring(midNumber.length)
    );
  }

  var isPrime = function(num) {
    for (var i = 2; i < Math.ceil(Math.sqrt(num)) + 1; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  var currTry = N;
  var palindromeTest = '';
  while(1) {
    if (currTry % 2 == 0 ||
         currTry % 3 == 0 ||
         currTry % 5 == 0 ||
         currTry % 7 == 0) {
      currTry = nextPalindrome(currTry);
      continue;
    }
    palindromeTest = currTry + '';
    if (isPalindrome(palindromeTest)) {
      if (isPrime(currTry)) {
        return currTry;
      }
    }
    currTry = nextPalindrome(currTry);
  }
};
