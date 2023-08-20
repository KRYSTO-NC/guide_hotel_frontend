import axios from 'axios'

const API_URL = process.env.REACT_APP_BASE_API_URL + '/customers'

// Get all customers
const getCustomers = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

// Get single customer
const getCustomer = async (id, token) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

// Create a new customer
const createCustomer = async (customerData, token) => {
  const response = await axios.post(API_URL, customerData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

// Update a customer
const updateCustomer = async (id, updatedData, token) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

// Delete a customer
const deleteCustomer = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

const customerService = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
}

export default customerService
