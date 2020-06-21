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

const onGameUpdate = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data, 'didjs updotttt the game?')

  api.gameUpdate()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

const onGamesIndex = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  console.log('Get games data.')

  api.gamesIndex()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFail)
}

// Game status.
const statusDisplay = document.querySelector('.game-status')

// Is our game won or still being played?  Will be a let because the value onChangePasswordSuccess
let gameActive = true

// current player is...
let currentPlayer = 'X'

// store our game in an array
let gameState = ['', '', '', '', '', '', '', '', '']

const winningMessage = () => `${currentPlayer} is the Weiner`
const drawMessage = () => `Ah poo, no winner.  But ties are cool.`
const currentPlayerTurn = () => `${currentPlayer} it is your turn`

// here is our start message
statusDisplay.innerHTML = currentPlayer

function handleCellPlayed (clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer
  clickedCell.innerHTML = currentPlayer
}

function handlePlayerChange () {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  statusDisplay.innerHTML = currentPlayerTurn()
}

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function handleResultValidation () {
  let roundWon = false
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i]
    const a = gameState[winCondition[0]]
    const b = gameState[winCondition[1]]
    const c = gameState[winCondition[2]]
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      roundWon = true
      break
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage()
    gameActive = false
    return
  }
  const roundDraw = !gameState.includes('')
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage()
    gameActive = false
    return
  }
  handlePlayerChange()
}

function handleCellClick (clickedCellEvent) {
  const clickedCell = clickedCellEvent.target
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  )
  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return
  }
  handleCellPlayed(clickedCell, clickedCellIndex)
  handleResultValidation()
}

function handleRestartGame () {
  gameActive = true
  currentPlayer = 'X'
  gameState = ['', '', '', '', '', '', '', '', '']
  statusDisplay.innerHTML = currentPlayerTurn()
  document.querySelectorAll('.box')
    .forEach(box => box.innerHTML = '')
}

document.querySelectorAll('.box').forEach(box => box.addEventListener('click', handleCellClick))
document.querySelector('.game-reset-button').addEventListener('click', handleRestartGame)

// // $(() => {
//   // Start the player at X
//   let currentPlayer = 'X'
//
//   // Our box click event handler
//   const onBoxClick = (event) => {
//     // Select the box that was clicked, event.target
//     const box = $(event.target)
//     console.log('click', box.data('cell-index'))
//     // Set the boxs background to `transparent`
//     // So we can see the image behind the box.
//     // Then set the text to the current player
//     box.css('background', 'transparent').text(currentPlayer)
//
//     // Change the current player
//     currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
//   }
//
//   // Select all of the boxes, $('.box'), add an event listener so that `on`
//   // every 'click' the `onBoxClick` event handler is called.
//   $('.box').on('click', onBoxClick)
// })

module.exports = {
  onNewGame: onNewGame,
  onGamesIndex: onGamesIndex,
  onGameUpdate: onGameUpdate,
  handleCellClick: handleCellClick,
  handleRestartGame: handleRestartGame,
  handleResultValidation: handleResultValidation,
  handlePlayerChange: handlePlayerChange,
  handleCellPlayed: handleCellPlayed
}
