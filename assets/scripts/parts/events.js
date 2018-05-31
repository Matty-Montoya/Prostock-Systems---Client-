'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const addHandlers = () => {
  // $('#sign-in').on('submit', onGetParts)
  $('#create-part').on('submit', onCreatePart)
  $('#update-part').on('submit', onUpdatePart)
  $('#create-inventory').on('click', function () {
    $('#create-part').removeClass('hidden')
    $('#update-part').addClass('hidden')
    $('#destroy-part').addClass('hidden')
  })
  $('#update-inventory').on('click', function () {
    $('#update-part').removeClass('hidden')
    $('#create-part').addClass('hidden')
    $('#destroy-part').addClass('hidden')
  })
  $('#destroy-inventory').on('click', function () {
    $('#destroy-part').removeClass('hidden')
    $('#create-part').addClass('hidden')
    $('#update-part').addClass('hidden')
  })
  $('#destroy-part').on('submit', onDeletePart)
  $('.part-content').on('submit', '.update-part', onUpdatePart)
  $('.part-content').on('click', '.destroy-id', onDeletePart)
}

const onCreatePart = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createPart(data)
    .then(ui.createPartSuccess)
    .then(() => onGetParts(event))
}

const onGetParts = () => {
  api.getParts()
    .then(ui.getPartsSuccess)
}

const onUpdatePart = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const partId = $(event.target).closest('div').attr('data-id')
  console.log(data)
  console.log(data)
  api.updateParts(data, partId)
    .then(function () {
      console.log()
      console.log(partId)
    })
    .then(ui.getUpdateSuccess)
}

const onDeletePart = (event) => {
  console.log('hello')
  event.preventDefault()
  const partId = $(event.target).closest('button').attr('data-id')
  api.destroyParts(partId)
    .then(ui.deletePartSuccess)
    .then(() => onGetParts())
}

module.exports = {
  addHandlers,
  onGetParts
}
