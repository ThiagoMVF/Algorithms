// https://www.interviewbit.com/problems/fizzbuzz/
// Fizz Buzz

//param A : integer
//return a array of strings
var fizzBuzz = function(A){
  var fzbz = new Array(A - 1);
  for (var i = 1; i <= A; i++) {
    fzbz[i - 1] = "";
    if (i % 3 == 0) {
      fzbz[i - 1] = fzbz[i - 1] + "Fizz";
    }
    if (i % 5 == 0) {
      fzbz[i - 1] = fzbz[i - 1] + "Buzz";
    }
    if (fzbz[i - 1].length == 0) {
      fzbz[i - 1] = fzbz[i - 1] + i; 
    }
  }
  return fzbz;
};
