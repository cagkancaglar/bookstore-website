import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from  "./store/category"

export const store = configureStore({
  reducer: {
    category: categoryReducer
  },
})