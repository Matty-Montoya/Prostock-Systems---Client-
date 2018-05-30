'use strict '

const config = require('../config')

const getParts = function () {
  return $.ajax({
    url: config.apiUrl + '/parts',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

module.exports = {
  getParts
}
