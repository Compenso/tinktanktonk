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
// const resetGame = document.querySelector('.resetgame')
const xOrO = document.querySelectorAll('.xoro')

// The Game!
const liveGame = true
let turnX = true

const xOrOClick = function (event) {
  const classList = event.target.classList

  if (!liveGame || classList[1] === 'X' || classList[1] === 'O') {
    // turnX = !turnX
  } else if (turnX === true) {
    classList.add('X')
    playGame()
    // turnX = !turnX
  } else {
    classList.add('O')
    playGame()
  }
}

// board pieces 'x' or 'o'
const xMark = '☠'
const oMark = 'Ø'

const playGame = () => {
  const one = xOrO[0].classList[1]
  const two = xOrO[1].classList[1]
  const three = xOrO[2].classList[1]
  const four = xOrO[3].classList[1]
  const five = xOrO[4].classList[1]
  const six = xOrO[5].classList[1]
  const seven = xOrO[6].classList[1]
  const eight = xOrO[7].classList[1]
  const nine = xOrO[8].classList[1]

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
    turnX = !turnX
    if (turnX === 'X') {
      turnX.innerHTML = `${xMark} is next`
    } else {
      turnX.innerHTML = `<span>${oMark} is next</span>`
    }
  }
}

const letterToSymbol = (letter) => letter === 'X' ? xMark : oMark

const playerWin = (letter) => {
  if (letter === 'X') {
    playerTurn.innerHTML = `${letterToSymbol(letter)} has won!`
  } else {
    playerTurn.innerHTML = `<span>
      ${letterToSymbol(letter)} has won!
      </span>`
  }
}

// const gameReset = function () {
//   turnX = true
//   playGame = true
//   resetGame.reset()
// }

module.exports = {
  onNewGame: onNewGame,
  xOrOClick: xOrOClick,
  turnX: turnX,
  letterToSymbol: letterToSymbol,
  playerWin: playerWin
}
