const player1Submit = document.querySelector(".player1-name");
const welcomePage = document.querySelector(".welcome");
const welcomePagebutton = document.querySelector(".welcome-btn");
const player1Page = document.querySelector(".player1");
const buttons = document.querySelectorAll(".btn");
let player1Choice = "X";
let player2Choice = "O";
const player2Page = document.querySelector(".player2");
let player1Name = "";
let player2Name = "";
const player2Form = document.querySelector(".player2-name");
const gameBoard = document.querySelector(".game-arena");

let Player1turn = Math.random() < 0.5 ? true : false;

const turnText = document.querySelector("#turn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.backgroundColor = "black";
    button.style.color = "white";
    player1Choice = button.textContent;

    if (player1Choice == "X") {
      player2Choice = "O";
    } else {
      player2Choice = "X";
    }
  });
});

welcomePagebutton.addEventListener("click", () => {
  welcomePage.style.display = "none";
  player1Page.style.display = "flex";
});

player1Submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#player1-name");
  player1Name = name.value;
  //   console.log(player1Name);
  player1Page.style.display = "none";
  player2Page.style.display = "flex";
});

player2Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#player2-name");
  player2Name = name.value;
  //   console.log(player2Name);
  player2Page.style.display = "none";
  gameBoard.style.display = "grid";

  if (Player1turn) {
    turnText.textContent = `${player1Name}'s Turn`;
  } else {
    turnText.textContent = `${player2Name}'s Turn`;
  }
});

const boxes = document.querySelectorAll(".box");
winArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin() {
  const box1 = boxes[0].textContent;
  const box2 = boxes[1].textContent;
  const box3 = boxes[2].textContent;
  const box4 = boxes[3].textContent;
  const box5 = boxes[4].textContent;
  const box6 = boxes[5].textContent;
  const box7 = boxes[6].textContent;
  const box8 = boxes[7].textContent;
  const box9 = boxes[8].textContent;
  let win = false;

  winArray.forEach((arr) => {
    const Box1 = boxes[arr[0]].textContent;
    const Box2 = boxes[arr[1]].textContent;
    const Box3 = boxes[arr[2]].textContent;
    if (Box1 != "" && Box2 != "" && Box3 != "") {
      if (Box1 == Box2 && Box2 == Box3) {
        if (Player1turn) {
          turnText.textContent = `Winner is ${player2Name}`;
        } else {
          turnText.textContent = `Winner is ${player1Name}`;
        }

        boxes.forEach((box) => (box.disabled = true));
        win = true;
        return;
      }
    }
  });

  if (
    box1 != "" &&
    box2 != "" &&
    box3 != "" &&
    box4 != "" &&
    box5 != "" &&
    box6 != "" &&
    box7 != "" &&
    box8 != "" &&
    box9 != "" &&
    win == false
  ) {
    turnText.textContent = `Draw`;
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.disabled = true;
    if (Player1turn) {
      box.textContent = player1Choice;
      //   Player1turn = false;
      turnText.textContent = `${player2Name}'s Turn`;
    } else {
      box.textContent = player2Choice;
      //   Player1turn = true;
      turnText.textContent = `${player1Name}'s Turn`;
    }
    Player1turn = !Player1turn;
    checkWin();
  });
});

const reset = document.querySelector("#reset-btn");

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.textContent = "";
    box.disabled = false;
  });
  Player1turn = Math.random() < 0.5 ? true : false;
  //   console.log(Player1turn);

  if (Player1turn) {
    turnText.textContent = `${player1Name}'s Turn`;
  } else {
    turnText.textContent = `${player2Name}'s Turn`;
  }
});
