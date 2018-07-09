// https://www.interviewbit.com/problems/largest-coprime-divisor/
// Largest Coprime Divisor - with gcd

/*
  You are given two positive numbers A and B. You need to find the maximum valued integer X such that:

  X divides A i.e. A % X = 0
  X and B are co-prime i.e. gcd(X, B) = 1
  For example,

  A = 30
  B = 12
  We return
  X = 5
*/

//param A : integer
//param B : integer
//return an integer
var cpFact = function(A, B){
  var findGCD = function(A, B) {
    if(A == 0) {
      return B;
    }
    if(B == 0) {
      return A;
    }
    var bigger = A > B ? A : B;
    var smaller = A > B ? B : A;
    return findGCD(smaller, bigger % smaller);
  };

  var gcd = findGCD(A,B);
  while(gcd != 1) {
    A = A / gcd;
    gcd = findGCD(A,B);
  }
  return A;
};
