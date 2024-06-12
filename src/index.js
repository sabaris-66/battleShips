import "./style.css";
import { player1, player1Board, player2, player2Board } from "./battleship";
import opening from "./intro";
function setup() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  opening();
}
setup();
