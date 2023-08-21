import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import messageService from './messageService'

const initialState = {
  messages: [],
  message: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  messageText: '', // Message d'erreur ou de succès
}

// Get all messages
export const getMessages = createAsyncThunk(
  'message/getMessages',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await messageService.getMessages(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single message
export const getMessage = createAsyncThunk(
  'message/getMessage',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await messageService.getMessage(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new message
export const createMessage = createAsyncThunk(
  'message/createMessage',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await messageService.createMessage(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update message
export const updateMessage = createAsyncThunk(
  'message/updateMessage',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await messageService.updateMessage(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete message
export const deleteMessage = createAsyncThunk(
  'message/deleteMessage',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await messageService.deleteMessage(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    resetMessageState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messages = action.payload
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messageText = action.payload
      })
      .addCase(getMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      })
      .addCase(getMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messageText = action.payload
      })
      .addCase(createMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messages.push(action.payload)
      })
      .addCase(createMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messageText = action.payload
      })
      .addCase(updateMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messages = state.messages.map((message) =>
          message._id === action.payload._id ? action.payload : message,
        )
      })
      .addCase(updateMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messageText = action.payload
      })
      .addCase(deleteMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messages = state.messages.filter(
          (message) => message._id !== action.payload,
        )
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messageText = action.payload
      })
  },
})

export const { resetMessageState } = messageSlice.actions
export default messageSlice.reducer
