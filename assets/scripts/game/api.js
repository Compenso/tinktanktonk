'use strict'
const config = require('./../config')
const store = require('./../store')

const newGame = () => {
  console.log('new game info here.  At the api.')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame: newGame
}
