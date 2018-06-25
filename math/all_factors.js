// https://www.interviewbit.com/problems/all-factors/
// Find all factors of a number

//param A : integer
//return a array of integers
var allFactors = function(A){
  if (A <= 0) {
    return [];
  }

  var allFactors = [];

  var upperLimit = Math.sqrt(A);

  for (var i = 1; i <= upperLimit; i++) {
    if (A % i == 0) {
      allFactors.push(i);
    }
  }

  var size = allFactors.length;

  for (var j = size - 1; j >= 0; j--) {
    var value = A/allFactors[j];
    if (allFactors.indexOf(value) == -1) {
      allFactors.push(A/allFactors[j]);
    }
  }

  return allFactors;
};
