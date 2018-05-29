'use strict'

const showCollectionTemplate = require('../templates/collections.handlebars')

const getCollectionsSuccess = function (data) {
  const showCollectionHTML = showCollectionTemplate({collections: data.collections})
  $('.content').html(showCollectionHTML)
}

module.exports = {
  getCollectionsSuccess
}
