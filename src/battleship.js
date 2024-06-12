function Ship(shipNo, length) {
  let hits = 0;
  let shipCoordinate = [];
  let sunk = false;
  let placed = false;

  function hit() {
    hits++;
  }

  function isSunk() {
    if (hits == length) {
      sunk = true;
    }
  }

  return {
    shipNo,
    length,
    hits,
    placed,
    shipCoordinate,
    sunk,
    hit,
    isSunk,
  };
}

function GameBoard(gamePlacement) {
  let start = 0;
  let end = 0;
  let missedAttacks = [];
  let placedPlots = [];
  let unPlayablePlots = [];

  function shipPlacement(ship, placement) {
    console.log(placement);
    ship.shipCoordinate.push(placement[0]);
    ship.shipCoordinate.push(placement[1]);
    if (placement[0][0] != placement[1][0]) {
      start = placement[0][0];
      end = placement[1][0];
      let col = placement[0][1];
      for (start; start <= end; start++) {
        gamePlacement[start][col] = ship.shipNo;
        placedPlots.push([start, col]);
        if (col + 1 < 10) {
          unPlayablePlots.push([start, col + 1]);
        }
        if (col - 1 >= 0) {
          unPlayablePlots.push([start, col - 1]);
        }
      }

      if (placement[0][0] - 1 >= 0) {
        unPlayablePlots.push([placement[0][0] - 1, col]);
      }
      if (placement[1][0] + 1 < 10) {
        unPlayablePlots.push([placement[1][0] + 1, col]);
      }

      if (placement[0][0] - 1 >= 0 && col - 1 >= 0) {
        unPlayablePlots.push([placement[0][0] - 1, col - 1]);
      }
      if (placement[0][0] - 1 >= 0 && col + 1 < 10) {
        unPlayablePlots.push([placement[0][0] - 1, col + 1]);
      }
      if (placement[1][0] + 1 < 10 && col - 1 >= 0) {
        unPlayablePlots.push([placement[1][0] + 1, col - 1]);
      }
      if (placement[1][0] + 1 < 10 && col + 1 < 10) {
        unPlayablePlots.push([placement[1][0] + 1, col + 1]);
      }
    } else {
      start = placement[0][1];
      end = placement[1][1];
      let row = placement[0][0];
      for (start; start <= end; start++) {
        gamePlacement[row][start] = ship.shipNo;
        placedPlots.push([row, start]);
        if (row + 1 < 10) {
          unPlayablePlots.push([row + 1, start]);
        }
        if (row - 1 >= 0) {
          unPlayablePlots.push([row - 1, start]);
        }
      }

      if (placement[0][1] - 1 >= 0) {
        unPlayablePlots.push([row, placement[0][1] - 1]);
      }
      if (placement[1][1] + 1 < 10) {
        unPlayablePlots.push([row, placement[1][1] + 1]);
      }

      if (placement[0][1] - 1 >= 0 && row - 1 >= 0) {
        unPlayablePlots.push([row - 1, placement[0][1] - 1]);
      }
      if (placement[0][1] - 1 >= 0 && row + 1 < 10) {
        unPlayablePlots.push([row + 1, placement[0][1] - 1]);
      }
      if (placement[1][1] + 1 < 10 && row - 1 >= 0) {
        unPlayablePlots.push([row - 1, placement[1][1] + 1]);
      }
      if (placement[1][1] + 1 < 10 && row + 1 < 10) {
        unPlayablePlots.push([row + 1, placement[1][1] + 1]);
      }
    }
    ship.placed = true;
    console.log(gamePlacement);
    console.log(placedPlots);
    console.log(unPlayablePlots);
  }

  function receiveAttack(coordinate1, coordinate2, shipArray) {
    let num = gamePlacement[coordinate1][coordinate2];
    if (num != "O" && !missedAttacks.includes([coordinate1, coordinate2])) {
      shipArray[num].hit();
    } else {
      missedAttacks.push([coordinate1, coordinate2]);
      gamePlacement[coordinate1][coordinate2] = "X";
    }
  }

  function allShipsSunk(shipArray) {
    return shipArray.every((ship) => ship.sunk == true);
  }

  return {
    missedAttacks,
    placedPlots,
    unPlayablePlots,
    shipPlacement,
    receiveAttack,
    allShipsSunk,
  };
}

function Player() {
  let gamePlacement = [];
  for (let i = 0; i < 10; i++) {
    gamePlacement.push([]);
    for (let j = 0; j < 10; j++) {
      gamePlacement[i].push([]);
      gamePlacement[i][j] = "O";
    }
  }

  // use Ship factory to create five ships for player
  let carrier = Ship(0, 5);
  let battleship = Ship(1, 4);
  let cruiser = Ship(2, 3);
  let submarine = Ship(3, 3);
  let destroyer = Ship(4, 2);

  // list of player ships
  let playerShips = [carrier, battleship, cruiser, submarine, destroyer];

  return {
    gamePlacement,
    playerShips,
  };
}

// Create ship objects
let player1 = Player();
// use gameBoard factory to create gamePlacement
let player1Board = GameBoard(player1.gamePlacement);

let player2 = Player();
// use gameBoard factory to create gamePlacement
let player2Board = GameBoard(player2.gamePlacement);

module.exports = {
  player1,
  player1Board,
  player2,
  player2Board,
};
