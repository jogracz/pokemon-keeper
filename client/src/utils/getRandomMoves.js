const getRandomBetween = require('./getRandomBetween');

const getRandomMoves = (moves, numOfRandomMoves) => {
  if (moves.length <= numOfRandomMoves) return moves;
  const result = [];

  let numOfRMoves = numOfRandomMoves;
  while (numOfRMoves > 0) {
    const randomIndex = getRandomBetween(0, moves.length - 1);
    result.push(moves[randomIndex]);
    moves.splice(randomIndex, 1);
    numOfRMoves -= 1;
  }
  return result;
};

module.exports = getRandomMoves;
