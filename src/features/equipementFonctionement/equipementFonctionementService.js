import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/equipementfonctionements'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

// Get all equipementfonctionements
const getEquipementFonctionements = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

// Get single equipementfonctionement
const getEquipementFonctionement = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

// Create a new equipementfonctionement
const createEquipementFonctionement = async (equipementData, token) => {
  const response = await axios.post(API_URL, equipementData, getConfig(token))
  return response.data
}

// Update an equipementfonctionement
const updateEquipementFonctionement = async (id, updatedData, token) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedData,
    getConfig(token),
  )
  return response.data
}

// Delete an equipementfonctionement
const deleteEquipementFonctionement = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const equipementFonctionementService = {
  getEquipementFonctionements,
  getEquipementFonctionement,
  createEquipementFonctionement,
  updateEquipementFonctionement,
  deleteEquipementFonctionement,
}

export default equipementFonctionementService
