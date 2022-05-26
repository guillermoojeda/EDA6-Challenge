const pawnMoves = require('./pawnMoves');
const movePawn = require('./movePawn');
const getPossibleMoves = require('./getPossibleMoves');
const canEvadeWall = require('./canEvadeWall');

const pawn = {
  pawnMoves,
  movePawn,
  getPossibleMoves,
  canEvadeWall,
}

module.exports = pawn;