const { getWallSlots } = require('../helpers/wall/wall');
const chai = require('chai');
const expect = chai.expect;

// 0a1b2c3d4e5f6g7h8
const boardArraySample = [
  '  N     N  |  N  ', // 0
  '  -*-      *     ', // a
  '           |     ', // 1
  '          N      ', // b
  '                 ', // 2
  '      S          ', // c
  '            -*-  ', // 3
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


const correctAnswer = [
  [0, 11], [1, 2],
  [1, 3], [1, 4],
  [1, 11], [2, 11],
  [6, 12], [6, 13],
  [6, 14], [12, 11],
  [13, 2], [13, 3],
  [13, 4], [13, 11],
  [14, 11]
];

describe('getWallSlots()', () => {
  // ...
  it("getWallSlots(arraySampleProvided) should return the corresponding message object", () => {
    expect(getWallSlots(boardArraySample)).to.deep.equal(correctAnswer);
  });
});
