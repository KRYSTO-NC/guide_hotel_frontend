import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import eventCalendarService from './eventCalendarService'

const initialState = {
  events: [],
  event: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all events
export const getEvents = createAsyncThunk(
  'event/getEvents',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await eventCalendarService.getEvents(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single event
export const getEvent = createAsyncThunk(
  'event/getEvent',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await eventCalendarService.getEvent(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new event
export const createEvent = createAsyncThunk(
  'event/createEvent',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await eventCalendarService.createEvent(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update event
export const updateEvent = createAsyncThunk(
  'event/updateEvent',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await eventCalendarService.updateEvent(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete event
export const deleteEvent = createAsyncThunk(
  'event/deleteEvent',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await eventCalendarService.deleteEvent(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const eventCalendarSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    resetEvent: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.events = action.payload
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getEvent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEvent.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.event = action.payload
      })
      .addCase(getEvent.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createEvent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.events.push(action.payload)
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateEvent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.events = state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event,
        )
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteEvent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.events = state.events.filter(
          (event) => event.id !== action.payload,
        )
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetEvent } = eventCalendarSlice.actions
export default eventCalendarSlice.reducer
