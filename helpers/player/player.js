const getAllMoves = require('./getAllMoves');
const getAllMovesAndScores = require('./getAllMovesAndScores');
const getBestMoves = require('./getBestMoves');
const getBestMovesAndScores = require('./getBestMovesAndScores');
const getBestMovesFromSim = require('./getBestMovesFromSim');
const getMovesScores = require('./getMoveScore');

const player = {
  getAllMoves,
  getAllMovesAndScores,
  getBestMoves,
  getBestMovesAndScores,
  getBestMovesFromSim,
  getMovesScores,
}

module.exports = player;
