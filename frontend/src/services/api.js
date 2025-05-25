const API_URL = 'http://localhost:5000/api';

// Fetch all collections
export async function fetchCollections() {
  const response = await fetch(`${API_URL}/collections`);
  if (!response.ok) throw new Error('Failed to fetch collections');
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