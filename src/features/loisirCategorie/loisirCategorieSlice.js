import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import loisirCategorieService from './loisirCategorieService'

const initialState = {
  loisirCategories: [],
  loisirCategorie: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all loisirCategories
export const getLoisirCategories = createAsyncThunk(
  'loisirCategorie/getLoisirCategories',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await loisirCategorieService.getLoisirCategories(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single loisirCategorie
export const getLoisirCategorie = createAsyncThunk(
  'loisirCategorie/getLoisirCategorie',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await loisirCategorieService.getLoisirCategorie(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new loisirCategorie
export const createLoisirCategorie = createAsyncThunk(
  'loisirCategorie/createLoisirCategorie',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await loisirCategorieService.createLoisirCategorie(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update loisirCategorie
export const updateLoisirCategorie = createAsyncThunk(
  'loisirCategorie/updateLoisirCategorie',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await loisirCategorieService.updateLoisirCategorie(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete loisirCategorie
export const deleteLoisirCategorie = createAsyncThunk(
  'loisirCategorie/deleteLoisirCategorie',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await loisirCategorieService.deleteLoisirCategorie(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const loisirCategorieSlice = createSlice({
  name: 'loisirCategorie',
  initialState,
  reducers: {
    resetLoisirCategorie: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoisirCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getLoisirCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirCategories = action.payload
      })
      .addCase(getLoisirCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getLoisirCategorie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getLoisirCategorie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirCategorie = action.payload
      })
      .addCase(getLoisirCategorie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createLoisirCategorie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createLoisirCategorie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirCategories.push(action.payload)
      })
      .addCase(createLoisirCategorie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateLoisirCategorie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateLoisirCategorie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirCategories = state.loisirCategories.map((loisirCategorie) =>
          loisirCategorie.id === action.payload.id
            ? action.payload
            : loisirCategorie,
        )
      })
      .addCase(updateLoisirCategorie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteLoisirCategorie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteLoisirCategorie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loisirCategories = state.loisirCategories.filter(
          (loisirCategorie) => loisirCategorie.id !== action.payload,
        )
      })
      .addCase(deleteLoisirCategorie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetLoisirCategorie } = loisirCategorieSlice.actions
export default loisirCategorieSlice.reducer
