
/**
 * Creates a message object wuth the cooresponding "move" info.
 * 
 * @param {Array} fromCoords an array of numbers such as [3, 4].
 * @param {Array} toCoords an array of numbers such as [4, 4].
 * @param {string} gameId a string corresponding to the game Id.
 * @param {string} turnToken a string contiaining the game token.
 */
function movePawn(fromCoords, toCoords, gameId, turnToken) {
  const message = {
    action: "move",
    data: {
      game_id: gameId,
      turn_token: turnToken,
      from_row: fromCoords[0],
      from_col: fromCoords[1],
      to_row: toCoords[0],
      to_col: toCoords[1],
    }
  }

  return message;

}

module.exports = movePawn;
