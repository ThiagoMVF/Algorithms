// https://www.interviewbit.com/problems/kth-row-of-pascals-triangle/
// Kth row of Pascal triangle

//param A : integer
//return a array of integers
var getRow = function(A){
  if (A == 0) {
    return [1];
  }
  if (!A) {
    return null;
  }
  
  var row = new Array(A + 1);
  row[0] = 1;
  var oldPreviousValue = -1;
  var oldCurrentValue = -1;
  
  for(var i = 1; i < row.length; i++) {
    for(var j = 0; j <= i; j++) {
      if ((j == 0) || (j == i)) {
        row[j] = 1;
        oldCurrentValue = 1;
      }
      else {
        oldPreviousValue = oldCurrentValue;
        oldCurrentValue = row[j];
        row[j] = oldPreviousValue + oldCurrentValue;
      }
    }
  }
  return row;
};
