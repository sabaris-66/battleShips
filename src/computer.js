function computerPlacement(player2, player2Board) {
  let selectShip = 0;

  while (selectShip < 5) {
    let validClick = true;
    let rotate = Math.floor(Math.random() * 2);
    let randomRow = Math.floor(Math.random() * 10);
    let randomCol = Math.floor(Math.random() * 10);

    if (
      rotate == 0 &&
      randomCol + player2.playerShips[selectShip].length <= 10
    ) {
      for (
        let column = randomCol;
        column < randomCol + player2.playerShips[selectShip].length;
        column++
      ) {
        for (let newI = 0; newI < player2Board.placedPlots.length; newI++) {
          if (
            player2Board.placedPlots[newI][0] == randomRow &&
            player2Board.placedPlots[newI][1] == column
          ) {
            validClick = false;
            break;
          }
        }

        for (let newI = 0; newI < player2Board.unPlayablePlots.length; newI++) {
          if (
            player2Board.unPlayablePlots[newI][0] == randomRow &&
            player2Board.unPlayablePlots[newI][1] == column
          ) {
            validClick = false;
            break;
          }
        }
      }
      if (validClick == true) {
        player2Board.shipPlacement(player2.playerShips[selectShip], [
          [randomRow, randomCol],
          [randomRow, randomCol + player2.playerShips[selectShip].length - 1],
        ]);
        selectShip++;
      }
    } else if (
      rotate == 1 &&
      randomRow + player2.playerShips[selectShip].length <= 10
    ) {
      for (
        let tempRow = randomRow;
        tempRow < randomRow + player2.playerShips[selectShip].length;
        tempRow++
      ) {
        for (let newI = 0; newI < player2Board.placedPlots.length; newI++) {
          if (
            player2Board.placedPlots[newI][0] == tempRow &&
            player2Board.placedPlots[newI][1] == randomCol
          ) {
            validClick = false;
            break;
          }
        }

        for (let newI = 0; newI < player2Board.unPlayablePlots.length; newI++) {
          if (
            player2Board.unPlayablePlots[newI][0] == tempRow &&
            player2Board.unPlayablePlots[newI][1] == randomCol
          ) {
            validClick = false;
            break;
          }
        }
      }

      if (validClick == true) {
        player2Board.shipPlacement(player2.playerShips[selectShip], [
          [randomRow, randomCol],
          [randomRow + player2.playerShips[selectShip].length - 1, randomCol],
        ]);
        selectShip++;
      }
    }
  }
  console.log(player2.gamePlacement);
}

export default computerPlacement;
