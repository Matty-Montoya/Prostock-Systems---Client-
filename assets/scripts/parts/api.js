'use strict '

const config = require('../config')
const store = require('../store')

const createPart = function (data) {
  return $.ajax({
    url: config.apiUrl + '/parts',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const getParts = function (data) {
  return $.ajax({
    url: config.apiUrl + '/parts',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateParts = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/parts/' + data.part.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroyParts = function (data) {
  return $.ajax({
    url: config.apiUrl + '/parts/' + data.parts.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getParts,
  createPart,
  updateParts,
  destroyParts
}
