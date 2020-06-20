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

$(() => {
  // Start the player at X
  let currentPlayer = '✕'

  // Our box click event handler
  const onBoxClick = (event) => {
    // Select the box that was clicked, event.target
    const box = $(event.target)
    console.log('click', box.data('cell-index'))
    // Set the boxs background to `transparent`
    // So we can see the image behind the box.
    // Then set the text to the current player
    box.css('background', 'transparent').text(currentPlayer)

    // Change the current player
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }

  // Select all of the boxes, $('.box'), add an event listener so that `on`
  // every 'click' the `onBoxClick` event handler is called.
  $('.box').on('click', onBoxClick)
})

module.exports = {
  onNewGame: onNewGame,
  onGamesIndex: onGamesIndex,
  onGameUpdate: onGameUpdate
}
