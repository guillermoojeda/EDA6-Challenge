const { movePawn } = require('../helpers/pawn/pawn');
const chai = require('chai');
const expect = chai.expect;

const correctAnswer = {
  action: "move",
  data: {
    game_id: "kjqhwenqkl1k2j31ljkhasdnb123",
    turn_token: "jajkweu132u1893u1jhwekabneq",
    from_row: 0,
    from_col: 1,
    to_row: 1,
    to_col: 1,
  }
}

describe('movePawn()', () => {
  // ...
  it("movePawn([0, 1], [1, 1], 'kjqhwenqkl1k2j31ljkhasdnb123', 'jajkweu132u1893u1jhwekabneq') should return the corresponding 'move' message object", () => {
    expect(movePawn([0, 1], [1, 1], 'kjqhwenqkl1k2j31ljkhasdnb123', 'jajkweu132u1893u1jhwekabneq')).to.deep.equal(correctAnswer);
  });
})