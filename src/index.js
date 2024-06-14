import "./style.css";
import { player1, player1Board, player2, player2Board } from "./battleship";
import opening from "./intro";
import computerPlacement from "./computer";
function setup() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  opening();
  computerPlacement();
}
setup();
