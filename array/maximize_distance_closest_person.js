// https://leetcode.com/contest/weekly-contest-88/problems/maximize-distance-to-closest-person/
// Maximize distance to closest person

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  if (!seats || !seats.length) {
    return null;
  }
  var isSequenceSide = false;
  var lengthStartingSequence = 0;
  var startBiggestSequence = -1;
  var lengthBiggestSequence = 0;
  var lengthCurrentSequence = 0;
  var isCurrentSequenceBiggest = false;

  for (var i = 0; i < seats.length; i++) {
    if (seats[i] == 0) {
      lengthCurrentSequence++;
    }
    else {
      isCurrentSequenceBiggest = false;
      lengthCurrentSequence = 0;
    }

    if (lengthCurrentSequence > lengthBiggestSequence) {
      lengthBiggestSequence = lengthCurrentSequence;
      if (!isCurrentSequenceBiggest) {
        isCurrentSequenceBiggest = true;
        startBiggestSequence = i + 1 - lengthCurrentSequence;
      }
      if (startBiggestSequence == 0) {
        lengthStartingSequence++;
      }
      if (i == seats.length - 1) {
        isSequenceSide = true;
      }
    }
  }

  if (!isSequenceSide && (startBiggestSequence == 0) || (lengthBiggestSequence == lengthCurrentSequence)) {
    isSequenceSide = true;
  }

  if ((!isSequenceSide) && (lengthCurrentSequence > Math.ceil(lengthBiggestSequence/2))) {
    lengthBiggestSequence = lengthCurrentSequence;
    isSequenceSide = true;
  }
  else if ((!isSequenceSide) && (lengthStartingSequence > Math.ceil(lengthBiggestSequence/2))) {
    lengthBiggestSequence = lengthStartingSequence;
    isSequenceSide = true;
  }

  if (isSequenceSide) {
    return lengthBiggestSequence;
  }
  else {
    return Math.ceil(lengthBiggestSequence/2);
  }
};
