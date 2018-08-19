// https://leetcode.com/contest/weekly-contest-94/problems/walking-robot-simulation/
// Walking Robot Simulation

/*
A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:

-2: turn left 90 degrees
-1: turn right 90 degrees
1 <= x <= 9: move forward x units
Some of the grid squares are obstacles. 

The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])

If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

Return the square of the maximum Euclidean distance that the robot will be from the origin.

Example 1:

Input: commands = [4,-1,3], obstacles = []
Output: 25
Explanation: robot will go to (3, 4)
Example 2:

Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
Output: 65
Explanation: robot will be stuck at (1, 4) before turning left and going to (1, 8)

Note:

0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
The answer is guaranteed to be less than 2 ^ 31
*/

/**
* @param {number[]} commands
* @param {number[][]} obstacles
* @return {number}
*/
var robotSim = function(commands, obstacles) {
  var facing = 0; //0=north 1=right 2=bottom 3=left
  var facingMap = {
    "0": {
      "-1": 1,
      "-2": 3
    },
    "1": {
      "-1": 2,
      "-2": 0
    },
    "2": {
      "-1": 3,
      "-2": 1
    },
    "3": {
      "-1": 0,
      "-2": 2
    },
  }
  var pos = {"x": 0, "y": 0};
  var maximumDist = 0;
  
  var walkUntilObstacle = function(pos, facing, command, obst) {
    var newPos = null;
    if (facing == 0) {
      for (var j = 0; j < obst.length; j++) {
        if (obst[j][0] == pos.x && obst[j][1] > pos.y && obst[j][1] <= pos.y + command) {
          if (newPos == null) {
            newPos = obst[j][1] - 1;
          }
          else if (obst[j][1] - 1 < newPos) {
            newPos = obst[j][1] - 1;
          }
        }
      }
      pos.y = newPos != null ? newPos : pos.y + command;
    }
    else if (facing == 2) {
      for (var k = 0; k < obst.length; k++) {
        if (obst[k][0] == pos.x && obst[k][1] < pos.y && obst[k][1] >= pos.y - command) {
          if (newPos == null) {
            newPos = obst[k][1] + 1;
          }
          else if (obst[k][1] + 1 > newPos) {
            newPos = obst[k][1] + 1;
          }
        }
      }
      pos.y = newPos != null ? newPos : pos.y - command;
    }
    else if (facing == 1) {
      for (var l = 0; l < obst.length; l++) {
        if (obst[l][1] == pos.y && obst[l][0] > pos.x && obst[l][0] <= pos.x + command) {
          if (newPos == null) {
            newPos = obst[l][0] - 1;
          }
          else if (obst[j][0] - 1 < newPos) {
            newPos = obst[l][0] - 1;
          }
        }
      }
      pos.x = newPos != null ? newPos : pos.x + command;
    }
    else { //facing == 3
      for (var m = 0; m < obst.length; m++) {
        if (obst[m][1] == pos.y && obst[m][0] < pos.x && obst[m][0] >= pos.x - command) {
          if (newPos == null) {
            newPos = obst[m][0] + 1;
          }
          else if (obst[m][0] + 1 > newPos) {
            newPos = obst[m][0] + 1;
          }
        }
      }
      pos.x = newPos != null ? newPos : pos.x - command;
    }
  }

  for(var i = 0; i < commands.length; i++) {
    if (commands[i] < 0) {
      facing = facingMap[facing][commands[i]];
    }
    else {
      if (commands[i] > 0) {
        walkUntilObstacle(pos, facing, commands[i], obstacles);
        maximumDist = Math.max(maximumDist, (Math.pow(pos.x,2) + Math.pow(pos.y,2)));
      }
    }
  }

  return maximumDist;
};