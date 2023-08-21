import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import sosService from './sosService'

const initialSosState = {
  sosEntries: [],
  sos: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all sos entries
export const getSosEntries = createAsyncThunk(
  'sos/getSosEntries',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await sosService.getSosEntries(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single sos entry
export const getSos = createAsyncThunk('sos/getSos', async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user
    return await sosService.getSos(id, token)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

// Create new sos entry
export const createSos = createAsyncThunk(
  'sos/createSos',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await sosService.createSos(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update sos entry
export const updateSos = createAsyncThunk(
  'sos/updateSos',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await sosService.updateSos(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete sos entry
export const deleteSos = createAsyncThunk(
  'sos/deleteSos',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await sosService.deleteSos(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)
export const sosSlice = createSlice({
  name: 'sos',
  initialState: initialSosState,
  reducers: {
    resetSos: (state) => initialSosState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSosEntries.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSosEntries.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sosEntries = action.payload
      })
      .addCase(getSosEntries.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sos = action.payload
      })
      .addCase(getSos.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createSos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sosEntries.push(action.payload)
      })
      .addCase(createSos.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateSos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateSos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sosEntries = state.sosEntries.map((sos) =>
          sos.id === action.payload.id ? action.payload : sos,
        )
      })
      .addCase(updateSos.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteSos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteSos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sosEntries = state.sosEntries.filter(
          (sos) => sos.id !== action.payload,
        )
      })
      .addCase(deleteSos.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetSos } = sosSlice.actions
export default sosSlice.reducer
