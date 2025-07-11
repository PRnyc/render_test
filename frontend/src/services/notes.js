import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'api';

// Example fetch:
fetch(`${API_BASE_URL}/notes`)
  .then(response => response.json())
  .then(data => console.log(data));

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
    getAll,
    create,
    update 
}