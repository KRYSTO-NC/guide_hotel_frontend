import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/guests'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const getGuests = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

const getGuest = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const createGuest = async (data, token) => {
  const response = await axios.post(API_URL, data, getConfig(token))
  return response.data
}

const updateGuest = async (id, data, token) => {
  const response = await axios.put(`${API_URL}/${id}`, data, getConfig(token))
  return response.data
}

const deleteGuest = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const guestService = {
  getGuests,
  getGuest,
  createGuest,
  updateGuest,
  deleteGuest,
}

export default guestService
