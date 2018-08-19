// https://leetcode.com/contest/weekly-contest-98/problems/find-and-replace-pattern/
// Find and Replace Pattern

/*
You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern. 

You may return the answer in any order.

Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.

Note:

1 <= words.length <= 50
1 <= pattern.length = words[i].length <= 20
*/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  var results = [];

  var replaceSimilarOccurrences = function(arr1, arr2, letter1, letter2) {
    while (arr1.indexOf(letter1) == arr2.indexOf(letter2)) {
      if (arr1.indexOf(letter1) == -1) {
        break;
      }
      arr1[arr1.indexOf(letter1)] = -1;
      arr2[arr2.indexOf(letter2)] = -1;
    }
    if (arr1.indexOf(letter1) != -1 || arr2.indexOf(letter2) != -1) {
      return false;
    }
    return true;
  }

  var isPermutation = function(word1, word2) {
    var arr1 = word1.split('');
    var arr2 = word2.split('');
    var map1 = {};
    var map2 = {};
    for (var j = 0; j < arr2.length; j++) {
      if(arr2[j] != -1){
        if (map1[arr2[j]] == undefined && map2[arr1[j]] == undefined && arr1[j] != -1) {
          map1[arr2[j]] = arr1[j];
          map2[arr1[j]] = arr2[j];
          if (!replaceSimilarOccurrences(arr1, arr2, arr1[j], arr2[j])) {
            return false;
          }
        }
        else {
          return false;
        }
      }
    }
    return true;
  }

  for(var i = 0; i < words.length; i++) {
    if (words[i].length == pattern.length) {
     if (isPermutation(words[i], pattern)) {
       results.push(words[i]);
     } 
   }
 }

 return results;
};
