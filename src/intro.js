import { player1, player1Board } from "./battleship";

function opening() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  const introPage = document.createElement("div");
  introPage.classList.add("introPage");
  content.append(introPage);

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.textContent = "Welcome to battleship game";

  const welcome2 = document.createElement("div");
  welcome2.classList.add("welcome2");
  welcome2.textContent = "Place your Carrier";

  const rotate = document.createElement("button");
  rotate.classList.add("rotate");
  rotate.textContent = "Rotate";
  rotate.value = 0;
  rotate.addEventListener("click", () => {
    rotate.value = "1";
  });

  introPage.append(welcome);
  introPage.append(welcome2);
  introPage.append(rotate);

  const container = document.createElement("div");
  container.classList.add("container");
  introPage.append(container);

  // let i = 0;
  // let j = 0;
  // player1.gamePlacement.forEach((plots) => {
  //   j = 0;
  //   plots.forEach((plot) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");
      div.classList.add("plot");
      container.append(div);
      div.addEventListener("click", () => {
        let selectShip = -1;
        for (let a = 0; a < 5; a++) {
          if (player1.playerShips[a].placed != true) {
            selectShip = a;
            break;
          }
        }
        // player1.playerShips.forEach((player1.playerShips[selectShip]) => {
        if (selectShip >= 0) {
          if (
            !player1Board.placedPlots.includes([i, j]) &&
            !player1Board.unPlayablePlots.includes([i, j])
          ) {
            if ((rotate.value = "0")) {
              if (j + player1.playerShips[selectShip].length < 10) {
                player1Board.shipPlacement(player1.playerShips[selectShip], [
                  [i, j],
                  [i, j + player1.playerShips[selectShip].length - 1],
                ]);
              }
            } else {
              if (i + player1.playerShips[selectShip].length < 10) {
                player1Board.shipPlacement(player1.playerShips[selectShip], [
                  [i, j],
                  [i + player1.playerShips[selectShip].length - 1, j],
                ]);
              }
            }
          }
        }
        // });
      });
    }
  }

  //     j++;
  //   });
  //   i++;
  // });
  let play = document.createElement("button");
  play.classList.add("playButton");
  play.textContent = "Play";
  introPage.append(play);
  play.addEventListener("click", () => {
    introPage.remove();
  });
}

export default opening;
