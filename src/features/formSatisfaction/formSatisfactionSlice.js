import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import formSatisfactionService from './formSatisfactionService'

const initialState = {
  forms: [],
  form: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all form satisfactions
export const getFormSatisfactions = createAsyncThunk(
  'formSatisfaction/getFormSatisfactions',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await formSatisfactionService.getFormSatisfactions(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single form satisfaction
export const getFormSatisfaction = createAsyncThunk(
  'formSatisfaction/getFormSatisfaction',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await formSatisfactionService.getFormSatisfaction(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new form satisfaction
export const createFormSatisfaction = createAsyncThunk(
  'formSatisfaction/createFormSatisfaction',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await formSatisfactionService.createFormSatisfaction(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update form satisfaction
export const updateFormSatisfaction = createAsyncThunk(
  'formSatisfaction/updateFormSatisfaction',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await formSatisfactionService.updateFormSatisfaction(
        id,
        data,
        token,
      )
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete form satisfaction
export const deleteFormSatisfaction = createAsyncThunk(
  'formSatisfaction/deleteFormSatisfaction',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await formSatisfactionService.deleteFormSatisfaction(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const formSatisfactionSlice = createSlice({
  name: 'formSatisfaction',
  initialState,
  reducers: {
    resetFormSatisfaction: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFormSatisfactions.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFormSatisfactions.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forms = action.payload
      })
      .addCase(getFormSatisfactions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getFormSatisfaction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFormSatisfaction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.form = action.payload
      })
      .addCase(getFormSatisfaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createFormSatisfaction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createFormSatisfaction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forms.push(action.payload)
      })
      .addCase(createFormSatisfaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateFormSatisfaction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateFormSatisfaction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forms = state.forms.map((form) =>
          form.id === action.payload.id ? action.payload : form,
        )
      })
      .addCase(updateFormSatisfaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteFormSatisfaction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteFormSatisfaction.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forms = state.forms.filter((form) => form.id !== action.payload)
      })
      .addCase(deleteFormSatisfaction.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetFormSatisfaction } = formSatisfactionSlice.actions
export default formSatisfactionSlice.reducer
