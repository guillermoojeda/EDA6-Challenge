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
        freeSpots.push(newFreeSpot);
      }
    }
  }

  return freeSpots;
};

module.exports = getFreeV;

const boardArraySample = [
  '  N     N  |  N  ', // 0
  '  -*-      *     ', // a
  '           |     ', // 1
  '          N      ', // b
  '                 ', // 2
  '      S          ', // c
  '                 ', // 3
  '            -*-  ', // d
  '                 ', // 4
  '                 ', // e
  '    N            ', // 5
  '                 ', // f
  '           |     ', // 6
  '  -*-      *     ', // g
  '          S|     ', // 7
  '                 ', // h
  '  S     S     S  '  // 8
]

console.log(getFreeV(boardArraySample));