// https://www.interviewbit.com/problems/spiral-order-matrix-ii/
// Generate matrix in spiral order

//param A : integer
//return a array of array of integers
var generateMatrix = function(A){
  if (!A) {
    return null;
  }
  
  var returnMatrix = new Array(A);
  
  var currentDirectionIsVertical = false; // false means horizontal
  var horizontalDirection = true; // true == right      false == left
  var verticalDirection = true; // true == down       false == up
  var currentRow = 0;
  var currentColumn = 0;
  var lastTopRowVisited = -1;
  var lastBottomRowVisited = A;
  var lastLeftColumnVisited = -1;
  var lastRightColumnVisited = A;
  
  for (var j = 0; j < A * A; j++) {
    if(!returnMatrix[currentRow]) {
      returnMatrix[currentRow] = new Array(A);
    }
    returnMatrix[currentRow][currentColumn] = j + 1;
    if (currentDirectionIsVertical) {
      if (verticalDirection) {
        if (currentRow + 1 < lastBottomRowVisited) {
          currentRow++;
        }
        else {
          lastRightColumnVisited--;
          currentDirectionIsVertical = !currentDirectionIsVertical;
          verticalDirection = !verticalDirection;
          currentColumn--;
        }
      }
      else {
        if (currentRow - 1 > lastTopRowVisited) {
          currentRow--;
        }
        else {
          lastLeftColumnVisited++;
          currentDirectionIsVertical = !currentDirectionIsVertical;
          verticalDirection = !verticalDirection;
          currentColumn++;
        }
      }
    }
    else {
      if (horizontalDirection) {
        if (currentColumn + 1 < lastRightColumnVisited) {
          currentColumn++;
        }
        else {
          lastTopRowVisited++;
          currentDirectionIsVertical = !currentDirectionIsVertical;
          horizontalDirection = !horizontalDirection;
          currentRow++;
        }
      }
      else {
        if (currentColumn - 1 > lastLeftColumnVisited) {
          currentColumn--;
        }
        else {
          lastBottomRowVisited--;
          currentDirectionIsVertical = !currentDirectionIsVertical;
          horizontalDirection = !horizontalDirection;
          currentRow--;
        }
      }
    }
  }
  
  return returnMatrix;
};
