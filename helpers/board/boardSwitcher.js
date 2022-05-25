/**
 * Changes the perspective of the board. It takes a STRING.
 * @param {String} boardString is a string, NOT ARRAY, of a board, such as the one that is received from server.
 * @retuns a STRING of the board, in reversed order
 */

function boardSwitcher(boardString) {
  const switched = boardString.split('').reverse().join('');
  return switched;
}

module.exports = boardSwitcher;
