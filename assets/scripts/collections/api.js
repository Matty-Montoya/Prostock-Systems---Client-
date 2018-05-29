'use strict '

const config = require('../config')

const getCollections = function () {
  return $.ajax({
    url: config.apiUrl + '/collections',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

module.exports = {
  getCollections
}
