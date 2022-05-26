/**
 * Returns an array with all coords where an order for a new H wall can be placed.
 * @param {Array} boardArray is an array from boardArray. 
 */

function getFreeH(boardArray) {

  const freeSpots = []

  for (var i = 0; i < (boardArray.length - 1); i++) {
    for (var j = 0; j < (boardArray[i].length - 1); j++) {
      if (
        boardArray[i][j] === ' ' &&
        i % 2 !== 0 &&
        j % 2 !== 0 &&
        boardArray[i][j + 1] === ' ' &&
        boardArray[i][j - 1] === ' '
      ) {
        const newFreeSpot = [i, j];
        if (j + 2 > 16 || j - 2 < 0) {
          freeSpots.push(newFreeSpot);
        } else if (
          boardArray[i][j + 2] === ' ' &&
          boardArray[i][j + 2] === ' '
        ) {
          freeSpots.push(newFreeSpot);
        }
      }
    }
  }

  return freeSpots;
};

module.exports = getFreeH;
