import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import questionService from './questionSatisfactionService'

const initialState = {
  questions: [],
  question: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all questions
export const getQuestions = createAsyncThunk(
  'question/getQuestions',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await questionService.getQuestions(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single question
export const getQuestion = createAsyncThunk(
  'question/getQuestion',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await questionService.getQuestion(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new question
export const createQuestion = createAsyncThunk(
  'question/createQuestion',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await questionService.createQuestion(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update question
export const updateQuestion = createAsyncThunk(
  'question/updateQuestion',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await questionService.updateQuestion(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete question
export const deleteQuestion = createAsyncThunk(
  'question/deleteQuestion',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await questionService.deleteQuestion(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    resetQuestion: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.questions = action.payload
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getQuestion.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getQuestion.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.question = action.payload
      })
      .addCase(getQuestion.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createQuestion.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.questions.push(action.payload)
      })
      .addCase(createQuestion.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateQuestion.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateQuestion.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.questions = state.questions.map((question) =>
          question.id === action.payload.id ? action.payload : question,
        )
      })
      .addCase(updateQuestion.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteQuestion.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.questions = state.questions.filter(
          (question) => question.id !== action.payload,
        )
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetQuestion } = questionSlice.actions
export default questionSlice.reducer
