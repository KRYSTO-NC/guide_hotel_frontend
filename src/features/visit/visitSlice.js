import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import visitService from './visitService'

const initialVisitState = {
  visits: [],
  visit: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getVisits = createAsyncThunk(
  'visit/getVisits',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await visitService.getVisits(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const getVisit = createAsyncThunk(
  'visit/getVisit',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await visitService.getVisit(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const createVisit = createAsyncThunk(
  'visit/createVisit',
  async (visitData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await visitService.createVisit(visitData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const updateVisit = createAsyncThunk(
  'visit/updateVisit',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await visitService.updateVisit(id, updatedData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteVisit = createAsyncThunk(
  'visit/deleteVisit',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await visitService.deleteVisit(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const visitSlice = createSlice({
  name: 'visit',
  initialState: initialVisitState,
  reducers: {
    resetVisit: (state) => initialVisitState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVisits.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getVisits.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.visits = action.payload
      })
      .addCase(getVisits.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getVisit.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getVisit.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.visit = action.payload
      })
      .addCase(getVisit.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createVisit.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createVisit.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.visits.push(action.payload)
      })
      .addCase(createVisit.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateVisit.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateVisit.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.visits = state.visits.map((visit) =>
          visit._id === action.payload._id ? action.payload : visit,
        )
      })
      .addCase(updateVisit.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteVisit.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteVisit.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.visits = state.visits.filter(
          (visit) => visit._id !== action.payload,
        )
      })
      .addCase(deleteVisit.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetVisit } = visitSlice.actions
export default visitSlice.reducer
