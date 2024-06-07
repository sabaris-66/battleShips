import { Ship, GameBoard, Player } from "./battleship";

function opening() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  const welcome = document.createElement("div");
  welcome.textContent = "Welcome to battleship game";

  const welcome2 = document.createElement("div");
  welcome2.textContent = "Place your Carrier";

  const rotate = document.createElement("button");
  rotate.textContent = "Rotate";
}
