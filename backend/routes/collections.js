const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/controller');

// Collection routes
router.post('/', collectionController.createCollection); // Create a new collection
router.get('/', collectionController.getCollections); // Get all collections
router.put('/:id', collectionController.updateCollection); // Update a collection
router.delete('/:id', collectionController.deleteCollection); // Delete a collection

// Item routes (embedded in collections)
router.post('/:id/items', collectionController.addItemToCollection); // Add an item to a collection
router.put('/:collectionId/items/:itemId', collectionController.updateItemInCollection); // Update an item in a collection
router.delete('/:collectionId/items/:itemId', collectionController.deleteItemFromCollection); // Delete an item from a collection

module.exports = router;