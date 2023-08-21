import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/messages'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all messages
const getMessages = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single message
const getMessage = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new message
const createMessage = async (messageData, token) => {
  const response = await axios.post(API_URL, messageData, getConfig(token))
  return response.data
}

// Update a message
const updateMessage = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a message
const deleteMessage = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const messageService = {
  getMessages,
  getMessage,
  createMessage,
  updateMessage,
  deleteMessage,
}

export default messageService
