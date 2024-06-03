function Ship(shipNo) {
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

  return {
    shipNo,
    length,
    hits,
    shipCoordinate,
    sunk,
    hit,
    isSuck,
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
}

let gamePlacement = [];
for (let i = 0; i < 10; i++) {
  gamePlacement.push([]);
  for (let j = 0; j < 10; j++) {
    gamePlacement[i].push([]);
    gamePlacement[i][j] = "O";
  }
}
// a = [1, 2, 3, 4];
// if (a.includes(1)) {
//   console.log("gu");
// }
// Create ship objects

// Add ship objects to a array
shipArray = [];
