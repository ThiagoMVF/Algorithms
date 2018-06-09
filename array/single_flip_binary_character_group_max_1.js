// https://www.interviewbit.com/problems/flip/
// Single flip binary characters to maximize "1"s

//param A : string
//return a array of integers
// "1111001"
// "010"
// "1101010001"
var flip = function(A){
  if (!A || !A.length) {
      return null;
  }
  var longestStreakStartPos = -1;
  var biggestStreakMagnitude = 0;
  var longestStreakLength = 0;
  // var currentPosition = 0;
  var currentStreakMagnitude = 0;
  var currentStreakLength = 0;
  var longestIsCurrent = false;

  for(var currentPosition = 0; currentPosition < A.length; currentPosition++) {
    if (A[currentPosition] == '0') {
      currentStreakMagnitude++;
    }
    else {
      currentStreakMagnitude--;
    }

    if (currentStreakMagnitude < 0) {
      currentStreakMagnitude = 0;
      currentStreakLength = 0;
      longestIsCurrent = false;
    }
    else {
      currentStreakLength++;
    }

    if (currentStreakMagnitude > biggestStreakMagnitude) {
      biggestStreakMagnitude = currentStreakMagnitude;
      longestStreakLength = currentStreakLength;
      if (!longestIsCurrent) {
        longestIsCurrent = true;
        longestStreakStartPos = currentPosition - currentStreakLength + 1;
      }
    }
  }

  if (longestStreakStartPos >= 0) {
    return [longestStreakStartPos + 1, longestStreakStartPos + longestStreakLength];
  }
  else {
    return [];
  }
};
