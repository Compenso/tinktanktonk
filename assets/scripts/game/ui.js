'use strict'
const store = require('./../store.js')

const newGameSuccess = (response) => {
  $('form').trigger('reset')
  $('#message').text('New Game Started')
  $('#message').show()
  // $('#message').removeClass().addClass('success')
  store.user = response.user
}

const newGameFail = (response) => {
  $('form').trigger('reset')
  $('#message').text('Ah, no new game for you.')
}

module.exports = {
  newGameSuccess: newGameSuccess,
  newGameFail: newGameFail
}
