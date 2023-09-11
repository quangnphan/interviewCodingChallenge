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

const message = document.getElementById("message");

function displayGrid (arr) {
  // console.log(arr);
  const grid = document.getElementById("grid");
  const cells = grid.querySelectorAll("td");
  for(let i=0; i<arr.length; i++){
    if(arr[i] >75 || arr[i] < 1){
      console.log("Bingo card must be between 1-75")
      cells[i].textContent = "NA"
      message.textContent = "Bingo card must be between 1-75"
      return;
    }
    cells[i].textContent = arr[i]
  }
}

function checkRows (cells) {
  //we loop from index 0 to 4 for the first row, then multiply by 5 for each row to check the next row
  for (let i=0;i<5;i++){
    let win = true;
    for (let j=0;j<5;j++){
      const index = i * 5 + j
      //check if the index in the row contains the classname filled to win
      if(!cells[index].classList.contains("filled")){
        win = false;
        break;
      }
    }
    if(win){
      return true;
    }
  }
  return false;
}

function checkColumns(cells) {
  //same for rows but we check the column for example first column will be 0,5,10,15,20
  for (let i=0;i<5;i++){
    let win = true;
    for (let j=0;j<5;j++){
      const index = j * 5 + i
      if(!cells[index].classList.contains("filled")){
        win = false;
        break;
      }
    }
    if(win){
      return true;
    }
  }
  return false;
}

function checkDiagonals (cells) {
  //we only have to check 2 cases here 0,6,12,18,22 and 4,8,12,16,20
  let diagonal1 = true;
  let diagnoal2 = true;
  for(let i=0;i<5;i++){
    if(!cells[i*6].classList.contains("filled")){
      diagonal1 = false;
    }
    if(!cells[i*4+4].classList.contains("filled")){
      diagnoal2 = false;
    }
  }
  return diagonal1 || diagnoal2;
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

  //Start checking here
  if(checkRows(cells) || checkColumns(cells) || checkDiagonals(cells)){
    console.log('Win');
    message.textContent = "You win!"
    return
  }

  message.textContent = "No winner yet!"
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
   9,21,59,63
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
