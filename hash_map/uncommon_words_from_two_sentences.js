// https://leetcode.com/contest/weekly-contest-97/problems/uncommon-words-from-two-sentences/
// Uncommon Words from Two Sentences

/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
 

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  var wordFrequencyMap = {};
  var countWordFrequency = function(phrase, map) {
    var words = phrase.split(' ');
    for(var i = 0; i < words.length; i++) {
      if (map[words[i]] == undefined) {
        map[words[i]] = 1;
      }
      else {
        map[words[i]] = map[words[i]] + 1;
      }
    }
  }
  countWordFrequency(A, wordFrequencyMap);
  countWordFrequency(B, wordFrequencyMap);
  var uniqueWords = function(map) {
    var unique = [];
    for(var key in map) {
      if (map[key] == 1) {
        unique.push(key);
      }
    }
    return unique;
  }
  return uniqueWords(wordFrequencyMap);
};
