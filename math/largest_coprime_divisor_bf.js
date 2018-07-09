// https://www.interviewbit.com/problems/largest-coprime-divisor/
// Largest Coprime Divisor - factorization brute force

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
  var largestCoPrimeDivisor = 1;
  var testCeiling = A > 2 ?
    A / 2 > Math.sqrt(A) ? A / 2 : Math.sqrt(A)
    : 2;
  for (var i = 2; i <= testCeiling; i++) {
    if (i > A) {
      break;
    }
    while (A % i == 0) {
      A = A / i;
      if (B % i != 0) {
        largestCoPrimeDivisor = largestCoPrimeDivisor * i;
      }
    }
  }

  if (largestCoPrimeDivisor == 1) {
    return A;
  }

  return largestCoPrimeDivisor;
};
