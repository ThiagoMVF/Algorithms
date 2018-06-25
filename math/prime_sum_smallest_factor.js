// https://www.interviewbit.com/problems/prime-sum/
// Prime sum with smallest factor

//param A : integer
//return a array of integers
primesum : function(A){
  if (A < 0) {
    return [];
  }

  var primes = new Array(A - 2);
  var ceiling = Math.sqrt(A);

  for (var i = 0; i < A - 2; i ++) {
    primes[i] = i + 1;
  }

  for (var j = 1; j < ceiling; j++) {
    if (primes[j] < 0) {
      continue;
    }
    var currDivisor = primes[j];
    for (var k = j + 1; k < A - 2; k++) {
      if (primes[k] % currDivisor == 0) {
        primes[k] = -1;
      }
    }
  }

  for (var l = A - 2; l > 0; l--) {
    if ((primes[l] > 0) &&
      (primes[((A - 2) - l)] > 0)) {
      return [primes[((A - 2) - l)], primes[l]];
    }
  }
  return [];
};
