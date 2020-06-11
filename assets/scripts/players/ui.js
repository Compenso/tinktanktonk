'use strict'
const store = require('./../store.js')

const signUpSuccess = function (response) {
  // console.log('what is responseData', response)
  $('form').trigger('reset')
  $('#message').text('User Created')
  $('#message').show()
  $('#message').removeClass().addClass('success')

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
  store.user = response.user
}

const onSignInFail = function () {
  $('form').trigger('reset')
  $('#message').text('Failed to sign in')
}

const onChangePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password Updated')
}

const onChangePasswordFail = function () {
  $('form').trigger('reset')
  $('#message').text('password update failed')
}

const onSignOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Goodbye!')
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
