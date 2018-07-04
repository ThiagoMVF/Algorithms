// https://www.interviewbit.com/problems/reverse-integer/
// Reverse Integer

/*
  Reverse digits of an integer.

  Example1:

  x = 123,

  return 321
  Example2:

  x = -123,

  return -321

  Return 0 if the result overflows and does not fit in a 32 bit signed integer
*/

//param A : integer
//return an integer
reverse = function(A) {
  var arrayRep = A + '';
  var signal = true;
  if (A < 0) {
    signal = false;
  }

  if (!signal) {
    arrayRep = arrayRep.replace('-','');
  }

  arrayRep = arrayRep.split('');

  var swapNumberPos = function (array, pos1, pos2) {
    var tmp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = tmp;
  };

  for (var i = 0; i < Math.ceil(arrayRep.length / 2); i++) {
    swapNumberPos(arrayRep, i, arrayRep.length - i - 1);
  }

  arrayRep = arrayRep.join('');

  if (!signal) {
    arrayRep = '-' + arrayRep;
  }

  var reverseInt = parseInt(arrayRep);
  if (isNaN(reverseInt) || reverseInt < -2147483648) {
    return 0;
  }
  return reverseInt;
};
