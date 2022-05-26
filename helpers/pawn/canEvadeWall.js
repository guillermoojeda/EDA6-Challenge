/**
 * Returns the path where a pawn can evade a wall in up to 2 turns. Returns false if it cannot.
 * 
 * @param {Array} boardArray is the board array.
 * @param {Array} coords is an array of arrays where a Pawn are located, such as [6, 8].
 * @returns the coordinates by where one of the pawns can pass. E.g. [3, 5]. Returns false if there is none
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

  console.log('cannot go around wall');

  return false;
}

module.exports = canEvadeWall;
