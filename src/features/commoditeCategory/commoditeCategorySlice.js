import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import commoditeCategorieService from './commoditeCategoryService'

const initialState = {
  categories: [],
  categorie: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all commodite categories
export const getCommoditeCategories = createAsyncThunk(
  'categorie/getCommoditeCategories',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeCategorieService.getCommoditeCategories(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single commodite categorie
export const getCommoditeCategorie = createAsyncThunk(
  'categorie/getCommoditeCategorie',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeCategorieService.getCommoditeCategorie(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new commodite categorie
export const createCommoditeCategorie = createAsyncThunk(
  'categorie/createCommoditeCategorie',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeCategorieService.createCommoditeCategorie(
        data,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update commodite categorie
export const updateCommoditeCategorie = createAsyncThunk(
  'categorie/updateCommoditeCategorie',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeCategorieService.updateCommoditeCategorie(
        id,
        data,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete commodite categorie
export const deleteCommoditeCategorie = createAsyncThunk(
  'categorie/deleteCommoditeCategorie',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await commoditeCategorieService.deleteCommoditeCategorie(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Upload commodite categorie icone
export const uploadCommoditeCategorieIcone = createAsyncThunk(
  'categorie/uploadCommoditeCategorieIcone',
  async ({ id, iconData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await commoditeCategorieService.uploadCommoditeCategorieIcone(
        id,
        iconData,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const commoditeCategorieSlice = createSlice({
  name: 'commoditeCategorie',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommoditeCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommoditeCategories.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categories = action.payload
      })
      .addCase(getCommoditeCategories.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getCommoditeCategorie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCommoditeCategorie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categorie = action.payload
      })
      .addCase(getCommoditeCategorie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createCommoditeCategorie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCommoditeCategorie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categories.push(action.payload)
      })
      .addCase(createCommoditeCategorie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateCommoditeCategorie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateCommoditeCategorie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categories = state.categories.map((categorie) =>
          categorie.id === action.payload.id ? action.payload : categorie,
        )
      })
      .addCase(updateCommoditeCategorie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteCommoditeCategorie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCommoditeCategorie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categories = state.categories.filter(
          (categorie) => categorie.id !== action.payload,
        )
      })
      .addCase(deleteCommoditeCategorie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(uploadCommoditeCategorieIcone.pending, (state) => {
        state.isLoading = true
      })
      .addCase(uploadCommoditeCategorieIcone.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categorie = { ...state.categorie, icone: action.payload }
      })
      .addCase(uploadCommoditeCategorieIcone.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = commoditeCategorieSlice.actions
export default commoditeCategorieSlice.reducer
