/**
 * Returns the best move from an array of possible moves from a table of moves with their moves included.
 * 
 * @param {*} simResult is an array with the format from the result of scoresMovesAhead() of scoresOneMovesAhead()
 */

function getBestMovesFromSim(simResult) {

  const bestMoves = {
    score: -Infinity,
    moves: []
  };

  for (var i = 0; i < simResult.length; i++) {
    if (simResult[i][2] > bestMoves.score) {
      bestMoves.score = simResult[i][2];
      bestMoves.moves = [[simResult[i][0], simResult[i][1]]];
    } else if (simResult[i][2] === bestMoves.score) {
      bestMoves.moves.push([simResult[i][0], simResult[i][1]]);
    }
  }

  return bestMoves.moves;
}

const simResultSample =
  [
    [[10, 8], [12, 8], -16],
    [[10, 8], [10, 6], -16],
    [[10, 8], [8, 8], -80],
    [[10, 8], [10, 10], -16],
    [[14, 2], [16, 2], -18],
    [[14, 2], [14, 0], -16],
    [[14, 2], [12, 2], -12],
    [[14, 2], [14, 4], -16],
    [[16, 14], [16, 12], -16],
    [[16, 14], [14, 14], -14],
    [[16, 14], [16, 16], -16]
  ];


module.exports = getBestMovesFromSim;