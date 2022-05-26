const wall = require('../wall/wall');

/**
 * Attempts to prevent a wall, by placing another wall, making sure the path will be clear
 * 
 * @param {Array} location is an array of coords, such as [1, 3], where a wall can be located. Should be the value returned by pawn.canEvadeWall().
 * @param {Array} boardArray is the board array.
 * @param {Number} wallsLeft is the amount of walls left for the player to use.
 * @returns {Array} a coordinate such as [1, 4] where a wall should be placed horizontally to prevent a block. Returns false if the block cannot be prevented, or if the path cannot be blocked for its location or surrounding walls. 
 */

function preventBlock(location, boardArray, wallsLeft) {

  const coordX = location[0];
  const coordY = location[1];

  const place1 = [coordX, coordY - 3];
  const place2 = [coordX, coordY + 3];

  const freeH = wall.getFreeH(boardArray);

  for (var i = 0; i < freeH.length; i++) {
    if (
      JSON.stringify(freeH[i]) === JSON.stringify(place1) &&
      wallsLeft > 0 &&
      place1[1] > 0 &&
      place1[1] < 16
    ) {
      return place1;
    }
    if (
      JSON.stringify(freeH[i]) === JSON.stringify(place2) &&
      wallsLeft > 0 &&
      place2[1] > 0 &&
      place2[1] < 16
    ) {
      return place2;
    }
  }
  return false;
}

module.exports = preventBlock;
