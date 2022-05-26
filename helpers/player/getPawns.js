/**
 * Get positions for pawns. 
 * 
 * @param {*} boardArray 
 * @param {*} playerColor 
 * @returns an objects pawns, where pawns.all, pawns.mine, pawns.enemy corresponds to an array of array of coordinates [x, y] for positions of all pawns, playerColor´s pawns and enemy´s pawns.
 */

function getPawns(boardArray, playerColor) {

  const pawns = {
    all: [],
    mine: [],
    enemy: []
  }
  for (var i = 0; i < boardArray.length; i++) {
    for (var j = 0; j < boardArray.length; j++) {
      if (boardArray[i][j] === 'N' || boardArray[i][j] === 'S') {
        const coord = [i, j];
        pawns.all.push(coord);
        if (boardArray[i][j] === playerColor) {
          pawns.mine.push(coord);
        } else {
          pawns.enemy.push(coord);
        }
      }
    }
  }
  return pawns;
}

module.exports = getPawns;