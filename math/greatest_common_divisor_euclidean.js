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
gcd = function(A, B){

  // Euclidean algorithm:
  // Write A in quotient remainder form (A = B⋅Q + R)
  // Find GCD(B,R) using the Euclidean Algorithm since GCD(A,B) = GCD(B,R)

  var GCD = function(A, B) {
    if (A == 0) {
      return B;
    }
    else if (B == 0) {
      return A;
    }
    var bigger = A > B ? A : B;
    var smaller = A > B ? B : A;

    return GCD(smaller, bigger % smaller);
  }
  return GCD(A,B);
}
