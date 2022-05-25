/**
 * 
 * @param {Array} move is an array with two arrays that corresponds to from/to coordinates, such as [[4, 6], [6, 6]]
 * @returns an the same array move, with the score that the move yields.
 */

function getMoveScore(move) {
  // Enter distances 2 on 2, they are converted to 1 on 1 during the process!!, before reversing due to player perspective!!
  // Calculated from south player perspective!!

  var toX = move[1][0];
  var fromX = move[0][0];

  toX = toX / 2;
  fromX = fromX / 2;

  const currentMove = [...move]

  if (fromX === toX) {
    currentMove.push(0);
    return currentMove;
  }
  if (toX - fromX === -1) {
    const distFromOrigin = 8 - toX;
    const yield = 2 ** distFromOrigin;
    currentMove.push(yield);
    return currentMove;
  }
  if (toX - fromX === -2) {
    const distFromOrigin = 8 - toX;
    const yield1 = 2 ** distFromOrigin;
    const yield2 = 2 ** (distFromOrigin - 1);
    currentMove.push(yield1 + yield2);
    return currentMove;
  }
  if (toX - fromX === 1) {
    const distFromOrigin = 8 - fromX;
    const yield = 2 ** distFromOrigin;
    currentMove.push(- yield);
    return currentMove;
  }
  if (toX - fromX === 2) {
    const distFromOrigin = 8 - fromX;
    const yield1 = 2 ** distFromOrigin;
    const yield2 = 2 ** (distFromOrigin - 1);
    currentMove.push(- (yield1 + yield2));
    return currentMove;
  }

}

module.exports = getMoveScore;
