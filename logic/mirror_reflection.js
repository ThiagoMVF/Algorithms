// https://leetcode.com/contest/weekly-contest-90/problems/mirror-reflection/
// Mirror reflection

/*
There is a special square room with mirrors on each of the four walls.
Except for the southwest corner, there are receptors on each of the
remaining corners, numbered 0, 1, and 2.

The square room has walls of length p, and a laser ray from the
southwest corner first meets the east wall at a distance q from the
0th receptor.

Return the number of the receptor that the ray meets first.
(It is guaranteed that the ray will meet a receptor eventually.)
*/

/**
* @param {number} p
* @param {number} q
* @return {number}
*/
var mirrorReflection = function(p, q) {
  var rayPosition = {"posX": 0, "posY": 0};
  var verticalDirection = 1; //1 goes up, -1 goes down;
  while (1) {
    if (((rayPosition.posX == 0) || (rayPosition.posX == p)) &&
        ((rayPosition.posY == p) || (rayPosition.posY == 0)) &&
        ((rayPosition.posX != 0) || (rayPosition.posY != 0))) {
      break;
    }

    if (rayPosition.posX == 0) {
      rayPosition.posX = p;
    }
    else {
      rayPosition.posX = 0;
    }

    if (verticalDirection != -1) {
      if (rayPosition.posY + q > p) {
        rayPosition.posY = p - ((rayPosition.posY + q) % p);
        verticalDirection = -1;
      }
      else {
        rayPosition.posY += q;
      }
    }
    else {
      if (rayPosition.posY - q < 0) {
        rayPosition.posY = q - rayPosition.posY;
        verticalDirection = 1;
      }
      else {
        rayPosition.posY -= q;
      }
    }
  }

  if (rayPosition.posY == 0) {
    return 0;
  }
  else if (rayPosition.posX == 0) {
    return 2;
  }
  else {
    return 1;
  }
};
