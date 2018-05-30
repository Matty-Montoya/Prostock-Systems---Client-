'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const collectionEvents = require('./collections/events')
const partEvents = require('./parts/events')

$(() => {
  authEvents.addHandlers()
  collectionEvents.addHandlers()
  partEvents.addHandlers()
})
