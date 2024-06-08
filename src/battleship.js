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

  function shipPlacement(ship, placement) {
    ship.shipCoordinate.push(placement);
    if (placement[0][0] != placement[1][0]) {
      start = placement[0][1];
      end = placement[1][1];
      for (start; start <= end; start++) {
        gamePlacement[i][start] = ship.shipNo;
      }
    } else {
      start = placement[0][0];
      end = placement[1][0];
      for (start; start <= end; start++) {
        gamePlacement[start][j] = ship.shipNo;
      }
    }
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
  // use gameBoard factory to create gamePlacement
  let playerBoard = GameBoard(gamePlacement);

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
    playerBoard,
    playerShips,
  };
}

// Create ship objects
player1 = Player();
player2 = Player();

module.exports = {
  player1,
  player2,
};
