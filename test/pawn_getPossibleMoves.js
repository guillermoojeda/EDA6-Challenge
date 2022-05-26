const { getPossibleMoves } = require('../helpers/pawn/pawn');
const chai = require('chai');
const expect = chai.expect;

// 0a1b2c3d4e5f6g7h8
const sampleBoardArray = [
  '  N     N     N  ',
  '                 ',
  '  S              ',
  '                 ',
  '        S        ',
  '                 ',
  '      S N S      ',
  '                 ',
  '        S        ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '  S     S     S  '
];

// 0a1b2c3d4e5f6g7h8
const sample2 = [
  '        N        ',
  '            -    ',
  'N           N    ',
  '                 ',
  ' |N              ',
  '                 ',
  '                 ',
  '                 ',
  '                N',
  '                 ',
  '              N| ',
  '                 ',
  '                 ',
  '                 ',
  '          N      ',
  '                 ',
  '        N        '
];

const ans1 = [
  [10, 8], [2, 8],
  [6, 12], [6, 4],
]

describe('getPossibleMoves()', () => {
  // ...
  it("getPossibleMoves([6, 8], sampleBoardArray, 'N') should return the right answer", () => {
    expect(getPossibleMoves([6, 8], sampleBoardArray, 'N')).to.deep.equal(ans1);
  });
  it("however, a pawn of color S at [6, 8] with no adjancent walls or pawns should have no possible moves", () => {
    expect(getPossibleMoves([6, 8], sampleBoardArray, 'S')).to.deep.equal([]);
  });
  it("getPossibleMoves([0, 0], sampleBoardArray) the only one possible move values.", () => {
    expect(getPossibleMoves([0, 0], sampleBoardArray, 'N')).to.deep.equal([[2, 0]]);
  });
  it("getPossibleMoves([0, 2], sampleBoardArray) the only three possible move values.", () => {
    expect(getPossibleMoves([0, 2], sampleBoardArray, 'N')).to.deep.equal([[0, 0], [0, 4], [4, 2]]);
  });
  it("a pawn located at [14, 16] with no adjancent walls or pawns should be able to move only to [16, 16], [14, 14,] or [12, 16].", () => {
    expect(getPossibleMoves([14, 16], sampleBoardArray, 'S')).to.deep.equal([[16, 16], [14, 14,], [12, 16]]);
  });


  describe('In regards to jumping and diagonal jumping', () => {
    // ...
    it("Pawn color N at [2, 2] should not be able to jump to the left, not even in diagonal", () => {
      expect(getPossibleMoves([2, 2], sample2, 'N')).to.deep.equal([[+0, 2], [2, 4]]);
    });
    it("Pawn color N at [8, 14] should not be able to jump to the right, not even in diagonal", () => {
      expect(getPossibleMoves([8, 14], sample2, 'N')).to.deep.equal([[8, 12], [6, 14]]);
    });
    it("Pawn color N at [14, 8] should not be able to jump to the south, not even in diagonal", () => {
      expect(getPossibleMoves([14, 8], sample2, 'N')).to.deep.equal([[14, 6], [12, 8]]);
    });
    it("Pawn color N at [2, 8] should not be able to jump to the north, not even in diagonal", () => {
      expect(getPossibleMoves([2, 8], sample2, 'N')).to.deep.equal([[4, 8], [2, 6], [2, 10]]);
    });
    it("Pawn color S at [4, 12] should be able to performa diagonal jump", () => {
      expect(getPossibleMoves([4, 12], sample2, 'S')).to.deep.equal([[6, 12], [4, 10], [4, 14], [2, 10], [2, 14]]);

    });



  });
});
