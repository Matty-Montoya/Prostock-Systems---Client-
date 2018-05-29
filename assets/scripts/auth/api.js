const config = require('../config.js')
const store = require('../store.js')

// Sign Up API Request to '/sign-up' depending on config.apiUrl
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}
// Sign In API Request to '/sign-up' depending on config.apiUrl
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

// Change Password API Request to '/sign-up' depending on config.apiUrl
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password/',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// Sign Up Api Request to '/sign-up' depending on config.apiUrl

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out/', // store.user.id
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
