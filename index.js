/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

function displayGrid (arr) {
  console.log(arr);
  const grid = document.getElementById("grid");
  const cells = grid.querySelectorAll("td");
  for(let i=0; i<arr.length; i++){
    if(arr[i] >75 || arr[i] < 1){
      console.log("Bingo card must be between 1-75")
      cells[i].textContent = "NA"
      return;
    }
    cells[i].textContent = arr[i]
  }
}

function checkForBingo (bingoCard, drawnNumbers) {
  //render the card
  displayGrid(bingoCard);

  const grid = document.getElementById("grid");
  const cells = grid.querySelectorAll("td");
  
  for(let i=0;i<drawnNumbers.length;i++){
    //Use indexOf to check if number exists in the first array
    const index = bingoCard.indexOf(drawnNumbers[i])
    //if second array has numbers that are not in the array, the index will be -1
    if(index !== -1){
      cells[index].classList.add("filled");
    }
  }
}

checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    8, 24, 53, 72
  ]
)

// module.exports = checkForBingo;
// here are some samples
// this should return true with diagonal + free
// checkForBingo(
//   [
//     8, 29, 35, 54, 65,
//     13, 24, 44, 48, 67,
//     9, 21, 'FREE', 59, 63,
//     7, 19, 34, 53, 61,
//     1, 20, 33, 46, 72
//   ],
//   [
//     8, 24, 53, 72
//   ]
// );
// this should return false
// checkForBingo(
//   [
//    8, 29, 35, 54, 65,
//    13, 24, 44, 48, 67,
//    9, 21, 'FREE', 59, 63,
//    7, 19, 34, 53, 61,
//    1, 20, 33, 46, 72
//   ],
//   [
//     1, 33, 53, 65, 29, 75
//   ]
// );
