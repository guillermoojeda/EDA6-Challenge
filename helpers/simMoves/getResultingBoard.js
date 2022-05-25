/**
 * Calculates how a board would be after a move, (but )does not checl that the given move is valid).
 * 
 * @param {*} boardArray is the current boardArray, this turn
 * @param {*} move is the planned move e.g. [[14, 14][14, 12]]
 * @returns an Array of a biard in (boardArray format) with the supposed next move;
 */

function getResultingBoard(boardArray, move) {

  const fromX = move[0][0];
  const fromY = move[0][1];
  const toX = move[1][0];
  const toY = move[1][1];
  const sideMoving = boardArray[fromX][fromY];

  const result = [...boardArray];

  var auxiliar = result[fromX];
  const replacement = ' ';
  auxiliar = auxiliar.substring(0, fromY) + replacement + auxiliar.substring(fromY + 1);

  result[fromX] = auxiliar;

  var auxiliar2 = result[toX];
  const replacement2 = sideMoving;
  auxiliar2 = auxiliar2.substring(0, toY) + replacement2 + auxiliar2.substring(toY + 1);

  result[toX] = auxiliar2;

  return result;
}

module.exports = getResultingBoard;
