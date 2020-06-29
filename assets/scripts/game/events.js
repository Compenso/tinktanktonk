'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('./../store')

const onNewGame = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // console.log('New game in the events.')
  // console.log('hanging in the new game ', event.target)
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
// this grabs the class - game-status
// this will be used to get the class when the text needs changed
const statusDisplay = document.querySelector('.game-status')
// This will push our current game id into our HTML
// well, not yet, here the path is just defined
const gameById = document.querySelector('#gameBoardId')

// what is the state of the game's play: playing, or over
let gameActive = true

// current player is...
let currentPlayer = '✘'

// store our game in an array
let gameState = ['', '', '', '', '', '', '', '', '']

// our winning/draw/and whose turn messages
const winningMessage = () => `${currentPlayer} is the Weiner`
const drawMessage = () => `Ah poo, no winner.  But ties are cool.`
const currentPlayerTurn = () => `${currentPlayer} it is your turn`

// update a number of Wins
const xWins = $('#xwin')
const xWinsFunc = function () {
  xWins.text(store.x)
}
const oWins = $('#owin')
const oWinsFunc = function () {
  oWins.text(store.o)
}
const draw = $('#draw')
const drawGame = function () {
  draw.text(store.d)
}

// we push html onto the page in our status area
// we begin by displaying the current player
// in this case, its always x, or should always start with x
statusDisplay.innerHTML = currentPlayer

// after a cell has been clicked.
// we want it to not be clickable anymore
// we also want to update our current player
function handleCellPlayed (clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer
  clickedCell.innerHTML = currentPlayer
  const box = $(event.target)
  // console.log('click', box.data('cell-index'))
  $('.box').on('click', handleCellClick)
  console.log(box)
}

function handlePlayerChange () {
  currentPlayer = currentPlayer === '✘' ? 'O' : '✘'
  statusDisplay.innerHTML = currentPlayerTurn()
  // console.log(currentPlayer)
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
      // console.log(a)
      if (a === '✘') {
        store.x++
        xWinsFunc()
      } else if (a === 'O') {
        store.o++
        oWinsFunc()
      }

      // if a === x, then add one to the store.x
      // if a === o, then add one to the input field on o
      // this is deeply flawed if I want to recall game wins.
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
    store.d++
    drawGame()
    return
  }
  handlePlayerChange()
}

function handleCellClick (clickedCellEvent) {
  const clickedCell = clickedCellEvent.target
  // clicked Cell Index parses our data into an integer
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  )
  // if gamestate index is not blank, or the game is not active return
  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return
  }
  // if it is acticve then handle cell played.
  handleCellPlayed(clickedCell, clickedCellIndex)
  // Show the game id.
  // console.log(gameById.innerHTML, 'game ids are good I guess')
  handleResultValidation()
  api.gameUpdate(clickedCellIndex, clickedCell.innerHTML, gameActive, gameById.innerHTML)
}

function handleRestartGame () {
  gameActive = true
  currentPlayer = '✘'
  gameState = ['', '', '', '', '', '', '', '', '']
  statusDisplay.innerHTML = currentPlayerTurn()
  // when the restart is hit, find all .box and return them
  // to an empty string
  document.querySelectorAll('.box')
    .forEach((box) => { box.innerHTML = '' })
}
// select all box classes
// then, for each box, add an event listener
// it's a click, and name it (handleCellClick)
document.querySelectorAll('.box').forEach(box => box.addEventListener('click', handleCellClick))
// select our game reset button by its class
// add an event listener (click) and name it (handleRestartGame)
document.querySelector('.game-reset-button').addEventListener('click', handleRestartGame)

module.exports = {
  onNewGame: onNewGame,
  onGamesIndex: onGamesIndex,
  onGameUpdate: onGameUpdate,
  handleCellClick: handleCellClick,
  handleRestartGame: handleRestartGame,
  handleResultValidation: handleResultValidation,
  handlePlayerChange: handlePlayerChange,
  handleCellPlayed: handleCellPlayed,
  gameById: gameById,
  xWinsFunc: xWinsFunc,
  oWinsFunc: oWinsFunc,
  drawGame: drawGame
}
