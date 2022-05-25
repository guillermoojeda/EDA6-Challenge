const getAllMoves = require('./getAllMoves');

/**
* Returns an array with the best moves. The array will contain only one move if there is no tie.
 * 
 * @param {Array} boardArray is the array that represents the board.
 * @param {String} playerColor is a string that accepts only "N" or "S", depending player´s location on board.
 * @returns an array with the best possible moves, with format [[x, y][toX, toY]],
 */
function getBestMoves(boardArray, playerColor) {

  const allMovesAndScores = getAllMoves(boardArray, playerColor);

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

  return bestMoves.moves;
}

const sampleBoardArray = [
  '  N     N     N  ',
  '                 ',
  '  S              ',
  '                 ',
  '        S        ',
  '                 ',
  '      S N S      ',
  '                 ',
  '        S        ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '  S     S     S  '
];

getBestMoves(sampleBoardArray, "N");
// console.log(JSON.stringify(getBestMoves(sampleBoardArray, "N"), null, 2));

module.exports = getBestMoves;