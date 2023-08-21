import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/formsatisfactions'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all form satisfactions
const getFormSatisfactions = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single form satisfaction
const getFormSatisfaction = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new form satisfaction
const createFormSatisfaction = async (formData, token) => {
  const response = await axios.post(API_URL, formData, getConfig(token))
  return response.data
}

// Update a form satisfaction
const updateFormSatisfaction = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a form satisfaction
const deleteFormSatisfaction = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const formSatisfactionService = {
  getFormSatisfactions,
  getFormSatisfaction,
  createFormSatisfaction,
  updateFormSatisfaction,
  deleteFormSatisfaction,
}

export default formSatisfactionService
