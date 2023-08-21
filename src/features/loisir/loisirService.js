import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/loisirs'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all loisirs
const getLoisirs = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single loisir
const getLoisir = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new loisir
const createLoisir = async (loisirData, token) => {
  const response = await axios.post(API_URL, loisirData, getConfig(token))
  return response.data
}

// Update a loisir
const updateLoisir = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a loisir
const deleteLoisir = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const loisirService = {
  getLoisirs,
  getLoisir,
  createLoisir,
  updateLoisir,
  deleteLoisir,
}

export default loisirService
