const showPartTemplate = require('../templates/part.handlebars')

const getPartsSuccess = function (data) {
  const showPartHTML = showPartTemplate({parts: data.parts})
  $('.part-content').html(showPartHTML)
}

module.exports = {
  getPartsSuccess
}
