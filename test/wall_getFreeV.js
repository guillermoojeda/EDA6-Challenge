const { getFreeV } = require('../helpers/wall/wall');
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
  '  S     S     S  '  // 8
];

const correctAnswer = [

  [1, 1], [1, 5], [1, 7], [1, 9],
  [1, 13], [1, 15], [3, 1], [3, 5],
  [3, 7], [3, 9], [3, 13], [3, 15],
  [5, 1], [5, 3], [5, 5], [5, 7],
  [5, 9], [5, 11], [5, 15], [7, 1],
  [7, 3], [7, 5], [7, 7], [7, 9],
  [7, 11], [7, 15], [9, 1], [9, 3],
  [9, 5], [9, 7], [9, 9], [9, 11],
  [9, 15], [11, 1], [11, 5], [11, 7],
  [11, 9], [11, 13], [11, 15], [13, 1],
  [13, 5], [13, 7], [13, 9], [13, 13],
  [13, 15], [15, 1], [15, 3], [15, 5],
  [15, 7], [15, 9], [15, 13], [15, 15]

]



describe('wall.getFreeV()', () => {
  // ...
  it("getFreeV(arraySampleProvided) should return the corresponding message object", () => {
    expect(getFreeV(boardArraySample)).to.deep.equal(correctAnswer);
  });
});
