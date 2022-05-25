const getAllMoves = require('./getAllMoves');
const getMovesScore = require('./getMoveScore');


function getAllMovesAndScores(allMoves) {

  const arr = [...allMoves];
  for (var i = 0; i < arr.length; i++) {
    arr[i].push(getMovesScore(allMoves[i])[2]);
  }

  return arr;

}

module.exports = getAllMovesAndScores;

const sample4 = [
  [[2, 4], [4, 4]],
  [[2, 4], [2, 2]],
  [[2, 4], [0, 4]],
  [[2, 4], [2, 6]]
];

// console.log(getAllMovesAndScores(sample4));


