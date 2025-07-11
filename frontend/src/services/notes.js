import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL || '/api';  // Define baseUrl properly

// Temporary debug
console.log('Current API configuration:', {
  baseUrl,
  fullUrl: `${baseUrl}/notes`,
  env: import.meta.env.VITE_API_URL
});

const getAll = () => {
  try {const request = axios.get(baseUrl)
  return request.then(response => response.data)}
  catch (error) {
    console.error('Error fetching notes:', {url: baseUrl,
      status: error.response?.status,
      data})
    throw error
  }
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// Test example (you can remove this in production)
const testConnection = () => {
  console.log(`Using API base URL: ${baseUrl}`)
  return axios.get(baseUrl)
    .then(response => {
      console.log('Connection successful', response.data)
      return response.data
    })
    .catch(error => {
      console.error('Connection failed', error)
      throw error
    })
}

export default { 
    getAll,
    create,
    update,
    testConnection  // Optional: helpful for debugging
}