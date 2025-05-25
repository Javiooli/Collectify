const mongoose = require('mongoose');

// Define the schema for items
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
});

// Define the schema for collections
const CollectionSchema = new mongoose.Schema({
  name: String,
  items: [ItemSchema], // Array of items
});

// Export both models
const Item = mongoose.model('Item', ItemSchema);
const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = { Item, Collection };