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

  introPage.append(welcome);
  introPage.append(welcome2);
  introPage.append(rotate);

  const container = document.createElement("div");
  container.classList.add("container");
  introPage.append(container);

  player1.gamePlacement.forEach((plots) => {
    let div = document.createElement("div");
    div.classList.add("plots");
    container.append(div);
  });
}
