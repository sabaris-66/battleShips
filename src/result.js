import setup from ".";

function ending(player, player1, player1Board, player2, player2Board) {
  const content = document.querySelector(".content");

  const resultPage = document.createElement("div");
  resultPage.classList.add("resultPage");
  content.append(resultPage);

  const winner = document.createElement("div");
  winner.classList.add("winner");
  winner.textContent = player;

  const replay = document.createElement("button");
  replay.classList.add("replay");
  replay.textContent = "Replay";

  resultPage.append(winner);
  resultPage.append(replay);

  // function deleteObject(obj) {
  //   Object.keys(obj).forEach((key) => delete obj[key]);
  // }

  // deleteObject(player1);
  // deleteObject(player2);
  // deleteObject(player1Board);
  // deleteObject(player2Board);
  player1 = {};
  player1Board = {};
  player2 = {};
  player2Board = {};

  replay.addEventListener("click", () => {
    resultPage.remove();
    setup(player1, player1Board, player2, player2Board);
  });
}

export default ending;
