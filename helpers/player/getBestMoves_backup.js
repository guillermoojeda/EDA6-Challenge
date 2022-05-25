const getPossibleMoves = require('../pawn/getPossibleMoves');
const getMoveScore = require('./getMoveScore');

/**
 * Returns an array with the best moves. The array will contain only one move if there is no tie.
 * 
 * @param {Array} boardArray is the array that represents the board.
 * @param {String} playerColor is a string that accepts only "N" or "S", depending player´s location on board.
 * @returns an array with the best possible moves, with format [[x, y][toX, toY]],
 */
function getBestMoves(boardArray, playerColor) {

  var allMovesAndScores = [];
  var scores = [];

  for (var i = 0; i < boardArray.length; i++) {
    for (var j = 0; j < boardArray.length; j++) {
      if (boardArray[i][j] === playerColor) {
        var moves = getPossibleMoves([i, j], boardArray);
        var allMoves = moves.map(move => [[i, j], move]);
        // console.log(allMoves);
        const movesAndScores = allMoves.map(move => {
          const score = getMoveScore(move);
          move.push(score[2]);
          return move;
        }); // movesAndScores will be the corresponding moves and score for one pawn;
        // console.log(movesAndScores);
        allMovesAndScores = [...allMovesAndScores, ...movesAndScores];
      }
    }
  }

  // allMovesAndScores has all possible moves and scores

  // bestMoves is created using memorization.
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

// getBestMoves(sampleBoardArray, "N");
// console.log(JSON.stringify(getBestMoves(sampleBoardArray, "N"), null, 2));

module.exports = getBestMoves;