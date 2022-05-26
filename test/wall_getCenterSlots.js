const { getCenterWallSlots } = require('../helpers/wall/wall');
const chai = require('chai');
const expect = chai.expect;

// 0a1b2c3d4e5f6g7h8
const boardArraySample = [
  '  N     N     N  ', // 0
  '           |     ', // a
  '  -*-      *     ', // 1
  '          N|     ', // b
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
]

const correctAnswer = [[2, 3],
[2, 11], [7, 13],
[13, 3], [13, 11]
];



describe('wall.getCenterWallSlots()', () => {
  // ...
  it("getCenterWallSlots(arraySampleProvided) should return the corresponding message object", () => {
    expect(getCenterWallSlots(boardArraySample)).to.deep.equal(correctAnswer);
  });
})