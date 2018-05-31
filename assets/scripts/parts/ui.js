const showPartTemplate = require('../templates/part.handlebars')

const getPartsSuccess = function (data) {
  console.log(data)
  const showPartHTML = showPartTemplate({parts: data.parts})
  $('.part-content').html(showPartHTML)
  $('.status2').text('Successfully loaded your inventory!')
  setTimeout(() => $('.status2').text(''), 3000)
  if (data.parts.length === 0) {
    $('.part-content').html('<h3> You do not have any parts in your inventory</h3>')
  }
}

const loadPartSuccess = function (data) {
  const showPartHTML = showPartTemplate({parts: data.parts})
  $('.part-content').html(showPartHTML)
  if (data.parts.length === 0) {
    $('.part-content').html('<h3> You do not have any parts in your inventory</h3>')
  }
}

const getPartsFailure = function () {
  $('.status2').text('Had an error loading your inventory!')
  setTimeout(() => $('.status2').text(''), 3000)
}

const getCreatePartSuccess = function () {
  $('input[type=text]').val('')
  $('.status2').text('Successfully created new part in inventory!')
  setTimeout(() => $('.status2').text(''), 3000)
}

const getCreatePartFailure = function () {
  $('.status2').text('Had an error creating your inventory part!')
  setTimeout(() => $('.status2').text(''), 3000)
}

const getUpdatePartSuccess = function () {
  $('input[type=text]').val('')
  $('#updateModal').modal('toggle')
  $('.status2').text('Successfully updated your inventory part!')
  setTimeout(() => $('.status2').text(''), 3000)
}

const getUpdatePartFailure = function () {
  $('.footer-status').text('Had an error updating your inventory part!')
  setTimeout(() => $('.footer-status').text(''), 3000)
}

const getDeletePartSuccess = function () {
  $('.status2').text('Successfully deleted your inventory part!')
  setTimeout(() => $('.status2').text(''), 3000)
}

const getDeletePartFailure = function () {
  $('.status2').text('Had an error deleting your inventory part!')
  setTimeout(() => $('.status').text(''), 3000)
}

module.exports = {
  getPartsSuccess,
  getPartsFailure,
  loadPartSuccess,
  getCreatePartSuccess,
  getCreatePartFailure,
  getUpdatePartSuccess,
  getUpdatePartFailure,
  getDeletePartSuccess,
  getDeletePartFailure
}
