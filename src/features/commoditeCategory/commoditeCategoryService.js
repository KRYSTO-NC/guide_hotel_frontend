import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/commoditecategories'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const getCommoditeCategories = async (token) => {
  const response = await axios.get(API_URL, getConfig(token))
  return response.data
}

const getCommoditeCategorie = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const createCommoditeCategorie = async (data, token) => {
  const response = await axios.post(API_URL, data, getConfig(token))
  return response.data
}

const updateCommoditeCategorie = async (id, data, token) => {
  const response = await axios.put(`${API_URL}/${id}`, data, getConfig(token))
  return response.data
}

const deleteCommoditeCategorie = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, getConfig(token))
  return response.data
}

const uploadCommoditeCategorieIcone = async (id, iconData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }
  const response = await axios.put(`${API_URL}/${id}/icone`, iconData, config)
  return response.data
}

const commoditeCategorieService = {
  getCommoditeCategories,
  getCommoditeCategorie,
  createCommoditeCategorie,
  updateCommoditeCategorie,
  deleteCommoditeCategorie,
  uploadCommoditeCategorieIcone,
}

export default commoditeCategorieService
