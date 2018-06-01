// https://www.interviewbit.com/problems/spiral-order-matrix-i/
// Spiral traversal of matrix

module.exports = { 
 //param A : array of array of integers
 //return a array of integers
  spiralOrder : function(A){
        var horizontal = true; // true == right     false == left
        var vertical = true; // true == down        false == up
        var currentDirection = true; //true = horizontal      false == vertical
        var rightColumn = A[0].length - 1;
        var leftColumn = 0;
        var topRow = 0;
        var bottomRow = A.length - 1;
        var currentRow = 0;
        var currentColumn = 0;
        var counter = [];
        var returnArr = [];
        returnArr.push(A[0][0]);
        
        while (returnArr.length != A.length * A[0].length) {
            if (currentDirection) { // horizontal
                if (horizontal) {
                    if (currentColumn != rightColumn) { //more horizontal room
                        currentColumn++;
                        returnArr.push(A[currentRow][currentColumn]);
                    }
                    else { // end of horizontal
                        horizontal = !horizontal;
                        rightColumn--;
                        currentDirection = !currentDirection;
                        currentRow++;
                        returnArr.push(A[currentRow][currentColumn]);
                    }
                }
                else {
                    if (currentColumn != leftColumn) { //more horizontal room
                        currentColumn--;
                        returnArr.push(A[currentRow][currentColumn]);
                    }
                    else { // end of horizontal
                        horizontal = !horizontal;
                        leftColumn++;
                        currentDirection = !currentDirection;
                        currentRow--;
                        returnArr.push(A[currentRow][currentColumn]);
                    }
                }
            }
            else {
                if (vertical) {
                    if (currentRow != bottomRow) { //more vertical room
                        currentRow++;
                        returnArr.push(A[currentRow][currentColumn]);
                    }
                    else { // end of vertical
                        vertical = !vertical;
                        bottomRow--;
                        currentDirection = !currentDirection;
                        currentColumn--;
                        returnArr.push(A[currentRow][currentColumn]);
                    }
                }
                else {
                    if (currentRow != topRow) { //more vertical room
                        currentRow--;
                        returnArr.push(A[currentRow][currentColumn]);
                    }
                    else { // end of horizontal
                        vertical = !vertical;
                        topRow++;
                        currentDirection = !currentDirection;
                        currentColumn++;
                        returnArr.push(A[currentRow][currentColumn]);
                    }
                }
            }
        }
        
        return returnArr;
  }
};
