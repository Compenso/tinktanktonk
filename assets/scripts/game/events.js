'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onNewGame = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  console.log(data)
  console.log('New game in the events.')

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}
// class selectors.
const playerTurn = document.querySelector('.playerturn')
const resetGame = document.querySelector('.resetgame')
const playBox = document.querySelector('.xro')

// board pieces 'x' or 'o'
const xMark = '☠'
const oMark = 'Ø'

// The Game!
let liveGame = true
let playerNextTurn = true

const letterToSymbol = (letter) => letter === 'X' ? xSymbol : oSymbol

const playerWin = (letter) => {
  winner = letter
  if (letter === 'X') {
    playerTurn.innerHTML = `${letterToSymbol(letter)} has won!`
  } else {
    playerTurn.innerHTML = `<span>
      ${letterToSymbol(letter)} has won!
      </span>`
  }
}

const playGame = () => {
  const one = playBox[0].classList[1]
  const two = playBox[1].classList[1]
  const three = playBox[2].classList[1]
  const four = playBox[3].classList[1]
  const five = playBox[4].classList[1]
  const six = playBox[5].classList[1]
  const seven = playBox[6].classList[1]
  const eight = playBox[7].classList[1]
  const nine = playBox[8].classList[1]

  if (one && one === two && one === three) {
    playerWin(one)
  } else if (four && four === five && four === six) {
    playerWin(four)
  } else if (seven && seven === eight && seven === nine) {
    playerWin(seven)
  } else if (one && one === five && one === nine) {
    playerWin(one)
  } else if (seven && seven === five && seven === three) {
    playerWin(seven)
  } else if (one && one === four && one === seven) {
    playerWin(one)
  } else if (two && two === five && two === eight) {
    playerWin(two)
  } else if (three && three === six && three === nine) {
    playerWin(three)
  } else {
    playerNextTurn = !playerNextTurn
    if (playerNextTurn === 'X') {
      playerTurn.innerHTML = `${xMark} is next`
    } else {
      playerTurn.innerHTML = `<span>${oMark} is next</span>`
    }
  }
}

const boxClick = (e) => {
  const classList = e.target.classList
  if(!playerNextTurn || classList[1] === 'X' || classList[1] === 'O') {
    return
  }
  if(liveGame === true) {
    classList.add('X')
    playGame()
  } else {
    classList.add('O')
    playGame()
  }
}

for (const playBo of playBox) {
    playBox.addEventListener('click', boxClick)
  }

module.exports = {
  onNewGame: onNewGame,
  playerTurn: playerTurn,
  resetGame: resetGame,
  playBox: playBox,
  xMark: xMark,
  yMark: oMark,
  liveGame: liveGame,
  playerNextTurn: playerNextTurn
}
