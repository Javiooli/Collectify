const express = require('express');
const router = express.Router();
const itemController = require('../controllers/controller');

// Routes for items
router.post('/', itemController.createItem); // Create a new item
router.get('/', itemController.getItems); // Get all items
router.put('/:id', itemController.updateItem); // Update an item by ID
router.delete('/:id', itemController.deleteItem); // Delete an item by ID

module.exports = router;