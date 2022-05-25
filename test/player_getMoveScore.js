const getMoveScore = require('../helpers/player/getMoveScore');
const chai = require('chai');
const expect = chai.expect;

describe('getMoveScore()', () => {
  // ...
  it("getMoveScore([[12, 4], [8, 4]]) should return 24, appended to the array", () => {
    expect(getMoveScore([[12, 4], [8, 4]])).to.deep.equal([[12, 4], [8, 4], 24]);
  });
  it("getMoveScore([[8, 4], [12, 4]]) should return - 24, appended to the array", () => {
    expect(getMoveScore([[8, 4], [12, 4]])).to.deep.equal([[8, 4], [12, 4], -24]);
  });
  it("getMoveScore([[14, 4], [12, 4]]) should return a score of 8 appended to the array", () => {
    expect(getMoveScore([[14, 4], [12, 4]])).to.deep.equal([[14, 4], [12, 4], 4]);
  });
  it("getMoveScore([[12, 4], [14, 4]]) should return - 8, appended to the array", () => {
    expect(getMoveScore([[12, 4], [14, 4]])).to.deep.equal([[12, 4], [14, 4], -4]);
  });
  it("score should return zero, appended to the array, when moving horizontally", () => {
    expect(getMoveScore([[14, 4], [14, 4]])).to.deep.equal([[14, 4], [14, 4], +0]);
  });
})