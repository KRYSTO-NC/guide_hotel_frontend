import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/homerules'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all home rules
const getHomeRules = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single home rule
const getHomeRule = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new home rule
const createHomeRule = async (ruleData, token) => {
  const response = await axios.post(API_URL, ruleData, getConfig(token))
  return response.data
}

// Update a home rule
const updateHomeRule = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a home rule
const deleteHomeRule = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const homeRuleService = {
  getHomeRules,
  getHomeRule,
  createHomeRule,
  updateHomeRule,
  deleteHomeRule,
}

export default homeRuleService
