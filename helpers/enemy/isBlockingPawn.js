/**
* Attempts to detect if an enemy wall is blocking your pawn at a position close to crowning (3 normal moves close)
 * 
 * @param {*} boardArray is an Array of Strings, that represent each of the rows, from player´s perspective
 * @returns the horizontal 
 */

function isBlockingPawn(boardArray, playerColor) {

  const coords = []

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < boardArray[i].length; j++) {
      if (boardArray[i][j] === playerColor && boardArray[i - 1][j] === '-') {
        coords.push([i, j])
      }
    }
  }

  if (coords.length > 1) { return coords };

  return false
}

module.exports = isBlockingPawn;
