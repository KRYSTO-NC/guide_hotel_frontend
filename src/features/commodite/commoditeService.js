import axios from 'axios'

const API_URL_COMMODITE = process.env.REACT_APP_BASE_API_URL + '/commodites'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const getCommodites = async (token) => {
  const response = await axios.get(API_URL_COMMODITE, getConfig(token))
  return response.data
}

const getCommodite = async (id, token) => {
  const response = await axios.get(
    `${API_URL_COMMODITE}/${id}`,
    getConfig(token),
  )
  return response.data
}

const createCommodite = async (data, token) => {
  const response = await axios.post(API_URL_COMMODITE, data, getConfig(token))
  return response.data
}

const updateCommodite = async (id, data, token) => {
  const response = await axios.put(
    `${API_URL_COMMODITE}/${id}`,
    data,
    getConfig(token),
  )
  return response.data
}

const deleteCommodite = async (id, token) => {
  const response = await axios.delete(
    `${API_URL_COMMODITE}/${id}`,
    getConfig(token),
  )
  return response.data
}

const commoditeService = {
  getCommodites,
  getCommodite,
  createCommodite,
  updateCommodite,
  deleteCommodite,
}

export default commoditeService
