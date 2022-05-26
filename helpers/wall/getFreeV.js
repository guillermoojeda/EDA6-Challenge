/**
 * Returns an array with all coords where an order for a new vertical wall can be placed.
 * @param {Array} boardArray is an array from boardArray. 
 */

function getFreeV(boardArray) {

  const freeSpots = []

  for (var i = 0; i < (boardArray.length - 1); i++) {
    for (var j = 0; j < (boardArray[i].length - 1); j++) {
      if (
        boardArray[i][j] === ' ' &&
        i % 2 !== 0 &&
        j % 2 !== 0 &&
        boardArray[i + 1][j] === ' ' &&
        boardArray[i - 1][j] === ' '
      ) {
        const newFreeSpot = [i, j];
        if (i + 2 > 16 || i - 2 < 0) {
          freeSpots.push(newFreeSpot);
        } else if (
          boardArray[i + 2][j] === ' ' &&
          boardArray[i - 2][j] === ' '
        ) {
          freeSpots.push(newFreeSpot);
        }
      }
    }
  }

  return freeSpots;
};

module.exports = getFreeV;
