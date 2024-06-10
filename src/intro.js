import { player1, player2 } from "./battleship";

function opening() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  const introPage = document.createElement("div");
  introPage.classList.add("introPage");
  introPage.classList.add("remove");
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
    rotate.value = 1;
  });

  introPage.append(welcome);
  introPage.append(welcome2);
  introPage.append(rotate);

  const container = document.createElement("div");
  container.classList.add("container");
  introPage.append(container);

  player1.gamePlacement.forEach((plot) => {
    let div = document.createElement("div");
    div.classList.add("plot");
    container.append(div);
    div.addEventListener("click", () => {
      // let ship;
      player1.playerShips.forEach((battleShip) => {
        if (battleShip.placed != true) {
          if (
            !player1.playerBoard.placedPlots.includes(plot) &&
            !player1.playerBoard.unPlayablePlots.includes(plot)
          ) {
            if ((rotate = 0)) {
              player1.playerBoard.shipPlacement(battleShip, [
                plot,
                [plot[0], plot[1] + battleShip.length - 1],
              ]);
            } else {
              player1.playerBoard.shipPlacement(battleShip, [
                plot,
                [plot[0] + battleShip.length - 1, plot[1]],
              ]);
            }
          }
        }
      });
    });
  });
  let play = document.createElement("button");
  play.classList.add("playButton");
  introPage.append(play);
}
