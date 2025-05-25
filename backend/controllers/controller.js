const { Collection } = require('../models/item'); // Import the Collection model

// Create a new collection
exports.createCollection = async (req, res) => {
  try {
    const newCollection = new Collection(req.body);
    const savedCollection = await newCollection.save();
    res.status(201).json(savedCollection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all collections
exports.getCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a collection
exports.updateCollection = async (req, res) => {
  try {
    const updatedCollection = await Collection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCollection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a collection
exports.deleteCollection = async (req, res) => {
  try {
    await Collection.findByIdAndDelete(req.params.id);
    res.json({ message: 'Col·lecció esborrada correctament' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add an item to a collection
exports.addItemToCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id);
    if (!collection) return res.status(404).json({ message: 'Collection not found' });
    console.log(req.body); // Log the request body
    collection.items.push(req.body); // Add the new item to the items array
    await collection.save();
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an item in a collection
exports.updateItemInCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.collectionId);
    if (!collection) return res.status(404).json({ message: 'Collection not found' });

    const item = collection.items.id(req.params.itemId); // Find the item by its ID
    if (!item) return res.status(404).json({ message: 'Item not found' });

    Object.assign(item, req.body); // Update the item's fields
    await collection.save();
    res.json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an item from a collection
exports.deleteItemFromCollection = async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.collectionId);
    if (!collection) return res.status(404).json({ message: 'Collection not found' });

    // Find the index of the item to remove
    const itemIndex = collection.items.findIndex(item => item._id.toString() === req.params.itemId);
    if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });

    // Remove the item from the array
    collection.items.splice(itemIndex, 1);

    // Save the updated collection
    await collection.save();
    res.json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};