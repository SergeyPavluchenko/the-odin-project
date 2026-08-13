const board = document.querySelector(".board");
const win = document.querySelector(".winner");
const startBtn = document.querySelector(".startBtn");
const box = document.querySelector(".box");
const click = document.querySelector(".click");

let player = "X";
let counterX = [];
let counterO = [];
let gameOver = false;

const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function hasWinningCombination(arr, move) {
    return arr.every((index) => move.includes(index));
}

function createBoard() {
    board.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        board.appendChild(cell);
    }
}

createBoard();

function handleClick(e) {
    click.textContent = "";


    if (gameOver) {
        return;
    }

    if (!e.target.classList.contains("cell")) {
        click.textContent = "Click on the board!";
        return;
    }


    const idx = Number(e.target.dataset.index);

    if (e.target.textContent !== "") {
        return;
    }

    e.target.textContent = player;

    if (player === "X") {
        counterX.push(idx);
        const winnerX = winComb.some((comb) =>
            hasWinningCombination(comb, counterX),
        );
        if (winnerX === true) {
            gameOver = true;
            win.textContent = "Player X wins!";
            return;
        }

        player = "O";

    } else {
        counterO.push(idx);
        const winnerO = winComb.some((comb) =>
            hasWinningCombination(comb, counterO),
        );
        if (winnerO) {
            gameOver = true;
            win.textContent = "Player O wins!";
            return;
        }
        player = "X";
    }

    const total = counterX.length + counterO.length;
    if (total === 9) {
        win.textContent = "Draw!";
        gameOver = true;
    }
}

function handleStart(e) {
    e.stopPropagation()

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.textContent = "";
    });

    player = "X";
    counterX = [];
    counterO = [];
    gameOver = false;
    win.textContent = "";
    click.textContent = "";
}

box.addEventListener("click", handleClick);
startBtn.addEventListener("click", handleStart);
