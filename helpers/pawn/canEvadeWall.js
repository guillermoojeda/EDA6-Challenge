/**
 * Returns true if a pawn can evade a wall in up to 2 turns.
 * 
 * @param {Array} boardArray is the board array.
 * @param {Array} coords is an array where a Pawn is located, such as [6, 8]
 * @returns the coordinates by where the pawn can pass. E.g. [3, 5]. Returns false if there is none
 */

function canEvadeWall(boardArray, coords) {

  coordX = coords[0];
  coordY = coords[1];
  if (coordY + 1 <= 16 &&
    boardArray[coordX][coordY - 1] === ' ' &&
    boardArray[coordX][coordY - 2] === ' ' &&
    boardArray[coordX - 1][coordY - 2] === ' '
  ) {
    return [coordX - 1, coordY - 2];
  };
  if (coordY - 1 >= 0 &&
    boardArray[coordX][coordY + 1] === ' ' &&
    boardArray[coordX][coordY + 2] === ' ' &&
    boardArray[coordX - 1][coordY + 2] === ' '
  ) {
    return [coordX - 1, coordY + 2];
  };

  console.log('error');

  return false;
}

module.exports = canEvadeWall;
