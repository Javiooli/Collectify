const mongoose = require('mongoose');

// Define the schema for items
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  image: { type: String }, // Ensure the image property is defined
});

// Define the schema for collections
const CollectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  items: [ItemSchema], // Embedded array of items
});

const Collection = mongoose.model('Collection', CollectionSchema);

module.exports = { Collection };