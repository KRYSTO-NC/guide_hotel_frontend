import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import loisirService from './loisirService'

const initialState = {
  loisirs: [],
  loisir: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all loisirs
export const getLoisirs = createAsyncThunk(
  'loisir/getLoisirs',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await loisirService.getLoisirs(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single loisir
export const getLoisir = createAsyncThunk(
  'loisir/getLoisir',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await loisirService.getLoisir(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new loisir
export const createLoisir = createAsyncThunk(
  'loisir/createLoisir',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await loisirService.createLoisir(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update loisir
export const updateLoisir = createAsyncThunk(
  'loisir/updateLoisir',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await loisirService.updateLoisir(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete loisir
export const deleteLoisir = createAsyncThunk(
  'loisir/deleteLoisir',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await loisirService.deleteLoisir(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const loisirSlice = createSlice({
  name: 'loisir',
  initialState,
  reducers: {
    resetLoisir: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoisirs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getLoisirs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirs = action.payload
      })
      .addCase(getLoisirs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getLoisir.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getLoisir.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisir = action.payload
      })
      .addCase(getLoisir.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createLoisir.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createLoisir.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirs.push(action.payload)
      })
      .addCase(createLoisir.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateLoisir.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateLoisir.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirs = state.loisirs.map((loisir) =>
          loisir.id === action.payload.id ? action.payload : loisir,
        )
      })
      .addCase(updateLoisir.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteLoisir.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteLoisir.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirs = state.loisirs.filter(
          (loisir) => loisir.id !== action.payload,
        )
      })
      .addCase(deleteLoisir.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetLoisir } = loisirSlice.actions
export default loisirSlice.reducer
