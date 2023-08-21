import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/loisirCategories'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all loisirCategories
const getLoisirCategories = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single loisirCategorie
const getLoisirCategorie = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new loisirCategorie
const createLoisirCategorie = async (loisirCategorieData, token) => {
  const response = await axios.post(
    API_URL,
    loisirCategorieData,
    getConfig(token),
  )
  return response.data
}

// Update a loisirCategorie
const updateLoisirCategorie = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete a loisirCategorie
const deleteLoisirCategorie = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const loisirCategorieService = {
  getLoisirCategories,
  getLoisirCategorie,
  createLoisirCategorie,
  updateLoisirCategorie,
  deleteLoisirCategorie,
}

export default loisirCategorieService
