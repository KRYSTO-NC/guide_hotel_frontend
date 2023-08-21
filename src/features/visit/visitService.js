import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/visits'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const getVisits = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

const getVisit = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const createVisit = async (visitData, token) => {
  const response = await axios.post(API_URL, visitData, getConfig(token))
  return response.data
}

const updateVisit = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

const deleteVisit = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const visitService = {
  getVisits,
  getVisit,
  createVisit,
  updateVisit,
  deleteVisit,
}

export default visitService
