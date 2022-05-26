const { placeWall } = require('../helpers/wall/wall');
const chai = require('chai');
const expect = chai.expect;

const correctAnswer = {
  action: "wall",
  data: {
    game_id: "2d348323-2e79-4961-ac36-1b000e8c42a5",
    row: 5,
    col: 8,
    direction: "h"
  }
}

describe('wall.placeWall', () => {
  // ...
  it("wall.placeWall([5, 8], 'h', '2d348323-2e79-4961-ac36-1b000e8c42a5') should give the corresponding message object", () => {
    expect(placeWall([5, 8], 'h', '2d348323-2e79-4961-ac36-1b000e8c42a5')).to.deep.equal(correctAnswer);
  });
})