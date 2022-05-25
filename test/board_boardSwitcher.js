const boardSwitcher = require('../helpers/board/boardSwitcher');
const chai = require('chai');
const expect = chai.expect;

describe('boardSwitcher()', () => {
  it('boardSwitcher("hello") should return "olleh"', () => {
    expect(boardSwitcher("hello")).to.equal('olleh');
  });
});
