const getBestMovesFromSim = require('../helpers/player/getBestMovesFromSim');
const chai = require('chai');
const expect = chai.expect;

// 0a1b2c3d4e5f6g7h8
const simResultSample =
  [
    [[10, 8], [12, 8], -16],
    [[10, 8], [10, 6], -16],
    [[10, 8], [8, 8], -80],
    [[10, 8], [10, 10], -16],
    [[14, 2], [16, 2], -18],
    [[14, 2], [14, 0], -16],
    [[14, 2], [12, 2], -12],
    [[14, 2], [14, 4], -16],
    [[16, 14], [16, 12], -16],
    [[16, 14], [14, 14], -14],
    [[16, 14], [16, 16], -16]
  ];

const sample2 = [
  [[2, 2], [4, 2], -128],
  [[2, 2], [2, 0], 0],
  [[2, 2], [2, 4], 0],
  [[2, 8], [4, 8], -128],
  [[2, 8], [2, 6], 0],
  [[2, 8], [0, 8], 256],
  [[2, 8], [2, 10], 0],
  [[2, 14], [4, 14], -128],
  [[2, 14], [2, 12], 0],
  [[2, 14], [0, 14], 256],
  [[14, 2], [16, 2], -2],
  [[14, 2], [14, 0], 0],
  [[14, 2], [12, 2], 4],
  [[14, 2], [14, 4], 0],
  [[16, 14], [16, 12], 0],
  [[16, 14], [14, 14], 2],
  [[16, 14], [16, 16], 0]
]

describe('getBestMovesFromSim()', () => {
  // ...
  it("getBestMovesFromSim(sampleProvided) should return the move with the highest score, that is [ [ [ 14, 2 ], [ 12, 2 ] ] ]", () => {
    expect(getBestMovesFromSim(simResultSample)).to.deep.equal([[[14, 2], [12, 2]]]);
  });
  it("Should return the best moves only, for sample2", () => {
    expect(getBestMovesFromSim(sample2)).to.deep.equal([[[2, 8], [0, 8]], [[2, 14], [0, 14]]]);
  });
})

// expect([1, 2, 3]).to.include(2);
