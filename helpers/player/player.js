const getAllMoves = require('./getAllMoves');
const getAllMovesAndScores = require('./getAllMovesAndScores');
const getBestMoves = require('./getBestMoves');
const getBestMovesAndScores = require('./getBestMovesAndScores');
const getBestMovesFromSim = require('./getBestMovesFromSim');
const getMoveScores = require('./getMoveScore');
const getPawns = require('./getPawns');

const player = {
  getAllMoves,
  getAllMovesAndScores,
  getBestMoves,
  getBestMovesAndScores,
  getBestMovesFromSim,
  getMoveScores,
  getPawns,
}

module.exports = player;
