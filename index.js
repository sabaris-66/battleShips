function Ship() {
  let length = 0;
  let hits = 0;
  let shipCoordinate = [];
  let sunk = false;

  function hit() {
    hits++;
  }

  function isSuck() {
    if (hits == length) {
      sunk = true;
    }
  }
}

function GameBoard(ship) {}

let gamePlacement = [];
for (let i = 0; i < 10; i++) {
  gamePlacement.push([]);
  for (let j = 0; j < 10; j++) {
    gamePlacement[i].push([]);
    // gamePlacement[i][j] = [i, j];
  }
}
console.log(gamePlacement);
