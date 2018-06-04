// https://www.interviewbit.com/problems/repeat-and-missing-number-array/
// Repeating and missing number in progression to n

// param A : array of integers
// return a array of integers with the integer that is doubled in the array and the number that is missing

// Sum should be (1 + n)*n / 2
// 1 + 2 + 3 + 4 + 5 = 15
// (1 + 5) * 5 / 2 = 6 * 2.5 = 15

// Product should be n! =>
// product will be n! * A / B
// productDiff = A / B

// Sum of squares diff = A^2 - B^2
var repeatedNumber = function(A){
  var foundSumDiff = 0;
  var foundSumSquareDiff = 0;
  // var foundProductDiff = 1;

  for (var i = 0; i < A.length; i++) {
    foundSumSquareDiff = foundSumSquareDiff - ((i + 1) * (i + 1)) + (A[i] * A[i]);
    // foundProductDiff = (foundProductDiff / (i + 1)) * A[i];
    foundSumDiff = foundSumDiff + (i + 1) - A[i];
  }

  var returnA = foundSumDiff + (foundSumSquareDiff - (foundSumDiff*foundSumDiff)) / (2 * foundSumDiff);
  var returnB = (foundSumSquareDiff - (foundSumDiff * foundSumDiff)) / (2 * foundSumDiff)
  // return [ Math.round(Math.abs((foundSumDiff + (foundSumDiff / (foundProductDiff - 1))))), Math.round(Math.abs((foundSumDiff / (foundProductDiff - 1))))];
  return [Math.abs(returnA), Math.abs(returnB)];

  // X0 - X1 = X0 - (X0 + A - B) = foundSumDiff => foundSumDiff = A - B
  // A / B = foundProductDiff
  // A = foundProductDiff * B
  // foundSumDiff = foundProductDiff * B - B = (foundProductDiff - 1) * B
  // foundSumDiff / (foundProductDiff - 1) = B
  // A = foundSumDiff + B
  
  // X1 - X0 = (X0 + A^2 - B^2) - X0 = foundSumSquareDiff = A^2 - B^2
  // A = foundSumDiff + B
  // foundSumSquareDiff = (foundSumDiff + B) * (foundSumDiff + B) - B^2
  // foundSumSquareDiff = foundSumDiff^2 + 2*foundSumDiff*B
  // foundSumSquareDiff - foundSumDiff^2 = 2*foundSumDiff*B
  // B = (foundSumSquareDiff - foundSumDiff^2)/2*foundSumDiff
  // A = foundSumDiff + (foundSumSquareDiff - foundSumDiff^2)/2*foundSumDiff
};
