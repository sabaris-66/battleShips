import "./style.css";
import { player1, player1Board, player2, player2Board } from "./battleship";
import opening from "./intro";
import computerPlacement from "./computer";
import battlePage from "./battlePage";
function setup() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  opening();
  computerPlacement();

  const play = document.querySelector(".playButton");
  play.addEventListener("click", () => {
    battlePage();
  });
}
setup();
