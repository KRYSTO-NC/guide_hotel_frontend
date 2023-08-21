import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/eventCalendars'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all events
const getEvents = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single event
const getEvent = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new event
const createEvent = async (eventData, token) => {
  const response = await axios.post(API_URL, eventData, getConfig(token))
  return response.data
}

// Update an event
const updateEvent = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete an event
const deleteEvent = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const eventCalendarService = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
}

export default eventCalendarService
