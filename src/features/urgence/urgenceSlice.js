import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import urgenceService from './urgenceService'

const initialUrgenceState = {
  urgences: [],
  urgence: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getUrgences = createAsyncThunk(
  'urgence/getUrgences',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceService.getUrgences(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const getUrgence = createAsyncThunk(
  'urgence/getUrgence',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceService.getUrgence(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const createUrgence = createAsyncThunk(
  'urgence/createUrgence',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceService.createUrgence(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const updateUrgence = createAsyncThunk(
  'urgence/updateUrgence',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceService.updateUrgence(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteUrgence = createAsyncThunk(
  'urgence/deleteUrgence',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await urgenceService.deleteUrgence(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const urgenceSlice = createSlice({
  name: 'urgence',
  initialState: initialUrgenceState,
  reducers: {
    resetUrgence: (state) => initialUrgenceState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUrgences.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUrgences.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgences = action.payload
      })
      .addCase(getUrgences.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getUrgence.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUrgence.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgence = action.payload
      })
      .addCase(getUrgence.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createUrgence.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createUrgence.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgences.push(action.payload)
      })
      .addCase(createUrgence.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateUrgence.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUrgence.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgences = state.urgences.map((urgence) =>
          urgence.id === action.payload.id ? action.payload : urgence,
        )
      })
      .addCase(updateUrgence.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteUrgence.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteUrgence.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgences = state.urgences.filter(
          (urgence) => urgence.id !== action.payload,
        )
      })
      .addCase(deleteUrgence.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetUrgence } = urgenceSlice.actions
export default urgenceSlice.reducer
