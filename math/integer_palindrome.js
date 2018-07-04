// https://www.interviewbit.com/problems/palindrome-integer/
// Palindrome Integer

//param A : integer
//return an integer
isPalindrome = function(A){
  var magnitude = 0;
  var divisor = 1;

  if (A < 0) {
    return 0;
  }
  if (A < 10) {
    return 1;
  }

  while (divisor <= A) {
    magnitude++;
    divisor = Math.pow(10, magnitude);
  }

  magnitude--;
  divisor = Math.pow(10, magnitude);
  var rest = 0;
  for (var i = 1; i <= Math.ceil(magnitude/2); i++) {
    rest = Math.floor((A % Math.pow(10, i)) / Math.pow(10, i - 1));
    if (rest != Math.floor((A / Math.pow(10, magnitude))) - Math.floor((A / Math.pow(10, magnitude + 1))) * 10) {
      return 0;
    }
    magnitude--;
  }

  return 1;
};
