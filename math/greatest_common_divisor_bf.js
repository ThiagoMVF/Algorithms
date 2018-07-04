// https://www.interviewbit.com/problems/greatest-common-divisor/
// Greatest Common Divisor

/*
  Given 2 non negative integers m and n, find gcd(m, n)

  GCD of 2 integers m and n is defined as the greatest integer g such that g is a divisor of both m and n.
  Both m and n fit in a 32 bit signed integer.

  Example

  m : 6
  n : 9

  GCD(m, n) : 3 
   NOTE : DO NOT USE LIBRARY FUNCTIONS 
*/

//param A : integer
//param B : integer
//return an integer
gcd = function(A, B) {
  var gcd = 1;
  var max = A > B ? A : B;

  for (var i = 1; i <= max; i++) {
    if ((A % i == 0) && (B % i == 0)) {
      gcd = i;
    }
  }

  return gcd;
};
