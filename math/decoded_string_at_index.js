// https://leetcode.com/contest/weekly-contest-96/problems/decoded-string-at-index/
// Decoded String at Index

/*
An encoded string S is given.  To find and write the decoded string to a tape, the encoded string is read one character at a time and the following steps are taken:

If the character read is a letter, that letter is written onto the tape.
If the character read is a digit (say d), the entire current tape is repeatedly written d-1 more times in total.
Now for some encoded string S, and an index K, find and return the K-th letter (1 indexed) in the decoded string.

Example 1:

Input: S = "leet2code3", K = 10
Output: "o"
Explanation: 
The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10th letter in the string is "o".
Example 2:

Input: S = "ha22", K = 5
Output: "h"
Explanation: 
The decoded string is "hahahaha".  The 5th letter is "h".
Example 3:

Input: S = "a2345678999999999999999", K = 1
Output: "a"
Explanation: 
The decoded string is "a" repeated 8301530446056247680 times.  The 1st letter is "a".

Note:

2 <= S.length <= 100
S will only contain lowercase letters and digits 2 through 9.
S starts with a letter.
1 <= K <= 10^9
The decoded string is guaranteed to have less than 2^63 letters.
*/

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
  var length = 0;
  var sArr = S.split('');
  var index = 0;
  while (length < K) {
    if (isNaN(sArr[index])) {
      length++;
    }
    else {
      length = length * sArr[index];
    }
    index++;
  }

  var findLetter = function(arr, index, length, K) {
    var diff = length - K;
    if (diff == 0 || K == 0) {
      for (var i = index; i >= 0; i--) {
        if (isNaN(arr[i])) {
          return arr[i];
        }
      }
    }
    else {
      if (isNaN(arr[index])) {
        return findLetter(arr, index - 1, length - 1, K);
      }
      else {
        var newLength = (length / parseInt(arr[index]));
        if (newLength < K) {
          return findLetter(arr, index - 1, newLength, K%newLength);
        }
        else {
          return findLetter(arr, index - 1, newLength, K);
        }
      }
    }
  }
  return findLetter(sArr, index - 1, length, K);
};
