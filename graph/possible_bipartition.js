// https://leetcode.com/contest/weekly-contest-97/problems/possible-bipartition/
// Possible Bipartition

/*
Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

Example 1:

Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
Example 2:

Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Example 3:

Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false

Note:

1 <= N <= 2000
0 <= dislikes.length <= 10000
1 <= dislikes[i][j] <= N
dislikes[i][0] < dislikes[i][1]
There does not exist i != j for which dislikes[i] == dislikes[j].
*/

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
  var buildDislikeMap = function(dislikes) {
    var map = {};
    for (var i = 0; i < dislikes.length; i++) {
      if (map[dislikes[i][0]]) {
        map[dislikes[i][0]].push(dislikes[i][1]);
      }
      else {
        map[dislikes[i][0]] = [dislikes[i][1]];
      }

      if (map[dislikes[i][1]]) {
        map[dislikes[i][1]].push(dislikes[i][0]);
      }
      else {
        map[dislikes[i][1]] = [dislikes[i][0]];
      }
    }
    return map;
  }
  var dislikeMap = buildDislikeMap(dislikes);

  var putElInGroup = function(elNumber, groupNumber, N, dislikeMap, groups) {
    if (elNumber > N) {
      return true;
    }
    groups[elNumber] = groupNumber;
    if(dislikeMap[elNumber]) {
      for (var j = 0; j < dislikeMap[elNumber].length; j++) {
        if (groups[dislikeMap[elNumber][j]] == groupNumber) {
          return false;
        }
        else if (groups[dislikeMap[elNumber][j]] == 0 && !putElInGroup(dislikeMap[elNumber][j], -groupNumber, N, dislikeMap, groups)) {
          return false;
        }
      }
    }
    return true;
  }

  var splitTwoGroups = function(N, dislikeMap) {
    var groups = {}; // groups are 1 and -1, the ones in 0 haven't been placed
    for (var m = 1; m <= N; m++) {
      groups[m] = 0;
    }
    for (var n = 1; n <= N; n++) {
      if (groups[n] == 0 && !putElInGroup(n, 1, N, dislikeMap, groups)) {
        return false
      }
    }
    return true; 
  }
  return splitTwoGroups(N, dislikeMap);
};
