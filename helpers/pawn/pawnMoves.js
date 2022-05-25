


/**
 * Move pawn south. Mainly used as a helper function for getPossibbleMoves.
 * Returns array with destinations from moves.
 * 
 * @param {Array} pawnCoords Array of coordinates of the pawn under evaluation,such as [3, 5]. 
 * @param {*} boardArray board in array format, as the format resulting from getBoardArray.
 */
function south(pawnCoords, boardArray) {
  const currentX = pawnCoords[0];
  const currentY = pawnCoords[1];
  // console.log('checking south');
  // console.log(`currentX: ${currentX} currentY: ${currentY}`);

  // Nullify jumps that would fall out of board in case of jump.
  if (currentX === 18 || currentX === -2 || currentY === 18 || currentY === -2) {
    return null;
  }

  // move south
  if (currentX === 16) {
    return null;
  }
  else if (
    boardArray[currentX + 1][currentY] === ' ' &&
    boardArray[currentX + 2][currentY] === ' '
  ) {
    return [currentX + 2, currentY]
  } else {
    return null;
  }
}


/**
 * Move pawn north. Mainly used as a helper function for getPossibbleMoves.
 * Returns array with destinations from moves.
 * 
 * @param {Array} pawnCoords Array of coordinates of the pawn under evaluation,such as [3, 5]. 
 * @param {*} boardArray board in array format, as the format resulting from getBoardArray.
 */
function north(pawnCoords, boardArray) {
  const currentX = pawnCoords[0];
  const currentY = pawnCoords[1];
  // console.log(`currentX: ${currentX} currentY: ${currentY}`);

  // move north
  if (currentX === 0) {
    return null;
  }
  else if (
    boardArray[currentX - 1][currentY] === ' ' &&
    boardArray[currentX - 2][currentY] === ' ' // thisone
  ) {
    return [currentX - 2, currentY]
  } else {
    return null;
  }
}


/**
 * Move pawn east. Mainly used as a helper function for getPossibbleMoves.
 * Returns array with destinations from moves.
 * 
 * @param {Array} pawnCoords Array of coordinates of the pawn under evaluation,such as [3, 5]. 
 * @param {*} boardArray board in array format, as the format resulting from getBoardArray.
 */
function east(pawnCoords, boardArray) {
  const currentX = pawnCoords[0];
  const currentY = pawnCoords[1];
  // console.log(`currentX: ${currentX} currentY: ${currentY}`);

  // move east
  if (currentY === 17) {
    return null;
  }
  else if (
    boardArray[currentX][currentY + 1] === ' ' &&
    boardArray[currentX][currentY + 2] === ' '
  ) {
    return [currentX, currentY + 2]
  } else {
    return null;
  }
}


/**
 * Move pawn west. Mainly used as a helper function for getPossibbleMoves.
 * Returns array with destinations from moves.
 * 
 * @param {Array} pawnCoords Array of coordinates of the pawn under evaluation,such as [3, 5]. 
 * @param {*} boardArray board in array format, as the format resulting from getBoardArray.
 */
function west(pawnCoords, boardArray, side) {
  const currentX = pawnCoords[0];
  const currentY = pawnCoords[1];
  // console.log(`currentX: ${currentX} currentY: ${currentY}`);
  // Must know side so pawns cannot jump the same team!!!
  // move south
  if (currentY === 0) {
    return null;
  }
  else if (
    boardArray[currentX][currentY - 1] === ' ' &&
    boardArray[currentX][currentY - 2] === ' '
  ) {
    return [currentX, currentY - 2]
  } else {
    return null;
  }
}

module.exports = {
  north,
  east,
  west,
  south,
};
