const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String
});

const CollectionSchema = new mongoose.Schema({
    name: String,
    items: [ItemSchema]
});

module.exports = mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Collection', CollectionSchema);