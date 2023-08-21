import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import urgenceCategorieService from './urgenceCategorieService'

const initialUrgenceCategorieState = {
  urgenceCategories: [],
  urgenceCategory: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getUrgenceCategories = createAsyncThunk(
  'urgenceCategorie/getUrgenceCategories',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceCategorieService.getUrgenceCategories(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const getUrgenceCategory = createAsyncThunk(
  'urgenceCategorie/getUrgenceCategory',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceCategorieService.getUrgenceCategory(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const createUrgenceCategory = createAsyncThunk(
  'urgenceCategorie/createUrgenceCategory',
  async (urgenceCategoryData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceCategorieService.createUrgenceCategory(
        urgenceCategoryData,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const updateUrgenceCategory = createAsyncThunk(
  'urgenceCategorie/updateUrgenceCategory',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceCategorieService.updateUrgenceCategory(
        id,
        updatedData,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteUrgenceCategory = createAsyncThunk(
  'urgenceCategorie/deleteUrgenceCategory',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await urgenceCategorieService.deleteUrgenceCategory(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const urgenceCategorieSlice = createSlice({
  name: 'urgenceCategorie',
  initialState: initialUrgenceCategorieState,
  reducers: {
    resetUrgenceCategorie: (state) => initialUrgenceCategorieState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUrgenceCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUrgenceCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgenceCategories = action.payload
      })
      .addCase(getUrgenceCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getUrgenceCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUrgenceCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgenceCategory = action.payload
      })
      .addCase(getUrgenceCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createUrgenceCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createUrgenceCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgenceCategories.push(action.payload)
      })
      .addCase(createUrgenceCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateUrgenceCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUrgenceCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgenceCategories = state.urgenceCategories.map(
          (urgenceCategory) =>
            urgenceCategory._id === action.payload._id
              ? action.payload
              : urgenceCategory,
        )
      })
      .addCase(updateUrgenceCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteUrgenceCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteUrgenceCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.urgenceCategories = state.urgenceCategories.filter(
          (urgenceCategory) => urgenceCategory._id !== action.payload,
        )
      })
      .addCase(deleteUrgenceCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetUrgenceCategorie } = urgenceCategorieSlice.actions
export default urgenceCategorieSlice.reducer
