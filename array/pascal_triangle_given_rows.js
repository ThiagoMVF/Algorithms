// https://www.interviewbit.com/problems/pascal-triangle/
// Pascal triangle given rows

//param A : integer
//return a array of array of integers
var generate = function(A){
  if (A == 0) {
    return [];
  }
  if (!A) {
    return null;
  }
  
  var triangle = new Array(A);
  for (var i = 0; i < triangle.length; i++) {
    triangle[i] = new Array(i + 1);
    for (var j = 0; j < triangle[i].length; j++) {
      if ((j == 0) || (j == triangle[i].length - 1)) {
        triangle[i][j] = 1;
      }
      else {
        triangle[i][j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
      }
    }
  }
  return triangle;
};
