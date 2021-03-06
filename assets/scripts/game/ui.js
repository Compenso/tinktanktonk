'use strict'
const store = require('./../store.js')
// const gameEvents = require('./events')

const newGameSuccess = (response) => {
  $('form').trigger('reset')
  $('.board').show()
  $('#chickendinner').show()
  $('.getgame').show()
  $('#message').hide()
  $('#change-password').hide()
  $('.game-status').show()
  store.games = response.games
}

const newGameFail = (error) => {
  // $('form').trigger('reset')
  if (error) {
    $('#message').text('Ah, no new game for you.')
  }
}

const getGamesSuccess = (response) => {
  $('form').trigger('reset')
  $('#message').text('Getting all games')
  // console.log('game', response)
  store.games = response.games
}

const getGamesFail = (response) => {
  $('form').trigger('reset')
  $('#message').text('No way.  You cannot get the games.')
}
// const gameUpdateSuccess = (response) => {
//   store.games = response.games
// }

module.exports = {
  newGameSuccess: newGameSuccess,
  newGameFail: newGameFail,
  getGamesSuccess: getGamesSuccess,
  getGamesFail: getGamesFail
  // gameUpdateSuccess: gameUpdateSuccess
}
