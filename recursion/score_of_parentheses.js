// https://leetcode.com/contest/weekly-contest-90/problems/score-of-parentheses/
// Score of parentheses

var recursiveScoreOfParentheses = function(string, start) {
  var currentValue = null;
  if (string[start] == ')') {
    currentValue = {'score' : 1, 'end' : start};
  }
  else {
    currentValue = recursiveScoreOfParentheses(string, start + 1);
    if (string[start + 1] != ")") {
      currentValue.score = 2 * currentValue.score;
      currentValue.end++;
    }
  }

  if (currentValue.end == string.length - 1) {
    return currentValue;
  }

  if (string[currentValue.end + 1] == '(') {
    var sideValue = recursiveScoreOfParentheses(string, currentValue.end + 1);
    currentValue.score = currentValue.score + sideValue.score;
    currentValue.end = sideValue.end;
  }

  return currentValue;
}


/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  var parenthesesStats = recursiveScoreOfParentheses(S, 0);
  return parenthesesStats.score;
};
