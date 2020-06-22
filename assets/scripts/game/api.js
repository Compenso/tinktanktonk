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

const gameUpdate = (cellIndex, value, over, gameId) => {
  console.log('update or whatever...')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games' + `/${gameId}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': cellIndex,
          'value': value
        },
        'over': over
      }
    }
  })
}

const gamesIndex = function () {
  console.log('games index here in api.')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame: newGame,
  gamesIndex: gamesIndex,
  gameUpdate: gameUpdate
}
