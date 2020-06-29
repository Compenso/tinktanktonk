'use strict'
const store = require('./../store.js')

const signUpSuccess = function (response) {
  // console.log('what is responseData', response)
  $('form').trigger('reset')
  $('#message').text('User Created')
  $('#message').show()

  const newUser = (`
    <h4>userName: ${response.email}</h4>
    <p>Password: ${response._id}</p>
    <br>
    `)
  $('#sign-up').html(newUser)
}

const signUpFail = function () {
  $('form').trigger('reset')
  $('#message').text('User not Created')
  $('#message').show()
  $('#message').removeClass().addClass('failure')
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Successful sign in')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#password-change').show()
  // $('.board').show()
  // $('.idofgame').show()
  $('#newgame').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('.gameboardtitle').show()
  store.user = response.user
}

const onSignInFail = function () {
  $('form').trigger('reset')
  $('#message').text('Check your password')
}

const onChangePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password Updated')
  $('#change-password').hide()
}

const onChangePasswordFail = function () {
  $('form').trigger('reset')
  $('#message').text('Check you password')
}

const onSignOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Goodbye!')
  $('#sign-in').show()
  $('#change-password').hide()
  $('.board').hide()
  $('.idofgame').hide()
  $('#newgame').hide()
  $('#sign-out').hide()
  // $('#message').addClass('success')
  store.user = null
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFail: signUpFail,
  onSignInSuccess: onSignInSuccess,
  onSignInFail: onSignInFail,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFail: onChangePasswordFail,
  onSignOutSuccess: onSignOutSuccess
}
