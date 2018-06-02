// https://www.interviewbit.com/problems/maximum-absolute-difference/
// Maximum absolute difference within array

//param A : array of integers
//return an integer
// |A[i] - A[j]| + |i - j|
/*
  Expanding the absolute values to study the function:

  for A[i] - A[j] > 0:
   |A[i] - A[j]| = A[i] - A[j]

  for A[i] - A[j] < 0:
   |A[i] - A[j]| = -A[i] + A[j]

  for i - j > 0:
   |i - j| = i - j

  for i - j < 0:
   |i - j| = -i + j
   
  Combining all possibilities:
  1) A[i] - A[j] + i - j == (A[i] + i) - (A[j] + j)
  2) A[i] - A[j] - i + j == (A[i] - i) - (A[j] - j)
  3) -A[i] + A[j] + i - j == -(A[i] - i) + (A[j] - j)
  4) -A[i] + A[j] - i + j == -(A[i] + i) + (A[j] + j)
*/
var maxArr = function(A){
  if (!A || !A.length) {
    return null;
  }

  var maxValuePlus = A[0] + 1;
  var minValuePlus = A[0] + 1;
  var maxValueMinus = A[0] - 1;
  var minValueMinus = A[0] - 1;

  for (var i = 0; i < A.length; i++) {
    if (A[i] + i + 1 > maxValuePlus) {
      maxValuePlus = A[i] + i + 1;
    }
    if (A[i] + i + 1 < minValuePlus) {
      minValuePlus = A[i] + i + 1;
    }
    if (A[i] - i - 1 > maxValueMinus) {
      maxValueMinus = A[i] - i - 1;
    }
    if (A[i] - i - 1 < minValueMinus) {
      minValueMinus = A[i] - i - 1;
    }
  }

  return Math.max(
    maxValuePlus - minValuePlus,
    maxValueMinus - minValueMinus,
    minValueMinus - maxValueMinus,
    minValuePlus - maxValuePlus
  );
};
