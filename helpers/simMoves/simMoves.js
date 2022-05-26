const getResultingBoard = require('./getResultingBoard');
const scoresMovesAhead = require('./scoresMovesAhead');
const scoresOneMoveAhead = require('./scoresOneMoveAhead');
const scoresSecondMoveAhead = require('./scoresSecondMoveAhead');

const simMoves = {
  getResultingBoard,
  scoresMovesAhead,
  scoresOneMoveAhead,
  scoresSecondMoveAhead
};

module.exports = simMoves;
