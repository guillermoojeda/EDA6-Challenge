/**
 * Returns an array with all the coords occupied by walls-.
 * 
 * @param {Array} boardArray - a boardArray resulting from getBoardArray. It must be inverted if playing 'N'.
 * @returns a 
 */
function getCenterWallSlots(boardArray) {
  // const refString = '0a1b2c3d4e5f6g7h8';
  const walledCoords = [];

  for (var i = 0; i < boardArray.length; i++) {
    for (var j = 0; j < boardArray[i].length; j++) {
      if (boardArray[i][j] === '*') {
        occupiedCoord = [i, j];
        walledCoords.push(occupiedCoord);
      }
    }
  }
  return walledCoords;
}

// 0a1b2c3d4e5f6g7h8
const boardArraySample = [
  '  N     N     N  ', // 0
  '           |     ', // a
  '  -*-      *     ', // 1
  '          N|     ', // b
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

console.log(getCenterWallSlots(boardArraySample));

module.exports = getCenterWallSlots;
