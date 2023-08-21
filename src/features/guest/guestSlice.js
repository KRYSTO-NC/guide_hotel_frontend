import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import guestService from './guestService'

const initialState = {
  guests: [],
  guest: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all guests
export const getGuests = createAsyncThunk(
  'guest/getGuests',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await guestService.getGuests(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single guest
export const getGuest = createAsyncThunk(
  'guest/getGuest',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await guestService.getGuest(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new guest
export const createGuest = createAsyncThunk(
  'guest/createGuest',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await guestService.createGuest(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update guest
export const updateGuest = createAsyncThunk(
  'guest/updateGuest',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await guestService.updateGuest(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete guest
export const deleteGuest = createAsyncThunk(
  'guest/deleteGuest',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await guestService.deleteGuest(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGuests.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGuests.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guests = action.payload
      })
      .addCase(getGuests.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getGuest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGuest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guest = action.payload
      })
      .addCase(getGuest.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createGuest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createGuest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guests.push(action.payload)
      })
      .addCase(createGuest.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateGuest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateGuest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guests = state.guests.map((guest) =>
          guest.id === action.payload.id ? action.payload : guest,
        )
      })
      .addCase(updateGuest.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteGuest.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGuest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.guests = state.guests.filter(
          (guest) => guest.id !== action.payload,
        )
      })
      .addCase(deleteGuest.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = guestSlice.actions
export default guestSlice.reducer
