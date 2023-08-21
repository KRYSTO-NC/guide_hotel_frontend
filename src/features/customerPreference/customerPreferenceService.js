import axios from 'axios'

const API_URL_PREFERENCE =
  process.env.REACT_APP_BASE_API_URL + '/customerpreferences'

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const getCustomerPreferences = async (token) => {
  const response = await axios.get(API_URL_PREFERENCE, getConfig(token))
  return response.data
}

const getCustomerPreference = async (id, token) => {
  const response = await axios.get(
    `${API_URL_PREFERENCE}/${id}`,
    getConfig(token),
  )
  return response.data
}

const createCustomerPreference = async (data, token) => {
  const response = await axios.post(API_URL_PREFERENCE, data, getConfig(token))
  return response.data
}

const updateCustomerPreference = async (id, data, token) => {
  const response = await axios.put(
    `${API_URL_PREFERENCE}/${id}`,
    data,
    getConfig(token),
  )
  return response.data
}

const deleteCustomerPreference = async (id, token) => {
  const response = await axios.delete(
    `${API_URL_PREFERENCE}/${id}`,
    getConfig(token),
  )
  return response.data
}

const uploadCustomerPreferenceLogo = async (id, logoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }
  const response = await axios.put(
    `${API_URL_PREFERENCE}/${id}/logo`,
    logoData,
    config,
  )
  return response.data
}

const uploadCustomerPreferenceHomeCover = async (id, coverData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }
  const response = await axios.put(
    `${API_URL_PREFERENCE}/${id}/homecover`,
    coverData,
    config,
  )
  return response.data
}

const customerPreferenceService = {
  getCustomerPreferences,
  getCustomerPreference,
  createCustomerPreference,
  updateCustomerPreference,
  deleteCustomerPreference,
  uploadCustomerPreferenceLogo,
  uploadCustomerPreferenceHomeCover,
}

export default customerPreferenceService
