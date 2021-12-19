import bookReducer from './slices/bookSlices'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
        books: bookReducer
  },
})