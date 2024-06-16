import ending from "./result";
import setup from ".";

function battlePage(player1, player1Board, player2, player2Board) {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  const finalBattle = document.createElement("div");
  finalBattle.classList.add("finalBattle");
  content.append(finalBattle);

  const headTitle = document.createElement("div");
  headTitle.classList.add("headTitle");
  headTitle.textContent = "BATTLESHIP";
  finalBattle.append(headTitle);

  let playerGround = document.createElement("div");
  playerGround.classList.add("playerGround");
  finalBattle.append(playerGround);

  let player1Ground = document.createElement("div");
  player1Ground.classList.add("player1Ground");
  playerGround.append(player1Ground);

  let player2Ground = document.createElement("div");
  player2Ground.classList.add("player2Ground");
  playerGround.append(player2Ground);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let player1Div = document.createElement("div");
      player1Div.classList.add("player1Plots");
      player1Ground.append(player1Div);

      let player2Div = document.createElement("div");
      player2Div.classList.add("player2Plots");
      player2Ground.append(player2Div);

      let attackedShip;
      let removedShip;

      if (player1.gamePlacement[i][j] >= 0 && player1.gamePlacement[i][j] < 5) {
        player1Div.classList.add("colorIntroShips");
      }

      player2Div.addEventListener("click", () => {
        if (
          player2.gamePlacement[i][j] != "attacked" &&
          player2.gamePlacement[i][j] != "missed"
        ) {
          if (
            player2.gamePlacement[i][j] >= 0 &&
            player2.gamePlacement[i][j] < 5
          ) {
            attackedShip = player2.gamePlacement[i][j];
            console.log(attackedShip);
            player2.playerShips[attackedShip].hits++;
            player2.gamePlacement[i][j] = "attacked";
            player2Div.classList.add("colorAttackedShips");

            console.log(player2.gamePlacement);
            // console.log(player2.playerShips);
            // console.log(player2.playerShips[attackedShip].placed);
            if (
              player2.playerShips[attackedShip].hits ==
              player2.playerShips[attackedShip].length
            ) {
              player2.playerShips[attackedShip].sunk = true;
              console.log(attackedShip);
              console.log(player2.playerShips);
              let p2ShipsSunk = player2.playerShips.every((ship) => ship.sunk);
              console.log(p2ShipsSunk);
              if (p2ShipsSunk == true) {
                console.log("p1 won");
                finalBattle.remove();
                ending(
                  "Player 1 Won!!!",
                  player1,
                  player1Board,
                  player2,
                  player2Board
                );
                // const resultPage = document.querySelector(".resultPage");
                // const replay = document.querySelector(".replay");
                // replay.addEventListener("click", () => {
                //   resultPage.remove();
                //   setup(player1, player1Board, player2, player2Board);
                // });
                // print p1 won
              }
            }
          } else if (player2.gamePlacement[i][j] == "O") {
            player2Div.classList.add("colorWrongShips");
            player2.gamePlacement[i][j] = "missed";
          }
          let randRow = Math.floor(Math.random() * 10);
          let randCol = Math.floor(Math.random() * 10);
          while (
            player1.gamePlacement[randRow][randCol] == "attacked" ||
            player1.gamePlacement[randRow][randCol] == "missed"
          ) {
            randRow = Math.floor(Math.random() * 10);
            randCol = Math.floor(Math.random() * 10);
          }
          if (
            player1.gamePlacement[randRow][randCol] >= 0 &&
            player1.gamePlacement[randRow][randCol] < 5
          ) {
            attackedShip = player1.gamePlacement[randRow][randCol];
            player1.playerShips[attackedShip].hits++;
            player1.gamePlacement[randRow][randCol] = "attacked";
            // player1Div.classList.remove("colorIntroShips");
            color();

            // console.log(player2.playerShips);
            // console.log(player2.playerShips[attackedShip].placed);
            // player1Div.classList.add("colorAttackedShips");
            if (
              player1.playerShips[attackedShip].hits ==
              player1.playerShips[attackedShip].length
            ) {
              player1.playerShips[attackedShip].sunk = true;
              console.log(player1.playerShips);
              let p1ShipsSunk = player1.playerShips.every((ship) => ship.sunk);
              console.log(p1ShipsSunk);
              if (p1ShipsSunk == true) {
                console.log("p2 won");
                finalBattle.remove();
                // print p2 won
                ending(
                  "Player 2 Won!!!",
                  player1,
                  player1Board,
                  player2,
                  player2Board
                );
                // const resultPage = document.querySelector(".resultPage");
                // const replay = document.querySelector(".replay");
                // replay.addEventListener("click", () => {
                //   resultPage.remove();
                //   setup(player1, player1Board, player2, player2Board);
                // });
              }
            }
          } else {
            player1.gamePlacement[randRow][randCol] = "missed";
            // console.log(player2.playerShips);
            // console.log(player2.playerShips[attackedShip].placed);
            color();
            // player1Div.classList.add("colorWrongShips");
          }
        }
      });
    }
  }
  function color() {
    const player1grid = document.querySelectorAll(".player1Plots");
    let current = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (player1.gamePlacement[i][j] == "attacked") {
          player1grid[current].classList.add("colorAttackedShips");
        } else if (player1.gamePlacement[i][j] == "missed") {
          player1grid[current].classList.add("colorWrongShips");
        }
        current++;
      }
    }
  }
}

export default battlePage;
