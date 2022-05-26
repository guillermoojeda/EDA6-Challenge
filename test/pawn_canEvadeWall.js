const pawn = require('../helpers/pawn/pawn');
const expect = require('chai').expect;

const sample = [
  '  N     N  |  N  ', // 0
  '  -*-      *     ', // a
  '    N      |     ', // 1
  '                 ', // b
  '                 ', // 2
  '      S     -*-  ', // c
  '            S    ', // 3
  '                 ', // d
  '                 ', // 4
  '                 ', // e
  '    N            ', // 5
  '                 ', // f
  '           |     ', // 6
  '  -*-      *     ', // g
  '          S|     ', // 7
  '                 ', // h
  '  S     S     S  '  // 8
];

const ans1 = [1, 6];
const ans2 = [4, 10];

describe('pawn.canEvadeWall()', () => {
  it('With the first example, should return  [0,6]', () => {
    expect(pawn.canEvadeWall(sample, [2, 4])).to.deep.equal([1, 6]);
  });
  it('With the second example, should return [,6]', () => {
    expect(pawn.canEvadeWall(sample, [6, 12])).to.deep.equal([5, 10]);
  });
});
