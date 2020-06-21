'use strict'
const store = require('./../store.js')

const newGameSuccess = (response) => {
  $('form').trigger('reset')
  $('#message').text('New Game Started')
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
  console.log(response)
  store.games = response.games
}

const getGamesFail = (response) => {
  $('form').trigger('reset')
  $('#message').text('No way.  You cannot get the games.')
}

module.exports = {
  newGameSuccess: newGameSuccess,
  newGameFail: newGameFail,
  getGamesSuccess: getGamesSuccess,
  getGamesFail: getGamesFail
}
