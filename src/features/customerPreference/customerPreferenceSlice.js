import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customerPreferenceService from './customerPreferenceService'

const initialPreferenceState = {
  preferences: [],
  preference: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all preferences
export const getPreferences = createAsyncThunk(
  'preference/getPreferences',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await customerPreferenceService.getCustomerPreferences(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single preference
export const getPreference = createAsyncThunk(
  'preference/getPreference',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await customerPreferenceService.getCustomerPreference(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new preference
export const createPreference = createAsyncThunk(
  'preference/createPreference',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await customerPreferenceService.createCustomerPreference(
        data,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update preference
export const updatePreference = createAsyncThunk(
  'preference/updatePreference',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await customerPreferenceService.updateCustomerPreference(
        id,
        data,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete preference
export const deletePreference = createAsyncThunk(
  'preference/deletePreference',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await customerPreferenceService.deleteCustomerPreference(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const preferenceSlice = createSlice({
  name: 'preference',
  initialState: initialPreferenceState,
  reducers: {
    resetPreference: (state) => initialPreferenceState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPreferences.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPreferences.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.preferences = action.payload
      })
      .addCase(getPreferences.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getPreference.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPreference.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.preference = action.payload
      })
      .addCase(getPreference.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createPreference.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPreference.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.preferences.push(action.payload)
      })
      .addCase(createPreference.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updatePreference.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updatePreference.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.preferences = state.preferences.map((preference) =>
          preference.id === action.payload.id ? action.payload : preference,
        )
      })
      .addCase(updatePreference.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deletePreference.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePreference.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.preferences = state.preferences.filter(
          (preference) => preference.id !== action.payload,
        )
      })
      .addCase(deletePreference.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetPreference } = preferenceSlice.actions
export default preferenceSlice.reducer
