const getBoardArray = require('./getBoardArray');

/**
 * Inverts the array of strings.
 * 
 * @param {*} boardArray is a board array. tipically, it should be the array resulting from a simulation
 * @returns the inverted array, where every element is also inverted; i.e. the arrayBoard from the other player´s perspective.
 */

function switchBoardArray(boardArray) {
  var str = boardArray.join('');
  var str = str.split('').reverse().join('');
  const newArray = getBoardArray(str);
  return newArray;
};

module.exports = switchBoardArray;

const sampleBoard =
  [
    '  N              ',
    '                 ',
    '          N      ',
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

// console.log(switchBoardArray(sampleBoard));