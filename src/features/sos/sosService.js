import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/sos'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all sos entries
const getSosEntries = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single sos entry
const getSos = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new sos entry
const createSos = async (sosData, token) => {
  const response = await axios.post(API_URL, sosData, getConfig(token))
  return response.data
}

// Update a sos entry
const updateSos = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a sos entry
const deleteSos = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const sosService = {
  getSosEntries,
  getSos,
  createSos,
  updateSos,
  deleteSos,
}

export default sosService
