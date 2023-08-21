import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commoditeService from './commoditeService'

const initialState = {
  commodites: [],
  commodite: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all commodites
export const getCommodites = createAsyncThunk(
  'commodite/getCommodites',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeService.getCommodites(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single commodite
export const getCommodite = createAsyncThunk(
  'commodite/getCommodite',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeService.getCommodite(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new commodite
export const createCommodite = createAsyncThunk(
  'commodite/createCommodite',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeService.createCommodite(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update commodite
export const updateCommodite = createAsyncThunk(
  'commodite/updateCommodite',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeService.updateCommodite(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete commodite
export const deleteCommodite = createAsyncThunk(
  'commodite/deleteCommodite',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await commoditeService.deleteCommodite(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const commoditeSlice = createSlice({
  name: 'commodite',
  initialState,
  reducers: {
    resetCommodite: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommodites.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommodites.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.commodites = action.payload
      })
      .addCase(getCommodites.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getCommodite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommodite.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.commodite = action.payload
      })
      .addCase(getCommodite.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createCommodite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCommodite.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.commodites.push(action.payload)
      })
      .addCase(createCommodite.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateCommodite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateCommodite.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.commodites = state.commodites.map((commodite) =>
          commodite.id === action.payload.id ? action.payload : commodite,
        )
      })
      .addCase(updateCommodite.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteCommodite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCommodite.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.commodites = state.commodites.filter(
          (commodite) => commodite.id !== action.payload,
        )
      })
      .addCase(deleteCommodite.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetCommodite } = commoditeSlice.actions
export default commoditeSlice.reducer
