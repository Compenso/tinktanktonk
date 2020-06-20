'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const gameEvents = require('./game/events')
const playersEvents = require('./players/events')
const gameEvents = require('./game/events')

$(() => {
  $('.board').hide()
  console.log('This should show up first.')
  $('#sign-up').on('submit', playersEvents.onSignUp)
  $('#sign-in').on('submit', playersEvents.onSignIn)
  $('#change-password').on('submit', playersEvents.onChangePassword)
  $('#sign-out').on('submit', playersEvents.onSignOut)
  $('#newgame').on('click', gameEvents.onNewGame)
  $('#gamesindex').on('click', gameEvents.onGamesIndex)
})
