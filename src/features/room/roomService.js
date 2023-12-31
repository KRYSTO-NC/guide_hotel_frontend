import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/rooms'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all rooms
const getRooms = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single room
const getRoom = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new room
const createRoom = async (roomData, token) => {
  const response = await axios.post(API_URL, roomData, getConfig(token))
  return response.data
}

// Update a room
const updateRoom = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a room
const deleteRoom = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const roomService = {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
}

export default roomService
