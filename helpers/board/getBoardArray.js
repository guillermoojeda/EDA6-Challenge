/**
* Returns an array of strings, where each element is a row.
*
* @param {string} board is the board, expressed as a String.
*/
function getBoardArray(board) {

  const rows = [];
  var currentRow = '';

  for (var i = 0; i < board.length; i++) {
    currentRow = currentRow + board[i];
    if ((i + 1) % 17 === 0) {
      rows.push(currentRow);
      currentRow = '';
    }
  }
  return (rows);
};

module.exports = getBoardArray;
