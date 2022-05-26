const enemy = require('../helpers/enemy/enemy');
const chai = require('chai');
const expect = chai.expect;

// 0a1b2c3d4e5f6g7h8
const sample = [
  '  N     N  |  N  ', // 0
  '  -*-      *     ', // a
  '    S      |     ', // 1
  '            -*-  ', // b
  '            N S  ', // 2
  '      N          ', // c
  '                 ', // 3
  '            -*-  ', // d
  '                 ', // 4
  '                 ', // e
  '    N            ', // 5
  '                 ', // f
  '           |     ', // 6
  '  -*-      *     ', // g
  '  S        |     ', // 7
  '                 ', // h
  '  S     S     S  '  // 8
]

const ans1 = [
  [2, 4], [4, 14]
]

describe('enemy.isBlockingPawn()', () => {
  // ...
  it("enemy.isBlockingPawn(arraySampleProvided) should return the corresponding message object", () => {
    expect(enemy.isBlockingPawn(sample, 'S')).to.deep.equal(ans1);
  });
  it("enemy.isBlockingPawn(arraySampleProvided) should return the corresponding message object", () => {
    expect(enemy.isBlockingPawn(sample, 'S')).to.deep.equal(ans1);
  });
});
