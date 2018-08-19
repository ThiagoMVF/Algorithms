// https://leetcode.com/contest/weekly-contest-95/problems/stone-game/
// Stone Game

/*
Alex and Lee play a game with piles of stones.  There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.

Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.

Example 1:

Input: [5,3,4,5]
Output: true
Explanation: 
Alex starts first, and can only take the first 5 or the last 5.
Say he takes the first 5, so that the row becomes [3, 4, 5].
If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alex, so we return true.

Note:

2 <= piles.length <= 500
piles.length is even.
1 <= piles[i] <= 500
sum(piles) is odd.
*/

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  var start = 0;
  var end = piles.length - 1;
  var A = 0;
  var L = 0;
  var alexTurn = true;
  var LEFT = -1;
  var RIGHT = 1;
  var INDEX_MULT = 100000000000;

  var leeMemo = {};
  var alexMemo = {};

  var leePicks = function(piles, start, end) {
    if (start == end) {
      return {
        alex: 0,
        lee: piles[start]
      };
    }
    var index = start * INDEX_MULT + end;
    if (leeMemo[index]) {
      return leeMemo[index];
    }
    var leeLeftMaxPoints = piles[start];
    var leeRightMaxPoints = piles[end];
    var maximizeAlexPointsPickLeft = alexPicks(piles, start + 1, end);
    var maximizeAlexPointsPickRight = alexPicks(piles, start, end - 1);
    var maxLeePoints; 
    var leeLeftPoints = (leeLeftMaxPoints + maximizeAlexPointsPickLeft.lee);
    var leeRightPoints = (leeRightMaxPoints + maximizeAlexPointsPickRight.lee);
    if (leeLeftPoints > leeRightPoints) {
      leeMemo[index] = {
        alex: maximizeAlexPointsPickLeft.alex,
        lee: leeLeftPoints
      };
      return leeMemo[index];
    }
    else {
      leeMemo[index] = {
        alex: maximizeAlexPointsPickRight.alex,
        lee: leeRightPoints
      };
      return leeMemo[index];
    }
  }

  var alexPicks = function(piles, start, end) {
    if (start == end) {
      return {
        alex: piles[start],
        lee: 0
      };
    }
    var index = start * INDEX_MULT + end;
    if (alexMemo[index]) {
      return alexMemo[index];
    }
    var alexLeftMaxPoints = piles[start];
    var alexRightMaxPoints = piles[end];
    var maximizeLeePointsPickLeft = leePicks(piles, start + 1, end);
    var maximizeLeePointsPickRight = leePicks(piles, start, end - 1);
    var maxAlexPoints; 
    var alexLeftPoints = (alexLeftMaxPoints + maximizeLeePointsPickLeft.alex);
    var alexRightPoints = (alexRightMaxPoints + maximizeLeePointsPickRight.alex);
    if (alexLeftPoints > alexRightPoints) {
      alexMemo[index] = {
        alex: alexLeftPoints,
        lee: maximizeLeePointsPickLeft.lee
      };
      return alexMemo[index];
    }
    else {
      alexMemo[index] = {
        alex: alexRightPoints,
        lee: maximizeLeePointsPickRight.lee
      };
      return alexMemo[index];
    }
  };

  var maximizeAlexPoints = alexPicks(piles, start, end);

  if (maximizeAlexPoints.alex > maximizeAlexPoints.lee) {
    return true;
  }
  return false;
};