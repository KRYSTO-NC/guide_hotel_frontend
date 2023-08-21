import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/horraires'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all horraires
const getHorraires = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single horraire
const getHorraire = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new horraire
const createHorraire = async (horraireData, token) => {
  const response = await axios.post(API_URL, horraireData, getConfig(token))
  return response.data
}

// Update a horraire
const updateHorraire = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a horraire
const deleteHorraire = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const horraireService = {
  getHorraires,
  getHorraire,
  createHorraire,
  updateHorraire,
  deleteHorraire,
}

export default horraireService
