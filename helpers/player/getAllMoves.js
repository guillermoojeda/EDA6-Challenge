const getPossibleMoves = require('../pawn/getPossibleMoves');
const pawn = require('../pawn/pawn');
const getMoveScore = require('./getMoveScore');



/**
 * Returns an array with the best moves. The array will contain only one move if there is no tie.
 * 
 * @param {Array} boardArray is the array that represents the board.
 * @param {String} playerColor is a string that accepts only "N" or "S", depending player´s location on board.
 * @returns an array with the best possible moves, with format [[x, y][toX, toY]],
 */
function getAllMoves(boardArray, playerColor) {

  var allMovesAndScores = [];
  var scores = [];

  for (var i = 0; i < boardArray.length; i++) {
    for (var j = 0; j < boardArray.length; j++) {
      if (boardArray[i][j] === playerColor) {
        var moves = pawn.getPossibleMoves([i, j], boardArray, playerColor);
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

  return allMovesAndScores;
}

module.exports = getAllMoves;