// https://leetcode.com/contest/weekly-contest-90/problems/buddy-strings/
// Given two strings A and B of lowercase letters, return true if and only
// if we can swap two letters in A so that the result equals B.

/**
* @param {string} A
* @param {string} B
* @return {boolean}
*/
var buddyStrings = function(A, B) {
  if (!A || !A.length || !B || !B.length) {
    return false;
  }
  if (A.length != B.length) {
    return false;
  }

  var extraLetter = {};
  var letters = {};
  var pad = 0;
  var doubledLetter = false;

  var i = 0;

  while (i != A.length) {
    if (!letters[A[i]]) {
      letters[A[i]] = 1;
    }
    else {
      letters[A[i]]++;
      doubledLetter = true;
    }
    if (A[i] != B[i]) {
      pad++;
      if (pad == 1) {
        extraLetter.extra = A[i];
        extraLetter.missing = B[i];
      }
      else if (pad == 2) {
        if ((A[i] != extraLetter.missing) || (B[i] != extraLetter.extra)) {
          return false;
        }
      }
      else {
        return false;
      }
    }
    i++;
  }

  if ((pad == 2) || ((pad == 0) && (doubledLetter))) {
    return true;
  }
  return false;
};