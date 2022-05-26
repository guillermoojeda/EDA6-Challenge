/**
 * Returns an array with all the coords occupied by walls-.
 * 
 * @param {Array} boardArray - a boardArray resulting from getBoardArray. It must be inverted if playing 'N'.
 * @returns a 
 */
function getWallSlots(boardArray) {
  // const refString = '0a1b2c3d4e5f6g7h8';
  const walledCoords = [];

  for (var i = 0; i < boardArray.length; i++) {
    for (var j = 0; j < boardArray[i].length; j++) {
      if (!(boardArray[i][j] === 'N' || boardArray[i][j] === 'S' || boardArray[i][j] === ' ')) {
        occupiedCoord = [i, j];
        walledCoords.push(occupiedCoord);
      }
    }
  }
  return walledCoords;
}

module.exports = getWallSlots;
