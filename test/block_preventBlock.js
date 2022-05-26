const block = require('../helpers/block/block');
const chai = require('chai');
const expect = chai.expect;

// 0a1b2c3d4e5f6g7h8
const boardArraySample = [
  '  N     N     N  ', // 0
  '      -*- -*-    ', // a
  '      S     N    ', // 1
  '-*- -*-          ', // b
  'S     N          ', // 2
  '            -*-  ', // c
  '      S         S', // 3
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

1, 5;

describe('block.preventBlock()', () => {
  // ...
  it("block.preventBlock([1, 4], boardArraySample, 6) should return [2, 5]", () => {
    expect(block.preventBlock([1, 4], boardArraySample, 6)).to.deep.equal([1, 1]);
  });
  it("block.preventBlock([1, 14], boardArraySample, 6) should return false", () => {
    expect(block.preventBlock([1, 14], boardArraySample, 6)).to.equal(false);
  });
  it("block.preventBlock([5, 0], arraySampleProvided, 6) should return false", () => {
    expect(block.preventBlock([5, 0], boardArraySample, 6)).to.deep.equal([5, 3]);
  });
  it("block.preventBlock(arraySampleProvided) should return false", () => {
    expect(block.preventBlock([6, 16], boardArraySample, 6)).to.equal(false);
  });
  it("block.preventBlock(arraySampleProvided) should return false", () => {
    expect(block.preventBlock([3, 8], boardArraySample, 6)).to.deep.equal([3, 11]);
  });
})