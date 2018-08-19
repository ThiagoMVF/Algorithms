// https://leetcode.com/contest/weekly-contest-96/problems/boats-to-save-people/
// Boats to Save People

/*
The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
Note:

1 <= people.length <= 50000
1 <= people[i] <= limit <= 30000
*/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  var swapElements = function(arr, ind1, ind2) {
    var tmp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = tmp;
  };

  var partition = function(arr, start, end) {
    var pivotPos = start;
    var pivot = arr[end];

    for (var i = start; i < end; i++) {
      if (arr[i] < pivot) {
        swapElements(arr, i, pivotPos);
        pivotPos++;
      }
    }
    swapElements(arr, end, pivotPos);

    return pivotPos;
  };

  var quickSort = function(arr, start, end) {
    if (start >= end) {
      return;
    }
    var pivotPos = partition(arr, start, end);

    quickSort(arr, start, pivotPos-1);
    quickSort(arr, pivotPos+1, end);
  };

  quickSort(people, 0, people.length - 1);

  var countBoats = function(arr, start, end, limit) {
    if (start > end) {
      return 0;
    }
    if (arr[start] + arr[end] <= limit) {
      return 1 + countBoats(arr, start + 1, end - 1, limit);
    }
    else {
      return 1 + countBoats(arr, start, end - 1, limit);
    }
  };

  return countBoats(people, 0, people.length - 1, limit);
};
