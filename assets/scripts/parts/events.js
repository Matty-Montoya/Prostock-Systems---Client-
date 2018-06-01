'use strict'

// Retrieving information from form fields
const getFormFields = require('../../../lib/get-form-fields')
// Requiring API and all functons that are placed in module exports
const api = require('./api')
// Requiring all UI jQuery for the event function's promise chain
const ui = require('./ui')

// addHandlers are sent to being invoked in the index,js file
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

// onCreatePart function that links to createPart APi Call
const onCreatePart = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createPart(data)
    .then(ui.getCreatePartSuccess)
    .then(() => onLoadParts(event))
    .catch(ui.getCreatePartFailure)
}

// This function reloads the part-content div whenever an action is expected to take place.
const onLoadParts = (event) => {
  api.getParts()
    .then(ui.loadPartSuccess)
}

// onGetParts function that links to getParts API Call
const onGetParts = (event) => {
  api.getParts()
    .then(ui.getPartsSuccess)
}

// onUpdatePart function that links to updateParts API Call
const onUpdatePart = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const partId = $(event.target).closest('div').attr('data-id')
  api.updateParts(data, partId)
    .then(ui.getUpdatePartSuccess)
    .then(() => onLoadParts())
    .catch(ui.getUpdatePartFailure)
}

// onDeletePart function that links to deletePart API Call
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
