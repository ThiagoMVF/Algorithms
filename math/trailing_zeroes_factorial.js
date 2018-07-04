// https://www.interviewbit.com/problems/trailing-zeros-in-factorial/
// Trailing Zeros in Factorial

/*
  Given an integer n, return the number of trailing zeroes in n!.

  Note: Your solution should be in logarithmic time complexity.

  Example :

  n = 5
  n! = 120 
  Number of trailing zeros = 1
  So, return 1
*/

//param A : integer
//return an integer
trailingZeroes = function(A){
  var count = 0;

  for (var i = 5; A / i >= 1; i *= 5) {
    count += Math.floor(A / i);
  }

  return count;
};
