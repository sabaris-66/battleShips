import "./style.css";
import { Player, GameBoard } from "./battleship";
import opening from "./intro";
import computerPlacement from "./computer";
import battlePage from "./battlePage";
import ending from "./result";
function setup(player1, player1Board, player2, player2Board) {
  // Create ship objects
  player1 = Player();
  // use gameBoard factory to create gamePlacement
  player1Board = GameBoard(player1.gamePlacement);

  player2 = Player();
  // use gameBoard factory to create gamePlacement
  player2Board = GameBoard(player2.gamePlacement);

  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  opening(player1, player1Board);
  computerPlacement(player2, player2Board);

  const introPage = document.querySelector(".introPage");
  const play = document.querySelector(".playButton");
  play.addEventListener("click", () => {
    if (player1.playerShips.every((ship) => ship.placed == true)) {
      introPage.remove();
      battlePage(player1, player1Board, player2, player2Board);
    }
  });

  // let p1Lost = player1.playerShips.every((ship) => ship.sunk);
  // let p2Lost = player2.playerShips.every((ship) => ship.sunk);

  // if (p1Lost == true) {
  //   result("Player 1 Won!!!");
  // }
  // if (p2Lost == true) {
  //   result("Player 2 Won!!!");
  // }
}
// create database elements
let player1;
let player2;
let player1Board;
let player2Board;
setup(player1, player1Board, player2, player2Board);
export default setup;
