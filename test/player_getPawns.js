const player = require('../helpers/player/player');
const chai = require('chai');
const expect = chai.expect;

const boardArraySample = [
  '  N        |  N  ', // 0
  '  -*-      *     ', // a
  '           |     ', // 1
  '          N      ', // b
  '                 ', // 2
  '      S          ', // c
  '                 ', // 3
  '            -*-  ', // d
  '                 ', // 4
  '                 ', // e
  '    N            ', // 5
  '                 ', // f
  '           |     ', // 6
  '  -*-      *     ', // g
  '          S|     ', // 7
  '                 ', // h
  '  S              '  // 8
];

const correctAnswer = {
  all: [[0, 2], [0, 14], [3, 10], [5, 6], [10, 4], [14, 10], [16, 2]],
  mine: [[0, 2], [0, 14], [3, 10], [10, 4]],
  enemy: [[5, 6], [14, 10], [16, 2]],
}

describe('player.getPawns()', () => {
  it('Should return the correct answer with the example provided', () => {
    expect(player.getPawns(boardArraySample, 'N')).to.deep.equal(correctAnswer);
  });
});
