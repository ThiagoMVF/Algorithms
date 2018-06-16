// https://leetcode.com/contest/weekly-contest-88/problems/shifting-letters/
// Shift letters positioned before instruction

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  // String.fromCharCode(abc.charCodeAt(0) + 2);
  if (!S || !S.length || !shifts || !shifts.length) {
    return null;
  }

  var sArray = S.split('');
  var az = 'az';
  var maxValue = az.charCodeAt(1);
  var minValue = az.charCodeAt(0);
  var toShift = 0;

  for (var i = 0; i < sArray.length; i++) {
    toShift = 0;
    for (var j = i; j < shifts.length; j++) {
      toShift += shifts[j];
    }

    sArray[i] =  String.fromCharCode(((sArray[i].charCodeAt(0) + toShift - minValue) % (maxValue - minValue + 1)) + minValue);
  }
  return sArray.join('');
};
