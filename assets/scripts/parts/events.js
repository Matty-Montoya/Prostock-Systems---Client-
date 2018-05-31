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
    .then(ui.getCreatePartSuccess)
    .then(() => onLoadParts(event))
    .catch(ui.getCreatePartFailure)
}

const onLoadParts = (event) => {
  api.getParts()
    .then(ui.loadPartSuccess)
}

const onGetParts = (event) => {
  api.getParts()
    .then(ui.getPartsSuccess)
    .then(ui.getPartsFailure)
}

const onUpdatePart = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const partId = $(event.target).closest('div').attr('data-id')
  api.updateParts(data, partId)
    .then(ui.getUpdatePartSuccess)
    .then(() => onLoadParts())
    .catch(ui.getUpdatePartFailure)
}

const onDeletePart = (event) => {
  console.log('hello')
  event.preventDefault()
  const partId = $(event.target).closest('button').attr('data-id')
  api.destroyParts(partId)
    .then(ui.getDeletePartSuccess)
    .then(() => onLoadParts())
    .catch(ui.getDeletePartFailure)
}

module.exports = {
  addHandlers,
  onGetParts
}
