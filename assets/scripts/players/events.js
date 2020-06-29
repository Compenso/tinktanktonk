'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  // prevent the webpage from refreshing
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  // console log the data that we are getting from the form field
  // console.log(data)
  // console.log('pumkins events center')

  // the api is the next step, but we're addressing it below.
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  // console.log('didja get here')
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
}

const onChangePassword = function (event) {
  // console.log('Well, have you made it to the password event file?')
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  store.reset()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

// console.log('Here we go.')

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
