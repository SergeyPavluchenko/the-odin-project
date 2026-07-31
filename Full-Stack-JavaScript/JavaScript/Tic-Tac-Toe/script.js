// const board = document.querySelector('.table')
const board = document.querySelector('.board')
const win = document.querySelector('.winner')
const startBtn = document.querySelector('.startBtn')

let player = 'X';
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
    [2, 4, 6]
]



function winner(arr, move) {
    return arr.every(index => move.includes(index))
}

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell');
    cell.dataset.index = i;
    board.appendChild(cell)

}

function handleClick(e) {
    if (gameOver) {
        return
    } else {
        const idx = Number(e.target.dataset.index)

        if (e.target.textContent !== '') {
            return
        }

        e.target.textContent = player


        if (player === 'X') {
            player = 'O'
            counterX.push(idx)
            const winnerX = winComb.some(comb => winner(comb, counterX))
            if (winnerX === true) {
                gameOver = true;
                win.textContent = 'Player X win';
                return
            }
        } else {
            player = 'X'
            counterO.push(idx)
            const winnerO = winComb.some(comb => winner(comb, counterO))
            if (winnerO === true) {
                gameOver = true;
                win.textContent = 'Player O win'
                return
            }
        }

        const total = counterX.length + counterO.length
        if (total === 9) {
            win.textContent = "Draw!";
            gameOver = true;
        }


    }


}

function handleStart() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.textContent = ''
    });

    player = 'X'
    counterX = []
    counterO = []
    gameOver = false
    win.textContent = ''
}


board.addEventListener('click', handleClick)
startBtn.addEventListener('click', handleStart)