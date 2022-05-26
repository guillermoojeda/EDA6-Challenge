const getBestMoves = require('../player/getBestMoves');
const getBestMovesAndScores = require('../player/getBestMovesAndScores');
const getAllMovesAndScores = require('../player/getAllMovesAndScores');
const boardSwitcher = require('../board/boardSwitcher');
const getBoardArray = require('../board/getBoardArray');
const scoresOneMoveAhead = require('../simMoves/scoresOneMoveAhead');
const getBestMovesFromSim = require('../player/getBestMovesFromSim');
const scoresMovesAhead = require('../simMoves/scoresMovesAhead');
const getAllMoves = require('../player/getAllMoves');
const enemy = require('../enemy/enemy');
const block = require('../block/block');
const pawn = require('../pawn/pawn');


/**
 * Returns and Array with the corresponding move response. If the first element ois the letter 'h' or 'v', it is not a move, it is a wall placement.
 * @param {Object} turnObject is the turn object received from server.
 * @returns an array with your move, in format [[fromX, fromy], [toX, toY]] 
 */

function turnSolver(turnObject) {
  if (turnObject.event === 'your_turn') {
    var boardString;
    if (turnObject.data.side === 'N') {
      boardString = boardSwitcher(turnObject.data.board);
    } else {
      boardString = turnObject.data.board;
    }
    const boardArray = getBoardArray(boardString);

    // Detect if enemy is blocking my pawn, then counterBlock
    /*

    const blocked = enemy.isBlockingPawn(boardArray, turnObject.data.side)

    if (blocked) {
      console.log('blocked');
      const path = pawn.canEvadeWall(boardArray, blocked);
      if (path) {
        console.log('Attempting to defend path...');
        const hWall = block.preventBlock(path, boardArray, turnObject.data.walls);
        if (hWall) {
          const antiBlock = ['h', hWall[0], hWall[1]];
          return antiBlock;
        }
        console.log('Could not defend path.')
      }
    }
    */


    // alt 1 -- use getBestMoves() -- evalluates only present possiblilities, not futures
    // const bestMoves = getBestMoves(boardArray, turnObject.data.side);

    // alt 2 -- use scoresMovesAhead to get scores, then bestMovesFromSim to get the best moves. Before, we need to make sure that high score moves are a priority...

    // We are using getBestMovesAndScores. If we find any move with a score higher than 64, we are making that move


    const allMoves = getAllMoves(boardArray, turnObject.data.side)

    const bestMoves1a = getAllMovesAndScores(allMoves);

    const bestMoves1 = bestMoves1a.filter((e) => e[2] > 128);

    var chosenMove;

    if (bestMoves1.length > 0) {
      const bestMoves1 = getBestMovesFromSim(bestMoves1a);
      chosenMove = bestMoves1[Math.floor(Math.random() * bestMoves1.length)]
      console.log('Veredict:');
      return chosenMove;
    };



    const moves = scoresMovesAhead(boardArray, turnObject.data.side, 2);

    const bestMoves2 = getBestMovesFromSim(moves);

    /*
    const movesAndScores = scoresOneMoveAhead(boardArray, turnObject.data.side, 1);
    const bestMoves = getBestMovesFromSim(movesAndScores);
    */

    chosenMove = bestMoves2[Math.floor(Math.random() * bestMoves2.length)]
    console.log('Veredict:');
    console.log(chosenMove);

    return chosenMove;
  }
  console.log('Error 75879.');
}

module.exports = turnSolver;

/*
const turnSample = {
  event: "your_turn",
  data: {
    player_2: "uno",
    player_1: "dos",
    score_2: "0.0",
    walls: "10.0",
    score_1: "0.0",
    side: "N",
    remaining_moves: "50.0",
    board: "  N     N     N                                                                                                                                                                                                                                                                   S     S     S  ",
    turn_token: "087920d0-0e6b-4716-9e77-add550a006aa",
    game_id: "ab16e71c-caeb-11eb-975e-0242c0a80004"
  }
}

*/
