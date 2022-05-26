const getCenterWallSlots = require('./getCenterWallSlots');
const getFreeH = require('./getFreeH');
const getFreeV = require('./getFreeV');
const getWallSlots = require('./getWallSlots');
const placeWall = require('./placeWall');

const wall = {
  getCenterWallSlots,
  getFreeH,
  getFreeV,
  getWallSlots,
  placeWall,
}

module.exports = wall;