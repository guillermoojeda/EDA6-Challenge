const getBoardArray = require('../helpers/board/board').getBoardArray;
const chai = require('chai');
const expect = chai.expect;
const sampleBoard = require('./sampleBoard');

const correctArray =
  [
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

describe('board.getBoardArray()', () => {
  it('the function should return an Array', () => {
    expect(getBoardArray(sampleBoard)).to.be.an('array');
  })
  it('the sample board provided should match the appropiate pattern', () => {
    expect(getBoardArray(sampleBoard)).to.deep.equal(correctArray);
  })
});
