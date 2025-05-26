const API_URL = 'http://213.97.62.3:3010/api';

// Fetch all collections
export async function fetchCollections() {
  const response = await fetch(`${API_URL}/collections`);
  if (!response.ok) throw new Error('Failed to fetch collections');
  return response.json();
}

// Create a new collection
export async function createCollection(collection) {
  const response = await fetch(`${API_URL}/collections`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(collection),
  });
  if (!response.ok) throw new Error('Failed to create collection');
  return response.json();
}

// Update a collection
export async function updateCollection(id, collection) {
  const response = await fetch(`${API_URL}/collections/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(collection),
  });
  if (!response.ok) throw new Error('Failed to update collection');
  return response.json();
}

// Delete a collection
export async function deleteCollection(id) {
  const response = await fetch(`${API_URL}/collections/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete collection');
  return response.json();
}

// Add an item to a collection
export async function addItemToCollection(collectionId, item) {
  const response = await fetch(`${API_URL}/collections/${collectionId}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  if (!response.ok) throw new Error('Failed to add item to collection');
  return response.json();
}

// Update an item in a collection
export async function updateItemInCollection(collectionId, itemId, item) {
  const response = await fetch(`${API_URL}/collections/${collectionId}/items/${itemId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  if (!response.ok) throw new Error('Failed to update item in collection');
  return response.json();
}

// Delete an item from a collection
export async function deleteItemFromCollection(collectionId, itemId) {
  const response = await fetch(`${API_URL}/collections/${collectionId}/items/${itemId}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete item from collection');
  return response.json();
}