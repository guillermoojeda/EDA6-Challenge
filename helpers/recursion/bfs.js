const moves = require('../pawn/pawnMoves');


// Remove 'N' or 'S' from boardArray correspondingly.

function SearchTree(coords, boardArray) {
  this.coords = coords;
  if (this.coords[0] === 0) {
    this.value = 256;
  } else {
    this.value = 0;
  }

  if (moves.north(coords, boardArray))

    this.north = moves.north(coords, boardArray);
  this.east = moves.east(coords, boardArray);
  this.south = moves.south(coords, boardArray);
  this.west = moves.west(coords, boardArray);
}

const paths = []; // paths. Collectoin of paths.

const visited = []; //visited coords;

function callback(coords) {
  console.log(coords);
  if (!visited.includes(coords)) {
    visited.push(coords);
  }
  console.log(visited);
}

SearchTree.prototype.bfs = function (cb, array = [], path = []) {

  const newPath1 = [...path];
  const newPath2 = [...path];
  const newPath3 = [...path];
  const newPath4 = [...path];

  if (this.north !== null && !visited.includes(this.north)) {
    newPath1.push(this.north);
    console.log(newPath1);
  }

  if (this.east !== null) {
    newPath2.push(this.east);
    console.log(newPath2);
  }

  if (this.south !== null) {
    newPath3.push(this.south);
  }

  if (this.south !== null) {
    newPath4.push(this.west);
  }

  cb(this.coords);
  /*
  if (this.coords[0] === 0) {
    paths.push(path);
    return; // cortamos la recursión ya que encontramos el valor final.
  }
  */

  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }

  console.log(paths);

  return { path, array };

};


const sample5 = [
  '                 ',
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

const tree = new SearchTree([10, 8], sample5);

console.log(tree);

console.log(tree.bfs(callback));
