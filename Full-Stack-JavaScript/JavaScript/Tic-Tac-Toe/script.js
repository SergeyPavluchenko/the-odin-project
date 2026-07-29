// const board = document.querySelector('.table')
const board = document.querySelector('.board')

let player = 'X'

const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let counterX = []
let counterO = []

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell');
    cell.dataset.index = i;
    board.appendChild(cell)
}

function handleClick(e) {
    const idx = Number(e.target.dataset.index)
    e.target.textContent = player

    if (player === 'X') {
        player = 'O'
        counterX.push(idx)
    } else {
        player = 'X'
        counterO.push(idx)

    }
    console.log(counterX);
    console.log(counterO);
}

board.addEventListener('click', handleClick)