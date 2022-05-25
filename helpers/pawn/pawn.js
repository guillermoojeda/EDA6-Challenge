const pawnMoves = require('./pawnMoves');
const movePawn = require('./movePawn');
const getPossibleMoves = require('./getPossibleMoves');

const pawn = {
  pawnMoves,
  movePawn,
  getPossibleMoves
}

module.exports = pawn;