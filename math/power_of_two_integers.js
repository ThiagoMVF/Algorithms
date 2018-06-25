// https://www.interviewbit.com/problems/power-of-two-integers/
// Power of two integers

/*
  Given a positive integer which fits in a 32 bit signed integer,
  find if it can be expressed as A^P where P > 1 and A > 0.
  A and P both should be integers.
*/

//param A : integer
//return an integer
var isPower = function(A){
  if (A < 1) {
    return 0;
  }
  else if (A == 1) {
    return 1;
  }

  var isSingleDivisor = function(integer, divisor) {
    var newRest = integer % divisor;
    var newInteger = integer / divisor;

    if (newRest != 0) {
      return 0;
    }
    else if (newInteger == 1) {
      return 1;
    }

    return isSingleDivisor(newInteger, divisor);
  }

  for (var i = 2; i <= Math.sqrt(A); i++) {
    if (A % i == 0) {
      var isSingle = isSingleDivisor(A, i);
      if (isSingle) {
        return 1;
      }
    }
  }
  return 0;
};
