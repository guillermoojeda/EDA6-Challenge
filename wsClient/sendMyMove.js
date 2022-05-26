const turnSolver = require('../helpers/turnSolver/turnSolver');
const sendMyWall = require('./sendMyWall');

/**
 * Calls turn solver, reverses coordinates if corresponds due to player´s perspective, and divides coordinates by 2 to match the requirements of server.
 * 
 * @param {*} obj is the turn object
 * @returns the response object, ready to send to server.
 */

function sendMyMove(obj) {


  const move = turnSolver(obj);

  // handling wall

  try {
    if (move[0] === 'h' || move[0] === 'v') {

      /* ... send my wall here ... */
      const wallResp = sendMyWall(move, obj);

      return wallResp;

    }
  } catch (e) {
    console.log(e);
  }

  // end of handling wall



  var fromX = move[0][0] / 2;
  var fromY = move[0][1] / 2;
  var toX = move[1][0] / 2;
  var toY = move[1][1] / 2;

  if (obj.data.side === 'N') {

    function alt(coord) {

      const newCoord = (coord - 8) * -1;
      return newCoord
    }

    fromX = alt(fromX);
    fromY = alt(fromY);
    toX = alt(toX);
    toY = alt(toY);
  }

  console.log(`Veredict: from ${fromX}, ${fromY} to ${toX}, ${toY}`);

  const resp = {
    action: "move",
    data: {
      game_id: obj.data.game_id,
      turn_token: obj.data.turn_token,
      from_row: fromX,
      from_col: fromY,
      to_row: toX,
      to_col: toY,
    }
  }
  return resp
}

module.exports = sendMyMove;
