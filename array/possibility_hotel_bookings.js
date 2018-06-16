// https://www.interviewbit.com/problems/hotel-bookings-possible/
// Possibility of hotel bookings

//param A : array of integers
//param B : array of integers
//param C : integer
//return an integer
var hotel = function(A, B, C){
  if (!A || !A.length || !B || !B.length || !C || A.length != B.length) {
    return 0;
  }

  var changePosition = function(array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  }

  var partition = function(bookingsArray, start, end) {
    var pivot = bookingsArray[end];
    var pivotPosition = start;
    changePosition(bookingsArray, start, end);

    for(var j = start + 1; j <= end; j++) {
      if (pivot > bookingsArray[j]) {
        changePosition(bookingsArray, pivotPosition + 1, j);
        changePosition(bookingsArray, pivotPosition, pivotPosition + 1);
        pivotPosition++;
      }
    }

    return pivotPosition;
  }

  var quickSortBookings = function(bookingsArray, start, end) {
    if (start >= end) {
      return;
    }

    var pivotIndex = partition(bookingsArray, start, end);

    quickSortBookings(bookingsArray, start, pivotIndex - 1);
    quickSortBookings(bookingsArray, pivotIndex + 1, end);
  }

  quickSortBookings(A, 0, A.length - 1);
  quickSortBookings(B, 0, B.length - 1);

  var isSortedBookingPossible = function(arrivalList, departureList, rooms) {
    var currentRoomsNeeded = 0;
    var departuresProcessed = 0;
    for (var k = 0; k < arrivalList.length; k++) {
      currentRoomsNeeded++;
      while (departureList[departuresProcessed] <= arrivalList[k]) {
        currentRoomsNeeded--;
        departuresProcessed++;
      }
      if (currentRoomsNeeded > rooms) {
        return 0;
      }
    }
    return 1;
  }

  return isSortedBookingPossible(A, B, C);
};
