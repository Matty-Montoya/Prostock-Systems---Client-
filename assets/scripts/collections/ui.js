'use strict'

const showCollectionTemplate = require('../templates/collections.handlebars')

const getCollectionsSuccess = function (data) {
  const showCollectionHTML = showCollectionTemplate({collections: data.collections})
  $('.collection-content').html(showCollectionHTML)
}

module.exports = {
  getCollectionsSuccess
}
