import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import hotelPlanService from './hotelPlanService'

const initialHotelPlanState = {
  hotelPlans: [],
  hotelPlan: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all hotel plans
export const getHotelPlans = createAsyncThunk(
  'hotelPlan/getHotelPlans',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await hotelPlanService.getHotelPlans(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single hotel plan
export const getHotelPlan = createAsyncThunk(
  'hotelPlan/getHotelPlan',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await hotelPlanService.getHotelPlan(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new hotel plan
export const createHotelPlan = createAsyncThunk(
  'hotelPlan/createHotelPlan',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await hotelPlanService.createHotelPlan(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update hotel plan
export const updateHotelPlan = createAsyncThunk(
  'hotelPlan/updateHotelPlan',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await hotelPlanService.updateHotelPlan(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete hotel plan
export const deleteHotelPlan = createAsyncThunk(
  'hotelPlan/deleteHotelPlan',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await hotelPlanService.deleteHotelPlan(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const hotelPlanSlice = createSlice({
  name: 'hotelPlan',
  initialState: initialHotelPlanState,
  reducers: {
    resetHotelPlan: (state) => initialHotelPlanState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHotelPlans.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getHotelPlans.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.hotelPlans = action.payload
      })
      .addCase(getHotelPlans.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getHotelPlan.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getHotelPlan.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.hotelPlan = action.payload
      })
      .addCase(getHotelPlan.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createHotelPlan.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createHotelPlan.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.hotelPlans.push(action.payload)
      })
      .addCase(createHotelPlan.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateHotelPlan.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateHotelPlan.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.hotelPlans = state.hotelPlans.map((hotelPlan) =>
          hotelPlan.id === action.payload.id ? action.payload : hotelPlan,
        )
      })
      .addCase(updateHotelPlan.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteHotelPlan.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteHotelPlan.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.hotelPlans = state.hotelPlans.filter(
          (hotelPlan) => hotelPlan.id !== action.payload,
        )
      })
      .addCase(deleteHotelPlan.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetHotelPlan } = hotelPlanSlice.actions
export default hotelPlanSlice.reducer
