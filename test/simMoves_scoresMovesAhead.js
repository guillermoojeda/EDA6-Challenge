const chai = require('chai');
const { scoresMovesAhead } = require('../helpers/simMoves/simMoves');

const expect = chai.expect;

const sampleBoard =
  [
    '  N           N  ',
    '                 ',
    '                 ',
    '                 ',
    '                 ',
    '                 ',
    '        N        ',
    '                 ',
    '                 ',
    '                 ',
    '        S        ',
    '                 ',
    '                 ',
    '                 ',
    '  S              ',
    '                 ',
    '              S  '
  ];

const sample2 =
  [
    '                 ',
    '                 ',
    '  S     S     S  ',
    '                 ',
    '                 ',
    '                 ',
    '  N     N     N  ',
    '                 ',
    '                 ',
    '                 ',
    '                 ',
    '                 ',
    '                 ',
    '                 ',
    '  S              ',
    '                 ',
    '              S  '
  ];

const sample3 = [
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

const sample4 = [
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '              N  ',
  '                 ',
  '                 ',
  '                 ',
  '              S  ',
  '                 ',
  '        N        ',
  '                 ',
  '  S     S        ',
  '                 ',
  '                 '
];

const sample5 = [
  '                N',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '                 ',
  '  -*- -*-        ',
  '        S        ',
  '                 ',
  '                 ',
  '  -*- -*-        ',
  '                 ',
  '                 ',
  '                 '
];

const sample6 = [
  '              N N',
  '                 ',
  '    S            ',
  '                 ',
  '   |             ',
  '   *             ',
  '   |             ',
  '                 ',
  '                 ',
  '                 ',
  '                S',
  '                 ',
  '                 ',
  '                 ',
  '             N   ',
  '                 ',
  '             S   '
];

// 10, 16 to 8, 16

const ans0 = [
  [[10, 8], [12, 8], -8],
  [[10, 8], [10, 6], 0],
  [[10, 8], [8, 8], 16],
  [[10, 8], [10, 10], 0],
  [[14, 2], [16, 2], -2],
  [[14, 2], [14, 0], 0],
  [[14, 2], [12, 2], 4],
  [[14, 2], [14, 4], 0],
  [[16, 14], [16, 12], 0],
  [[16, 14], [14, 14], 2],
  [[16, 14], [16, 16], 0]
];

const ans1 = [
  [[10, 8], [12, 8], -24],
  [[10, 8], [10, 6], -16],
  [[10, 8], [8, 8], -32],
  [[10, 8], [10, 10], -16],
  [[14, 2], [16, 2], -18],
  [[14, 2], [14, 0], -16],
  [[14, 2], [12, 2], -12],
  [[14, 2], [14, 4], -16],
  [[16, 14], [16, 12], -16],
  [[16, 14], [14, 14], -14],
  [[16, 14], [16, 16], -16]
];

const ans2 = [
  [[2, 2], [4, 2], -144],
  [[2, 2], [2, 0], -16],
  [[2, 2], [0, 2], 240],
  [[2, 2], [2, 4], -16],
  [[2, 8], [4, 8], -144],
  [[2, 8], [2, 6], -16],
  [[2, 8], [0, 8], 240],
  [[2, 8], [2, 10], -16],
  [[2, 14], [4, 14], -144],
  [[2, 14], [2, 12], -16],
  [[2, 14], [0, 14], 240],
  [[2, 14], [2, 16], -16],
  [[14, 2], [16, 2], -18],
  [[14, 2], [14, 0], -16],
  [[14, 2], [12, 2], -12],
  [[14, 2], [14, 4], -16],
  [[16, 14], [16, 12], -16],
  [[16, 14], [14, 14], -14],
  [[16, 14], [16, 16], -16]
];

const ans3 = [
  [[10, 14], [12, 14], -392],
  [[10, 14], [10, 12], -384],
  [[10, 14], [8, 14], -368],
  [[10, 14], [10, 16], -384],
  [[14, 2], [16, 2], -386],
  [[14, 2], [14, 0], -384],
  [[14, 2], [12, 2], -380],
  [[14, 2], [14, 4], -384],
  [[14, 8], [16, 8], -130],
  [[14, 8], [14, 6], -128],
  [[14, 8], [14, 10], -128],
  [[14, 8], [10, 8], -116]
];

const ans5 = [
  [[10, 8], [12, 8], -2],
  [[10, 8], [10, 6], -2],
  [[10, 8], [10, 10], 14]
]

describe('simMoves.scoresMovesAhead()', () => {
  it('With the example sampleBoard, scoresMovesAhead(sampleBoard, "S") should return an array like ans0', () => {
    expect(scoresMovesAhead(sampleBoard, 'S')).to.deep.equal(ans0);
  });
  it('Howerver, with sampleBoard, scoresMovesAhead(sampleBoard, "S", 1) should return an array like ans1', () => {
    expect(scoresMovesAhead(sampleBoard, 'S', 1)).to.deep.equal(ans1);
  });

  it('With the second example, scoresMovesAhead(sampleBoard, "S") should return an array like ans2', () => {
    expect(scoresMovesAhead(sample2, 'S', 1)).to.deep.equal(ans2);
  });
  it('With the third example, scoresMovesAhead(sampleBoard, "N") should return an array like ans3', () => {
    expect(scoresMovesAhead(sample3, 'N', 1)).to.deep.equal(ans3);
  });
  it('With the fouth example, scoresMovesAhead(sampleBoard, "S") should return an array like ans3, thus making sure that the algorithm is working correctly when currentPlayer is "N" or "S"', () => {
    expect(scoresMovesAhead(sample4, 'S', 1)).to.deep.equal(ans3);
  });
  it('If this works I am gonna have a coca-cola.', () => {
    expect(scoresMovesAhead(sample5, 'S', 2)).to.deep.equal(ans5);
  });

});

