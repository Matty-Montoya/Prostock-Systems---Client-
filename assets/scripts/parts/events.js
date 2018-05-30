const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  $('#sign-in').on('submit', onGetParts)
}

const onGetParts = (event) => {
  event.preventDefault()
  console.log('hello')
  api.getParts()
    .then(ui.getPartsSuccess)
}

module.exports = {
  addHandlers
}
