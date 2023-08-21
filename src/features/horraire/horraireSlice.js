import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import horraireService from './horraireService'

const initialHorraireState = {
  horraires: [],
  horraire: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all horraires
export const getHorraires = createAsyncThunk(
  'horraire/getHorraires',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await horraireService.getHorraires(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single horraire
export const getHorraire = createAsyncThunk(
  'horraire/getHorraire',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await horraireService.getHorraire(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new horraire
export const createHorraire = createAsyncThunk(
  'horraire/createHorraire',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await horraireService.createHorraire(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update horraire
export const updateHorraire = createAsyncThunk(
  'horraire/updateHorraire',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await horraireService.updateHorraire(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete horraire
export const deleteHorraire = createAsyncThunk(
  'horraire/deleteHorraire',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await horraireService.deleteHorraire(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const horraireSlice = createSlice({
  name: 'horraire',
  initialState: initialHorraireState,
  reducers: {
    resetHorraire: (state) => initialHorraireState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHorraires.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getHorraires.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.horraires = action.payload
      })
      .addCase(getHorraires.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getHorraire.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getHorraire.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.horraire = action.payload
      })
      .addCase(getHorraire.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createHorraire.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createHorraire.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.horraires.push(action.payload)
      })
      .addCase(createHorraire.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateHorraire.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateHorraire.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.horraires = state.horraires.map((horraire) =>
          horraire.id === action.payload.id ? action.payload : horraire,
        )
      })
      .addCase(updateHorraire.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteHorraire.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteHorraire.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.horraires = state.horraires.filter(
          (horraire) => horraire.id !== action.payload,
        )
      })
      .addCase(deleteHorraire.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetHorraire } = horraireSlice.actions
export default horraireSlice.reducer
