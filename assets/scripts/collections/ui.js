'use strict'

const showCollectionTemplate = require('../templates/collections.handlebars')

const getCollectionsSuccess = function (data) {
  console.log(data.collections)
  for (let i = 0; i < data.collections.length; i++) {
    if (data.collections[i].collection_name === 'Alien Workshop') {
      console.log(data.collections[i].parts)
    }
  }
  const showCollectionHTML = showCollectionTemplate({collections: data.collections})
  $('.part-content').html(showCollectionHTML)
}

module.exports = {
  getCollectionsSuccess
}
