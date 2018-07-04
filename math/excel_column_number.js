// https://www.interviewbit.com/problems/excel-column-number/
// Excel column number

//param A : string
//return an integer
var titleToNumber = function(A){
  var sumColumnValue = 0;
  var boundaries = "AZ";
  for (var i = A.length - 1; i >= 0; i--) {
    if (i != A.length - 1) {
      sumColumnValue += (A.charCodeAt(i) - boundaries.charCodeAt(0) + 1) * Math.pow((boundaries.charCodeAt(1) - boundaries.charCodeAt(0) + 1), ((A.length - 1 - i)));
    }
    else {
      sumColumnValue += A.charCodeAt(i) - boundaries.charCodeAt(0) + 1; 
    }
  }
  return sumColumnValue;
};
