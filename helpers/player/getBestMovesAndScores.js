const getAllMoves = require('../player/getAllMoves');

/**
 * Returns an object with {bestMoves: [Array], score: Integer}
 * 
 * @param {Array} currentBoard is the board that results before opponent´s best move;
 * @param {String} playerColor is the current player´s color, the player using this algorithm.

 */

function scoresSecondMoveAhead(currentBoard, playerColor) {

  // create the initial table of moves and scores
  // We create the base skeleton for the answer: 

  const allMovesAndScores = getAllMoves(currentBoard, playerColor);

  const bestMoves = {
    score: -Infinity,
    moves: []
  };

  for (var i = 0; i < allMovesAndScores.length; i++) {
    if (allMovesAndScores[i][2] > bestMoves.score) {
      bestMoves.score = allMovesAndScores[i][2];
      bestMoves.moves = [[allMovesAndScores[i][0], allMovesAndScores[i][1]]];
    } else if (allMovesAndScores[i][2] === bestMoves.score) {
      bestMoves.moves.push([allMovesAndScores[i][0], allMovesAndScores[i][1]]);
    }
  }

  return bestMoves;
};

module.exports = scoresSecondMoveAhead;



