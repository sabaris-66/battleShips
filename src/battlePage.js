function battlePage() {
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

  let playerGridNo = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let player1Div = document.createElement("div");
      player1Div.classList.add("player1Plots");
      player1Ground.append(player1Div);

      let player2Div = document.createElement("div");
      player2Div.classList.add("player2Plots");
      player2Ground.append(player2Div);
    }
  }
}

export default battlePage;
