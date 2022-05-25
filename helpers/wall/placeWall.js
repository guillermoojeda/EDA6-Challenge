/**
 * Creates a wall in the board. Returns a message object
 * 
 * @param { array } coords as an array of coords, ex: [3, 6].
 * @param { string } or is the orientation, must be "h" or "v".
 * @param { string } game_id is the corresponding game id.
 */


function placeWall(coords, direction, game_id) {

  const message = {
    action: "wall",
    data: {
      game_id: game_id,
      row: coords[0],
      col: coords[1],
      direction: direction,
    }
  }
  return message;

};

module.exports = placeWall