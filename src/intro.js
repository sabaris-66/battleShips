function opening(player1, player1Board) {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  const introPage = document.createElement("div");
  introPage.classList.add("introPage");
  content.append(introPage);

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.textContent = "Welcome To Battle Ship Game";

  const welcome2 = document.createElement("div");
  welcome2.classList.add("welcome2");
  welcome2.textContent = "Place Your Carrier";

  const rotate = document.createElement("button");
  rotate.classList.add("rotate");
  rotate.textContent = "Rotate";
  rotate.value = "0";
  rotate.addEventListener("click", () => {
    if (rotate.value == "0") {
      rotate.value = "1";
    } else {
      rotate.value = "0";
    }
  });

  introPage.append(welcome);
  introPage.append(welcome2);
  introPage.append(rotate);

  const container = document.createElement("div");
  container.classList.add("container");
  introPage.append(container);

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
        let validClick = true;
        if (selectShip >= 0) {
          if (
            rotate.value == "0" &&
            j + player1.playerShips[selectShip].length <= 10
          ) {
            for (
              let column = j;
              column < j + player1.playerShips[selectShip].length;
              column++
            ) {
              for (
                let newI = 0;
                newI < player1Board.placedPlots.length;
                newI++
              ) {
                if (
                  player1Board.placedPlots[newI][0] == i &&
                  player1Board.placedPlots[newI][1] == column
                ) {
                  validClick = false;
                  break;
                }
              }

              for (
                let newI = 0;
                newI < player1Board.unPlayablePlots.length;
                newI++
              ) {
                if (
                  player1Board.unPlayablePlots[newI][0] == i &&
                  player1Board.unPlayablePlots[newI][1] == column
                ) {
                  validClick = false;
                  break;
                }
              }
            }
            if (validClick == true) {
              player1Board.shipPlacement(player1.playerShips[selectShip], [
                [i, j],
                [i, j + player1.playerShips[selectShip].length - 1],
              ]);
            }
          } else if (i + player1.playerShips[selectShip].length <= 10) {
            for (
              let tempRow = i;
              tempRow < i + player1.playerShips[selectShip].length;
              tempRow++
            ) {
              for (
                let newI = 0;
                newI < player1Board.placedPlots.length;
                newI++
              ) {
                if (
                  player1Board.placedPlots[newI][0] == tempRow &&
                  player1Board.placedPlots[newI][1] == j
                ) {
                  validClick = false;
                  break;
                }
              }

              for (
                let newI = 0;
                newI < player1Board.unPlayablePlots.length;
                newI++
              ) {
                if (
                  player1Board.unPlayablePlots[newI][0] == tempRow &&
                  player1Board.unPlayablePlots[newI][1] == j
                ) {
                  validClick = false;
                  break;
                }
              }
            }

            if (validClick == true) {
              player1Board.shipPlacement(player1.playerShips[selectShip], [
                [i, j],
                [i + player1.playerShips[selectShip].length - 1, j],
              ]);
            }
          }
        }
        // });
        colorGrid();
      });
    }
  }

  //     j++;
  //   });
  //   i++;
  // });
  // to color the selected plots
  function colorGrid() {
    let gridDivList = document.querySelectorAll(".plot");
    let currentDivNo = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (player1.gamePlacement[i][j] != "O") {
          gridDivList[currentDivNo].classList.add("colorIntroShips");
        }
        currentDivNo++;
      }
    }
  }

  let play = document.createElement("button");
  play.classList.add("playButton");
  play.textContent = "Play";
  introPage.append(play);
}

export default opening;
