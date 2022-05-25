const getAllMoves = require('../player/getAllMoves');
const getPossibleMoves = require('../pawn/getPossibleMoves');
const getResultingBoard = require('./getResultingBoard');
const switchBoardArray = require('../board/switchBoardArray');
const printBoard = require('../board/printBoard')

/**
 * 
 * @param {Array} currentBoard in boardArray format;
 * @param {String} playerColor is the current player´s color, the player using this algorithm.
 * @param {Number} currentTurnAhead the turn that is being calculated, only to know if the optimal scores should be possitive or negative must be an integer.
 * @param {*} turnsAhead is the amount of calculations of turns ahead. A value of 0 should make this function return the same value as getBestMoves() (or is it getAllMoves?);
 * @param {*} inputMoveList is the list used in recursion case only that includes [move, moveScore, cummulatedMoveScore];
 */
function scoresMovesAhead(currentBoard, playerColor, turnsAhead = 0, currentTurnAhead = 0, inputMoveList = []) {

  // baseCase, when currentTurnAhead = turnsAhead;
  // console.log(currentBoard);

  // create the initial table of moves and scores
  var thisTurnAllMovesAndScores;



  // We return getAllMoves when turnsAhead === 0 and do not enter recursion.
  if (turnsAhead === 0) {
    return getAllMoves(currentBoard, playerColor);
  }

  // We set the base case

  if (turnsAhead === currentTurnAhead) {
    return inputMoveList;
  }

  // RECURSION CASE

  // calculate every possible move for this turn if the table is not created, that is if inputMoveList is empty.
  if (JSON.stringify(inputMoveList) === JSON.stringify([])) {
    thisTurnAllMovesAndScores = getAllMoves(currentBoard, playerColor);


    // The thing is... we need the table with all scores set to "zero", so we are not using "getAllMoves()".

    var movesTable = [];

    for (var i = 0; i < currentBoard.length; i++) {
      for (var j = 0; j < currentBoard.length; j++) {
        if (currentBoard[i][j] === playerColor) {
          var moves = getPossibleMoves([i, j], currentBoard, playerColor);
          var allMoves = moves.map(move => [[i, j], move]);
          // we use 0 instead of getMoveScore()
          const movesAndZeroes = allMoves.map(move => {
            // const score = getMoveScore(move);
            // move.push(score[2]);
            move.push(0)
            return move;
          }); // movesAndScores will be the corresponding moves and score for one pawn;

          // console.log(movesAndScores);

          movesTable = [...movesTable, ...movesAndZeroes];

        }
      }
    }

    // console.log('');
    // console.log('movesTable is:');
    // console.log(movesTable);

  } else {
    // however, if it is created, assign the corresponding value:
    thisTurnAllMovesAndScores = inputMoveList;
  }


  // So, we have taken care of thisTurnAllMovesAndScores.

  const newCurrentTurnAhead = currentTurnAhead + 1;

  // get corresponding iteration color
  var iterationPlayerColor = playerColor;
  if (newCurrentTurnAhead % 2 !== 0) {
    if (playerColor === 'N') {
      iterationPlayerColor = 'S'
    }
    if (playerColor === 'S') {
      iterationPlayerColor = 'N'
    }
  }



  // console.log('entro 2')
  for (var i = 0; i < thisTurnAllMovesAndScores.length; i++) {

    // console.log('entro 3')
    // Simular tablero for each move
    var newBoard = getResultingBoard(currentBoard, [thisTurnAllMovesAndScores[i][0], thisTurnAllMovesAndScores[i][1]]);

    if (i !== 18) {
      const refString = '0a1b2c3d4e5f6g7h8';
      const boardArr = newBoard;
      /*
      console.log(`  ${refString}  `)
      console.log(' ')
      for (var j = 0; j < boardArr.length; j++) {
        thisRow = `${refString[j]} ${boardArr[j]} ${refString[j]}`;
        console.log(thisRow);
      }
      console.log(' ')
      console.log(`  ${refString}  `)
      */
    }
    // console.log(newBoard);
    // Hasta acá OK.

    // If it corresponds, invert the board to iterationPlayer´s perspective. 

    var perspectiveBoard;

    /*
    if (iterationPlayerColor === 'N') {
      perspectiveBoard = switchBoardArray(newBoard);
    } else {
      perspectiveBoard = newBoard;
    }
    */

    perspectiveBoard = switchBoardArray(newBoard);

    if (i !== 18) {
      const refString = '0a1b2c3d4e5f6g7h8';
      const boardArr = perspectiveBoard;
      /*
      console.log(`  ${refString}  `)
      console.log(' ')
      for (var j = 0; j < boardArr.length; j++) {
        thisRow = `${refString[j]} ${boardArr[j]} ${refString[j]}`;
        console.log(thisRow);
      }
      console.log(' ')
      console.log(`  ${refString}  `)
      */
    }



    /*
    if (newCurrentTurnAhead > 0 && playerColor === 'N') {
      newBoard = switchBoardArray(newBoard);
    }
    */

    // Simulate each possible move at this yet-to-happen board
    const instancePossibleMoves = getAllMoves(perspectiveBoard, iterationPlayerColor)
    // console.log(instancePossibleMoves);

    // get best score of instancePossibleMoves

    const instanceBestMoves = {
      score: -Infinity,
      moves: []
    };

    for (var j = 0; j < instancePossibleMoves.length; j++) {
      if (instancePossibleMoves[j][2] > instanceBestMoves.score) {
        instanceBestMoves.score = instancePossibleMoves[j][2];
        instanceBestMoves.moves = [[instancePossibleMoves[j][0], instancePossibleMoves[j][1]]];
      } else if (instancePossibleMoves[j][2] === instanceBestMoves.score) {
        instanceBestMoves.moves.push([instancePossibleMoves[j][0], instancePossibleMoves[j][1]]);
      }
    }


    // we are interested only in the best score for this instance,that is instancem so we consider the score to be added or substracted depending who´s turn we are simulating: player or opponent.



    if (instanceBestMoves.score !== -Infinity) {
      // console.log(thisTurnAllMovesAndScores[i])
      thisTurnAllMovesAndScores[i][2] -= instanceBestMoves.score;
    }

    // Hasta acá todo OK

    // we have just substracted, for each possible move from the players turn, the score of the opponent best possible move after said palayer´s move.

    // Now, the recursion case. We are doing only the best cases, since it is hard to predict which move is taking place exactly

    // console.log(' ');
    // console.log('<--------------------------------------- instanceBestMoves');
    // console.log(instanceBestMoves.moves);

    /*
    if
    for (var i = 0; i < instanceBestMoves.moves.length; i++) {

      }
      */





    // In base case, we do nothing.



  }



  const allMovesAndScores = getAllMoves(currentBoard, playerColor);

  // if I do not want to calculate any amount of turns ahead
  if (turnsAhead === 0 && currentTurnAhead === 0) {

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

    // console.log('here <-----------------------');
    // console.log(allMovesAndScores);

    // shold actually return moveListSoFar, with the appended new values, so;
    // should append the stuff.

    return allMovesAndScores; //bestMoves or allMoves??

    // return bestMoves.moves;

  }

  // Answer should be returned only at the top level of the recursion, once in depth level have been explored. So:

  if (currentTurnAhead === 0) {
    return thisTurnAllMovesAndScores;
  }


  // Not sure if I should work with getAllMoves or getBestMoves...
  /*getAllMoves format is:
[
  [ [ 14, 2 ], [ 16, 2 ], -2 ],
  [ [ 14, 2 ], [ 14, 0 ], 0 ],
  [ [ 14, 2 ], [ 12, 2 ], 4 ],
  [ [ 14, 2 ], [ 14, 4 ], 0 ],
  [ [ 16, 8 ], [ 16, 6 ], 0 ],
  [ [ 16, 8 ], [ 14, 8 ], 2 ],
  [ [ 16, 8 ], [ 16, 10 ], 0 ]
]
*/

};

const sampleBoard =
  [
    '  N     N     N  ',
    '                 ',
    '                 ',
    '                 ',
    '                 ',
    '                 ',
    '        N        ',
    '                 ',
    '                 ',
    '                 ',
    '        S        ',
    '                 ',
    '                 ',
    '                 ',
    '  S              ',
    '                 ',
    '              S  '
  ];


// console.log(scoresMovesAhead(sampleBoard, 'S', 0))



module.exports = scoresMovesAhead;



/* 

Breadth first search

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){

  if(this.left !== null){
    array.push(this.left);
  }

  if(this.right !== null){
    array.push(this.right);
  }

  cb(this.value);

  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array);
  }
};

*/

