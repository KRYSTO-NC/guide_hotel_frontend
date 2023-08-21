import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/urgenceCategories'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all urgenceCategories
const getUrgenceCategories = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single urgenceCategory
const getUrgenceCategory = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new urgenceCategory
const createUrgenceCategory = async (urgenceCategoryData, token) => {
  const response = await axios.post(
    API_URL,
    urgenceCategoryData,
    getConfig(token),
  )
  return response.data
}

// Update a urgenceCategory
const updateUrgenceCategory = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a urgenceCategory
const deleteUrgenceCategory = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const urgenceCategorieService = {
  getUrgenceCategories,
  getUrgenceCategory,
  createUrgenceCategory,
  updateUrgenceCategory,
  deleteUrgenceCategory,
}

export default urgenceCategorieService
