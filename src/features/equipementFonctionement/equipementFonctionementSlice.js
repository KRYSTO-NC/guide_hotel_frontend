import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import equipementFonctionementService from './equipementFonctionementService'

const initialEquipementState = {
  equipements: [],
  equipement: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all equipements
export const getEquipements = createAsyncThunk(
  'equipement/getEquipements',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await equipementFonctionementService.getEquipementFonctionements(
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single equipement
export const getEquipement = createAsyncThunk(
  'equipement/getEquipement',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await equipementFonctionementService.getEquipementFonctionement(
        id,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new equipement
export const createEquipement = createAsyncThunk(
  'equipement/createEquipement',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await equipementFonctionementService.createEquipementFonctionement(
        data,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update equipement
export const updateEquipement = createAsyncThunk(
  'equipement/updateEquipement',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await equipementFonctionementService.updateEquipementFonctionement(
        id,
        data,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete equipement
export const deleteEquipement = createAsyncThunk(
  'equipement/deleteEquipement',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await equipementFonctionementService.deleteEquipementFonctionement(
        id,
        token,
      )
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const equipementSlice = createSlice({
  name: 'equipement',
  initialState: initialEquipementState,
  reducers: {
    resetEquipement: (state) => initialEquipementState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEquipements.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEquipements.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.equipements = action.payload
      })
      .addCase(getEquipements.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getEquipement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEquipement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.equipement = action.payload
      })
      .addCase(getEquipement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createEquipement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createEquipement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.equipements.push(action.payload)
      })
      .addCase(createEquipement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateEquipement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateEquipement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.equipements = state.equipements.map((equipement) =>
          equipement.id === action.payload.id ? action.payload : equipement,
        )
      })
      .addCase(updateEquipement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteEquipement.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteEquipement.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.equipements = state.equipements.filter(
          (equipement) => equipement.id !== action.payload,
        )
      })
      .addCase(deleteEquipement.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetEquipement } = equipementSlice.actions
export default equipementSlice.reducer
