const turnSolver = require('../helpers/turnSolver/turnSolver');

/**
 * Calls turn solver,  reverses coordinates if corresponds due to player´s perspective and divides coordinates by 2 to match the requirements of server. Corrects the "-1" value for coordinates if our player is 'N',
 * 
 * @param {*} coords is an array consisting of ['h or v', coordX, coordY], that is where to put coordinates from player´s perspective.
 * @returns the response object, ready to send to server.
 */

function sendMyWall(coords) {

  var coordX = coords[1] / 2;
  var coordY = coords[2] / 2;
  var orientation = coords[0]


  if (obj.data.side === 'N') {

    function alt(coord) {

      newCoord = (coord - 8) * -1;
      return newCoord
    }

    coordX = alt(coordX) - 1;
    coordY = alt(coordY) - 1;
  }

  console.log(`Veredict: wall at ${fromX}, ${fromY}`);

  const resp = {
    action: "wall",
    data: {
      game_id: obj.data.game_id,
      turn_token: obj.data.turn_token,
      row: coordX,
      col: coordY,
      orientation: orientation,
      to_row: toX,
      to_col: toY,
    }
  }
  return resp
};
