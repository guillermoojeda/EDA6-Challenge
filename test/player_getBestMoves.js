const getBestMoves = require('./../helpers/player/getBestMoves');
const chai = require('chai');
const expect = chai.expect;

// 0a1b2c3d4e5f6g7h8
const sampleBoardArray = [
  '  N     N     N  ',
  '                 ',
  '                 ',
  '                 ',
  '        N        ',
  '                 ',
  '  S   N S N      ',
  '                 ',
  '        N     S  ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '  S     S     S  '
];


const sample2 = [
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '              S  ',
  '                 ',
  '                 ',
  '                 ',
  '              N  ',
  '                 ',
  '        S        ',
  '                 ',
  '  N     N        ',
  '                 ',
  '                 '
];

describe('getBestMoves()', () => {
  // ...
  it("getBestMoves(sampleBoardArray, 'S') should return [ [ 6, 8 ], [ 2, 8 ] ]", () => {
    expect(getBestMoves(sampleBoardArray, 'S')).to.deep.equal([[[6, 8], [2, 8]]]);
  });
  it("getBestMoves(sample2, 'N') should return [ [ 10, 14 ], [ 8, 14 ] ] even when that will benefit the oponent in the next turn.", () => {
    expect(getBestMoves(sample2, 'N')).to.deep.equal([[[10, 14], [8, 14]]]);
  });
})