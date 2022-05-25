const scoresOneMovesAhead = require('./scoresMovesAhead');
const getBestMovesAndScores = require('../player/getBestMovesAndScores');

/**
 * Returns an object with {bestMoves: [Array], score: Integer}
 * 
 * @param {Array} currentBoard is the board that results before opponent´s best move;
 * @param {String} playerColor is the current player´s color, the player using this algorithm.
 
 */

function scoresSecondMoveAhead(currentBoard, playerColor) {

  // create the initial table of moves and scores
  // We create the base skeleton for the answer: 

  const afterEnemyScores = scoresOneMovesAhead(currentBoard, playerColor, 1)

  for (var i = 0; i < afterEnemyScores.length; i++) {



  }

  const bestMoves = getBestMovesAndScores(currentBoard, playerColor);

  return afterEnemyScores;
};

module.exports = scoresSecondMoveAhead;


