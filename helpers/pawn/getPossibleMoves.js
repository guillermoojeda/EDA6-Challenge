const move = require('./pawnMoves');

/**
 * 
 * @param {Array} pawnCoords Array of coordinates of the pawn under evaluation,such as [3, 5]. 
 * @param {*} boardArray board in array format, as the format resulting from getBoardArray.
 * @returns an array, with possible moveTo X Y coordinates, such as [[1, 0], [2, 0]], but coordinates values range from 0 to 17!
 */
function getPossibleMoves(pawnCoords, boardArray, playerColor) {

  var enemyColor;
  if (playerColor === 'N') {
    enemyColor = 'S';
  }
  if (playerColor === 'S') {
    enemyColor = 'N';
  }

  const possibleMoves = [];
  const currentX = pawnCoords[0];
  const currentY = pawnCoords[1];
  const currentSide = boardArray[currentX][currentY];
  possibleMoves.push(move.south(pawnCoords, boardArray, currentSide));
  possibleMoves.push(move.west(pawnCoords, boardArray, currentSide));
  possibleMoves.push(move.north(pawnCoords, boardArray, currentSide));
  possibleMoves.push(move.east(pawnCoords, boardArray, currentSide));

  // console.log(`currentX: ${currentX} currentY: ${currentY} current enemyColor : ${enemyColor}`);
  // jump south
  if (currentX === 16) {
    // pass
  } else if (
    boardArray[currentX + 1][currentY] === ' ' &&
    boardArray[currentX + 2][currentY] === enemyColor
  ) {
    // console.log('entro')
    // console.log(`currentX: ${currentX} currentY: ${currentY} current enemyColor : ${enemyColor}`);
    possibleMoves.push(move.south([currentX + 2, currentY], boardArray, currentSide));
    if (currentX < 14 && boardArray[currentX + 3][currentY] !== ' ') { // Jumps diagonally only if there is a wall as explained in image;
      possibleMoves.push(move.west([currentX + 2, currentY], boardArray, currentSide));
      possibleMoves.push(move.east([currentX + 2, currentY], boardArray, currentSide));
    }
  }

  // jump north
  if (currentX === 0) {
    // pass
  } else if (
    boardArray[currentX - 1][currentY] === ' ' &&
    boardArray[currentX - 2][currentY] === enemyColor
  ) {
    possibleMoves.push(move.north([currentX - 2, currentY], boardArray, currentSide));

    // Diagonal jumps logic
    if (currentX > 2 && boardArray[currentX - 3][currentY] !== ' ') {
      possibleMoves.push(move.west([currentX - 2, currentY], boardArray, currentSide));
      possibleMoves.push(move.east([currentX - 2, currentY], boardArray, currentSide));
    }
  }



  // jump east
  if (currentY === 16) {
    // pass
  } else if (
    boardArray[currentX][currentY + 1] === ' ' &&
    boardArray[currentX][currentY + 2] === enemyColor
  ) {
    possibleMoves.push(move.east([currentX, currentY + 2], boardArray, currentSide));

    // Diagonal jumps logic, only if there is a barrier.
    if (currentY < 14 && boardArray[currentX][currentY + 3] !== ' ') {
      possibleMoves.push(move.north([currentX, currentY + 2], boardArray, currentSide));
      possibleMoves.push(move.south([currentX, currentY + 2], boardArray, currentSide));
    }
  }


  // jump west
  if (currentY === 0) {
    // pass
  } else if (
    boardArray[currentX][currentY - 1] === ' ' &&
    boardArray[currentX][currentY - 2] === enemyColor
  ) {
    possibleMoves.push(move.west([currentX, currentY - 2], boardArray, currentSide));

    // Diagonal Jump logic
    if (currentY > 2 && boardArray[currentX][currentY - 3] !== ' ') {
      possibleMoves.push(move.north([currentX, currentY - 2], boardArray, currentSide));
      possibleMoves.push(move.south([currentX, currentY - 2], boardArray, currentSide));
    }
  }

  // Removing all "nulls";

  const possibleMoves2 = [];

  for (var i = 0; i < possibleMoves.length; i++) {
    if (possibleMoves[i] !== null && possibleMoves[i] !== [null]) {
      possibleMoves2.push(possibleMoves[i]);
    }
  }

  return possibleMoves2;
}

// test

module.exports = getPossibleMoves;
