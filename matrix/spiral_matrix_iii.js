// https://leetcode.com/contest/weekly-contest-97/problems/spiral-matrix-iii/
// Spiral Matrix III

/*
On a 2 dimensional grid with R rows and C columns, we start at (r0, c0) facing east.

Here, the north-west corner of the grid is at the first row and column, and the south-east corner of the grid is at the last row and column.

Now, we walk in a clockwise spiral shape to visit every position in this grid. 

Whenever we would move outside the boundary of the grid, we continue our walk outside the grid (but may return to the grid boundary later.) 

Eventually, we reach all R * C spaces of the grid.

Return a list of coordinates representing the positions of the grid in the order they were visited.

Example 1:

Input: R = 1, C = 4, r0 = 0, c0 = 0
Output: [[0,0],[0,1],[0,2],[0,3]]

Example 2:

Input: R = 5, C = 6, r0 = 1, c0 = 4
Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]

Note:

1 <= R <= 100
1 <= C <= 100
0 <= r0 < R
0 <= c0 < C
*/

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
  var x = r0;
  var y = c0;
  var visited = [];
  var add = 1;
  var addCount = 0;
  var changedDirectionTimes = 0;
  var right = true;
  var down = true;
  var horizontal = true;
  while (visited.length < R * C) {
    if (y < C && y >= 0 && x < R && x >= 0) {
      visited.push([x, y]);
    }
    if (horizontal) {
      if (right) {
        y += 1;
        addCount++;
      }
      else {
        y -= 1;
        addCount++;
      }
      if (addCount == add) {
        changedDirectionTimes++;
        horizontal = !horizontal;
        right = !right;
        addCount = 0;
      }
    }
    else {
      if (down) {
        x += 1;
        addCount++;
      }
      else {
        x -= 1;
        addCount++;
      }
      if (addCount == add) {
        changedDirectionTimes++;
        horizontal = !horizontal;
        down = !down;
        addCount = 0;
      }
    }

    if (changedDirectionTimes == 2) {
      add++;
      changedDirectionTimes = 0;
    }
  }

  return visited;
};
