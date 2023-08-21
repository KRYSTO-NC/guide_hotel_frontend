import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/hotelPlans'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all hotel plans
const getHotelPlans = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single hotel plan
const getHotelPlan = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new hotel plan
const createHotelPlan = async (hotelPlanData, token) => {
  const response = await axios.post(API_URL, hotelPlanData, getConfig(token))
  return response.data
}

// Update a hotel plan
const updateHotelPlan = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a hotel plan
const deleteHotelPlan = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const hotelPlanService = {
  getHotelPlans,
  getHotelPlan,
  createHotelPlan,
  updateHotelPlan,
  deleteHotelPlan,
}

export default hotelPlanService
