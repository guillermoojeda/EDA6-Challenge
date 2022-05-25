const getBoardArray = require('./getBoardArray');

/**
* Prints a board on the console, in readable format,replacing ' ' for  '_'
*
* @param {string} board is the board, expressed as a String.
*/
function printBoard(board) {

  // possible coords
  const refString = '0a1b2c3d4e5f6g7h8';

  // Replace spaces
  const splitBoard = board.split('')
  for (var i = 0; i < splitBoard.length; i++) {
    if (splitBoard[i] === ' ') {
      splitBoard[i] = '_'
    }
  }
  board = splitBoard.join('');

  // getting array
  const boardArr = getBoardArray(board)

  // printing,line by line
  console.log(`  ${refString}  `)
  console.log(' ')
  for (var i = 0; i < boardArr.length; i++) {
    thisRow = `${refString[i]} ${boardArr[i]} ${refString[i]}`;
    console.log(thisRow);
  }
  console.log(' ')
  console.log(`  ${refString}  `)
};

module.exports = printBoard;
