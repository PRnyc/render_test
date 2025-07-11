import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL ||  'https://render-test-yse8.onrender.com/api/notes';

// Temporary debug
console.log('Current API configuration:', {
  baseUrl,
  fullUrl: `${baseUrl}/notes`,
  env: import.meta.env.VITE_API_URL
});

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    console.error('Error fetching notes:', {
      url: baseUrl,
      status: error.response?.status,
      data: error.response?.data
    })
    throw error
  }
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

// TODO: Remove this test example in production
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
    getAll,
    create,
    update,
    testConnection  // Optional: helpful for debugging
};