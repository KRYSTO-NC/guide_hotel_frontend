import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import imageSlideService from './imageSlideService'

const initialImageSlideState = {
  imageSlides: [],
  imageSlide: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Get all image slides
export const getImageSlides = createAsyncThunk(
  'imageSlide/getImageSlides',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await imageSlideService.getImageSlides(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Get single image slide
export const getImageSlide = createAsyncThunk(
  'imageSlide/getImageSlide',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await imageSlideService.getImageSlide(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Create new image slide
export const createImageSlide = createAsyncThunk(
  'imageSlide/createImageSlide',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await imageSlideService.createImageSlide(data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Update image slide
export const updateImageSlide = createAsyncThunk(
  'imageSlide/updateImageSlide',
  async ({ id, data }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      return await imageSlideService.updateImageSlide(id, data, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

// Delete image slide
export const deleteImageSlide = createAsyncThunk(
  'imageSlide/deleteImageSlide',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user
      await imageSlideService.deleteImageSlide(id, token)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const imageSlideSlice = createSlice({
  name: 'imageSlide',
  initialState: initialImageSlideState,
  reducers: {
    resetImageSlide: (state) => initialImageSlideState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImageSlides.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getImageSlides.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.imageSlides = action.payload
      })
      .addCase(getImageSlides.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getImageSlide.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getImageSlide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.imageSlide = action.payload
      })
      .addCase(getImageSlide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(createImageSlide.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createImageSlide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.imageSlides.push(action.payload)
      })
      .addCase(createImageSlide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateImageSlide.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateImageSlide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.imageSlides = state.imageSlides.map((imageSlide) =>
          imageSlide.id === action.payload.id ? action.payload : imageSlide,
        )
      })
      .addCase(updateImageSlide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteImageSlide.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteImageSlide.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.imageSlides = state.imageSlides.filter(
          (imageSlide) => imageSlide.id !== action.payload,
        )
      })
      .addCase(deleteImageSlide.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetImageSlide } = imageSlideSlice.actions
export default imageSlideSlice.reducer
