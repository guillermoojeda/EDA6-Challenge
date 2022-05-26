const getResultingBoard = require('./getResultingBoard');
const switchBoardArray = require('../board/switchBoardArray');

const player = require('../player/player');
const pawn = require('../pawn/pawn');
const board = require('../board/board');

/**
 * 
 * @param {Array} currentBoard in boardArray format;
 * @param {String} playerColor is the current player´s color, the player using this algorithm.
 * @param {Number} currentTurnAhead the turn that is being calculated, only to know if the optimal scores should be possitive or negative must be an integer.
 * @param {*} turnsAhead is the total amount of calculations of turns ahead, with respect turn zero being the one that is taking place in reality, not simulation. A value of 0 should make this function return the same value as getAllMoves();
 * @param {*} inputMoveList is the list used in recursion case only that includes [move, moveScore, cummulatedMoveScore];
 */
function scoresMovesAhead(currentBoard, playerColor, turnsAhead = 0, currentTurnAhead = 0, inputMoveList = [], moveUnderEval = 0) {

  // create the initial table of moves and scores
  // We create the base skeleton for the answer: 

  var thisTurnAllMovesAndScores;

  if (JSON.stringify(inputMoveList) === JSON.stringify([])) {
    thisTurnAllMovesAndScores = player.getAllMoves(currentBoard, playerColor);
  } else {
    thisTurnAllMovesAndScores = inputMoveList;
  }

  // We return getAllMoves when turnsAhead === 0 and do not enter recursion.
  if (turnsAhead === 0) {
    return thisTurnAllMovesAndScores;
  }

  // BASE CASE
  if (currentTurnAhead === turnsAhead) {
    return; // stops recursion on this branch and does nothing;
  }

  // RECURSION CASE

  // for each possible move

  for (var i = 0; i < thisTurnAllMovesAndScores.length; i++) {

    // determine which move, after the original one, we are calculating
    const newCurrentTurnAhead = currentTurnAhead + 1;

    // -- simulate a new resulting board
    const newBoard = getResultingBoard(currentBoard, thisTurnAllMovesAndScores[i]);

    // -- Determine player color -- get corresponding iteration player color
    var iterationPlayerColor = playerColor;
    if (newCurrentTurnAhead % 2 !== 0) {
      if (playerColor === 'N') {
        iterationPlayerColor = 'S'
      }
      if (playerColor === 'S') {
        iterationPlayerColor = 'N'
      }
    }

    // -- in this resulting board, get the best move (for the other player)
    //    we will need to reverse the perspective.

    const switchedBoard = board.switchBoardArray(newBoard);

    // get the best move for the iteration.

    const iterationBestMove = player.getBestMoves(switchedBoard, iterationPlayerColor)[0];

    // get the score for the corresponding move;

    const iterationScore = player.getMoveScores(iterationBestMove)[2];

    // -- if it is enemy, substract best score to corresponding move. Else, add it.

    if (playerColor === iterationPlayerColor) {
      thisTurnAllMovesAndScores[i][2] += iterationScore;
    } else {
      thisTurnAllMovesAndScores[i][2] -= iterationScore;

      // Only needed for two turns simulation, simulate the board after enemy´s movement

      if (turnsAhead === 2) {
        const boardAfterEnemyMove = getResultingBoard(switchedBoard, iterationBestMove);

        // Only needed for two turns simulation, get the third move (second move after the original)

        const boardAfterEnemyMove2 = board.switchBoardArray(boardAfterEnemyMove);

        const afterEnemyBestMoves = player.getBestMovesAndScores(boardAfterEnemyMove2, playerColor);

        // thisTurnAllMovesAndScores[i].push(afterEnemyBestMoves.score);

        thisTurnAllMovesAndScores[i][2] += afterEnemyBestMoves.score;

      }
    }


    // call recursion.

    scoresMovesAhead(switchedBoard, iterationPlayerColor, turnsAhead, newCurrentTurnAhead, thisTurnAllMovesAndScores, i);

  }

  // console.log(thisTurnAllMovesAndScores);

  return thisTurnAllMovesAndScores;
};

module.exports = scoresMovesAhead;



