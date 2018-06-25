// https://www.interviewbit.com/problems/binary-representation/
// Binary representation

//param A : integer
//return a strings
var findDigitsInBinary = function(A){
  if (A < 0) {
    return null;
  }
  else if (A == 0) {
    return 0;
  }

  var maxPow = 0;
  var powerOfTwo = 1;

  while (powerOfTwo <= A) {
    powerOfTwo = powerOfTwo * 2;
    maxPow++;
  }

  if (maxPow != 0) {
    powerOfTwo = powerOfTwo / 2;
  }

  var binaryRepresentation = [];

  while (powerOfTwo != 1) {
    if (A - powerOfTwo >= 0) {
      A -= powerOfTwo;
      binaryRepresentation.push(1);
    }
    else {
      binaryRepresentation.push(0);
    }

    powerOfTwo = powerOfTwo / 2;
  }

  binaryRepresentation.push(A);

  return binaryRepresentation.join('');
};
