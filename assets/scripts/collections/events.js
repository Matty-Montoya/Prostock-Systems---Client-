'use strict'

const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#get-collections').on('click', onGetCollections)
}

const onGetCollections = (event) => {
  event.preventDefault()
  api.getCollections()
    .then(ui.getCollectionsSuccess)
}

module.exports = {
  addHandlers
}
