// https://leetcode.com/contest/weekly-contest-88/problems/loud-and-rich/
// Loud and Rich (find quietest person that is richer than or of equal richness to each person in the room)

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  if (!quiet || !quiet.length) {
    return [0];
  }

  var equalToOrRicherThanHashMap = {};
  var quieterAndRichestArray = new Array(quiet.length);

  for (var j = 0; j < quieterAndRichestArray.length; j++) {
    quieterAndRichestArray[j] = j;
    equalToOrRicherThanHashMap[j] = [j];
  }

  if (!richer || !richer.length ) {
    return quieterAndRichestArray;
  }

  for (var i = 0; i < richer.length; i++) {
    for (var l = 0; l < quiet.length; l++) {
      if (equalToOrRicherThanHashMap[l].indexOf(richer[i][1]) != -1) {
        for (var el in equalToOrRicherThanHashMap[richer[i][0]]) {
          if (equalToOrRicherThanHashMap[l].indexOf(equalToOrRicherThanHashMap[richer[i][0]][el]) == -1) {
            equalToOrRicherThanHashMap[l].push(equalToOrRicherThanHashMap[richer[i][0]][el]);
          }
        }
      }
    }
  }
  for (var k = 0; k < quiet.length; k++) {
    for (var richerThanOrEqualTo in equalToOrRicherThanHashMap[k]) {
       if (quiet[parseInt(equalToOrRicherThanHashMap[k][richerThanOrEqualTo])] < quiet[quieterAndRichestArray[k]]) {
        quieterAndRichestArray[k] = parseInt(equalToOrRicherThanHashMap[k][richerThanOrEqualTo]);
      }
    }
  }

  return quieterAndRichestArray;
};
