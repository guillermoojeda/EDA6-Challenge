const turnSolver = require('../helpers/turnSolver/turnSolver');

const chai = require('chai');
const expect = chai.expect;

const turnSample = {
  event: "your_turn",
  data: {
    player_2: "uno",
    player_1: "dos",
    score_2: "0.0",
    walls: "10.0",
    score_1: "0.0",
    side: "N",
    remaining_moves: "50.0",
    board: "  N     N     N                                                                                                                                                                                                                                       S N                         S     S        ",
    turn_token: "087920d0-0e6b-4716-9e77-add550a006aa",
    game_id: "ab16e71c-caeb-11eb-975e-0242c0a80004"
  }
}

/*
describe('turnSolver()', () => {
  // ...
  it("turnSolver(turnSample) should return the corresponding 'move' message object", () => {
    expect(turnSolver(turnSample)).to.deep.equal([[2, 6], [0, 6]]);
  });
})*/