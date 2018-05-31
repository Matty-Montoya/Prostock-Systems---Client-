const showPartTemplate = require('../templates/part.handlebars')

const getPartsSuccess = function (data) {
  const showPartHTML = showPartTemplate({parts: data.parts})
  $('.part-content').html(showPartHTML)
}

const createPartSuccess = function () {
  $('input[type=text]').val('')
  $('.status').text('Successfully created new part in inventory!')
  setTimeout(() => $('.status').text(''), 3000)
}

const updatePartSuccess = function () {

}

module.exports = {
  getPartsSuccess,
  createPartSuccess
}
