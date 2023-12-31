import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import roomService from './roomService'

const initialRoomState = {
  rooms: [],
  room: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all rooms
export const getRooms = createAsyncThunk(
  'room/getRooms',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await roomService.getRooms(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single room
export const getRoom = createAsyncThunk(
  'room/getRoom',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await roomService.getRoom(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new room
export const createRoom = createAsyncThunk(
  'room/createRoom',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await roomService.createRoom(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update room
export const updateRoom = createAsyncThunk(
  'room/updateRoom',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await roomService.updateRoom(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete room
export const deleteRoom = createAsyncThunk(
  'room/deleteRoom',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await roomService.deleteRoom(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const roomSlice = createSlice({
  name: 'room',
  initialState: initialRoomState,
  reducers: {
    resetRoom: (state) => initialRoomState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRooms.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRooms.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.rooms = action.payload
      })
      .addCase(getRooms.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getRoom.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRoom.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.room = action.payload
      })
      .addCase(getRoom.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createRoom.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.rooms.push(action.payload)
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateRoom.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.rooms = state.rooms.map((room) =>
          room.id === action.payload.id ? action.payload : room,
        )
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteRoom.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.rooms = state.rooms.filter((room) => room.id !== action.payload)
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetRoom } = roomSlice.actions
export default roomSlice.reducer
