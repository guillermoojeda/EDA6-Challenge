const switchBoardArray = require('../helpers/board/switchBoardArray');
const chai = require('chai');
const expect = chai.expect;

const sample =
  [
    '  N              ',
    '                 ',
    '              N  ',
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
    '          S      ',
    '                 ',
    'S                '
  ];

const answer = [
  '                S',
  '                 ',
  '      S          ',
  '                 ',
  '                 ',
  '                 ',
  '        S        ',
  '                 ',
  '                 ',
  '                 ',
  '        N        ',
  '                 ',
  '                 ',
  '                 ',
  '  N              ',
  '                 ',
  '              N  '
];

describe('switchBoardArray', () => {
  it('The function should invert the board as a double-simmetry image would.', () => {
    expect(switchBoardArray(sample)).to.deep.equal(answer);
  })
})
