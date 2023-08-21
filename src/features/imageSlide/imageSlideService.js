import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/imageslides'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all image slides
const getImageSlides = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single image slide
const getImageSlide = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new image slide
const createImageSlide = async (imageSlideData, token) => {
  const response = await axios.post(API_URL, imageSlideData, getConfig(token))
  return response.data
}

// Update an image slide
const updateImageSlide = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete an image slide
const deleteImageSlide = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const imageSlideService = {
  getImageSlides,
  getImageSlide,
  createImageSlide,
  updateImageSlide,
  deleteImageSlide,
}

export default imageSlideService
