import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/urgences'

const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

const getUrgences = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

const getUrgence = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const createUrgence = async (urgenceData, token) => {
  const response = await axios.post(API_URL, urgenceData, getConfig(token))
  return response.data
}

const updateUrgence = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

const deleteUrgence = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const urgenceService = {
  getUrgences,
  getUrgence,
  createUrgence,
  updateUrgence,
  deleteUrgence,
}

export default urgenceService
