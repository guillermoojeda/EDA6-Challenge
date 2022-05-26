const chai = require('chai');
const { getResultingBoard } = require('../helpers/simMoves/simMoves')

const expect = chai.expect;

const sampleBoardArray = [
  '  N     N     N  ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '  S     S     S  '
];

const resultingArray = [
  '  N     N     N  ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '  S              ',
  '                 ',
  '        S     S  '
]

describe('simMoves.getResultingBoard()', () => {
  it('the function should return the corresponding board', () => {
    expect(getResultingBoard(sampleBoardArray, [[16, 2], [14, 2]])).to.deep.equal(resultingArray);
  })
})