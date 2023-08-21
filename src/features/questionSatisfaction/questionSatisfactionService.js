import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/questionsatisfaction'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all questions
const getQuestions = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single question
const getQuestion = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new question
const createQuestion = async (questionData, token) => {
  const response = await axios.post(API_URL, questionData, getConfig(token))
  return response.data
}

// Update a question
const updateQuestion = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a question
const deleteQuestion = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const questionService = {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
}

export default questionService
